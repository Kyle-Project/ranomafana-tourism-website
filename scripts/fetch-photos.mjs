#!/usr/bin/env node
/**
 * Fetch openly-licensed photographs from Wikimedia Commons.
 *
 *   node scripts/fetch-photos.mjs --list        show candidates, download nothing
 *   node scripts/fetch-photos.mjs --slot=SLOT   download one slot
 *   node scripts/fetch-photos.mjs --all         download every slot below
 *
 * WHAT THIS IS FOR
 * ----------------
 * Only for subjects that are public places and wildlife: the national park, its
 * lemurs and chameleons, the Namorona river, the waterfalls, the thermal pool.
 * Commons has genuine, freely-licensed photographs of those.
 *
 * WHAT IT IS NOT FOR
 * ------------------
 * Individual businesses. There are no free-licence photos of Karibotel or Soa
 * Lodge, and a generic rainforest shot sitting on a hotel card implies it is a
 * photo of that hotel. Those need your own camera — see PHOTO-AND-DATA-GAPS.md.
 *
 * LICENSING — READ THIS
 * ---------------------
 * Commons images are free to reuse but nearly all require attribution, and some
 * require share-alike. This script writes images/PHOTO-CREDITS.md with the author,
 * licence and source URL for everything it downloads. That file must stay in the
 * repo, and the credits belong somewhere on the site before you publish. Public
 * domain / CC0 files need no credit but are listed anyway.
 *
 * The script SKIPS any file whose licence it cannot positively identify as free.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMAGES = path.join(ROOT, 'images');
const CREDITS = path.join(IMAGES, 'PHOTO-CREDITS.md');
const API = 'https://commons.wikimedia.org/w/api.php';
const UA = 'RanomafanaDirectory/1.0 (community tourism site; contact via site)';

/**
 * Each slot names a gallery filename the data file already expects, plus the
 * Commons categories to search. Filenames match the `src` values in
 * data/ranomafana-data.js, so a downloaded file lights up its slot immediately.
 */
const SLOTS = [
  // The national park's own slots. Its walking circuits are described inside the
  // park listing rather than as separate entries, so these cover all of them.
  { file: 'ranomafana-national-park-wildlife.jpg', categories: ['Hapalemur aureus', 'Ranomafana National Park'], search: 'golden bamboo lemur Ranomafana' },
  { file: 'ranomafana-national-park-canopy.jpg', categories: ['Ranomafana National Park'], search: 'Ranomafana rainforest canopy' },
  { file: 'ranomafana-national-park-trail.jpg', categories: ['Ranomafana National Park'], search: 'Ranomafana national park trail' },

  // Waterfall and river — public natural features on the Namorona.
  { file: 'cascade-andriamamovoka-falls.jpg', categories: ['Andriamamovoka Falls', 'Namorona River'], search: 'Andriamamovoka falls Namorona' },
  { file: 'cascade-andriamamovoka-river.jpg', categories: ['Namorona River'], search: 'Namorona river Madagascar' },
  { file: 'namorona-kayaking-river.jpg', categories: ['Namorona River'], search: 'Namorona river Ranomafana' },

  // Endemic flora for the arboretum.
  { file: 'ranomafana-arboretum-flora.jpg', categories: ['Flora of Ranomafana National Park', 'Flora of Madagascar'], search: 'Madagascar endemic plant Ranomafana' },
];

/*
 * Deliberately NOT listed, and they should stay that way:
 *
 *   every hotel, restaurant and guesthouse slot   no free-licence photos of these
 *                                                 businesses exist, and a generic
 *                                                 rainforest shot on a hotel card
 *                                                 misrepresents the hotel
 *   studio-olonala-*                              a specific business
 *   village-artisan-market-*                      needs a photo of THIS market
 *   voi-ambohimagneva-*                           your own project, your own photos
 *   voi-mitsinjo-*                                a specific community reserve run by
 *                                                 VOI Ambatolahy — photograph it with
 *                                                 the association's permission
 *   jirama-waterfall-hike-*                       unverified location; photograph it
 *                                                 yourself once confirmed
 */

const args = process.argv.slice(2);
const LIST_ONLY = args.includes('--list');
const ALL = args.includes('--all');
const ONE = args.find((a) => a.startsWith('--slot='))?.split('=')[1];

if (!LIST_ONLY && !ALL && !ONE) {
  const doc = fs.readFileSync(fileURLToPath(import.meta.url), 'utf8')
    .split('*/')[0].split('/**')[1] ?? '';
  console.log(doc.replace(/^ ?\* ?/gm, '').trim() + '\n');
  process.exit(0);
}

/* Licence templates that permit commercial reuse. Anything else is skipped. */
const FREE = /^(cc0|cc-by(-sa)?-\d|public domain|pd-)/i;

async function api(params) {
  const url = `${API}?${new URLSearchParams({ format: 'json', origin: '*', ...params })}`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${params.list ?? params.prop}`);
  return res.json();
}

async function candidates(slot) {
  const seen = new Map();
  for (const cat of slot.categories) {
    try {
      const r = await api({
        action: 'query', list: 'categorymembers', cmtitle: `Category:${cat}`,
        cmtype: 'file', cmlimit: '50',
      });
      for (const m of r.query?.categorymembers ?? []) seen.set(m.title, m.title);
    } catch { /* category may not exist — fall through to search */ }
  }
  if (seen.size < 3) {
    try {
      const r = await api({
        action: 'query', list: 'search', srsearch: `${slot.search} filetype:bitmap`,
        srnamespace: '6', srlimit: '20',
      });
      for (const m of r.query?.search ?? []) seen.set(m.title, m.title);
    } catch (e) {
      console.log(`         search unavailable (${e.message})`);
    }
  }
  return [...seen.keys()];
}

async function meta(title) {
  const r = await api({
    action: 'query', titles: title, prop: 'imageinfo',
    iiprop: 'url|size|extmetadata', iiurlwidth: '1600',
  });
  const page = Object.values(r.query?.pages ?? {})[0];
  const info = page?.imageinfo?.[0];
  if (!info) return null;
  const em = info.extmetadata ?? {};
  const strip = (s) => (s ?? '').replace(/<[^>]*>/g, '').trim();
  return {
    title,
    url: info.thumburl || info.url,
    width: info.thumbwidth || info.width,
    height: info.thumbheight || info.height,
    licence: strip(em.LicenseShortName?.value) || strip(em.License?.value),
    author: strip(em.Artist?.value) || 'Unknown',
    credit: strip(em.Credit?.value),
    descriptionUrl: info.descriptionurl,
  };
}

function isFree(m) {
  const l = (m.licence || '').toLowerCase();
  return FREE.test(l) || l.includes('cc0') || l.includes('public domain');
}

async function run() {
  const slots = ONE ? SLOTS.filter((s) => s.file === ONE) : SLOTS;
  if (ONE && !slots.length) {
    console.error(`No slot named "${ONE}". Known slots:`);
    SLOTS.forEach((s) => console.error(`  ${s.file}`));
    process.exit(1);
  }

  const credits = [];
  let reachable = true;
  for (const slot of slots) {
    const dest = path.join(IMAGES, slot.file);
    if (fs.existsSync(dest) && !LIST_ONLY) {
      console.log(`  skip   ${slot.file} — already present`);
      continue;
    }
    process.stdout.write(`  ${slot.file}\n`);
    let picked = null;
    let found = [];
    try {
      found = await candidates(slot);
    } catch (e) {
      console.log(`         could not reach Commons: ${e.message}\n`);
      reachable = false;
      continue;
    }
    if (!found.length) { console.log('         no candidates returned\n'); continue; }
    for (const title of found) {
      let m = null;
      try { m = await meta(title); } catch { continue; }
      if (!m || !m.url) continue;
      if (!isFree(m)) { console.log(`         skipped ${title} — licence "${m.licence || 'unknown'}"`); continue; }
      if (m.width < 900) continue;
      picked = m;
      break;
    }
    if (!picked) { console.log('         no freely-licensed candidate found\n'); continue; }

    console.log(`         ${picked.title}`);
    console.log(`         ${picked.licence} · ${picked.author}`);
    if (LIST_ONLY) { console.log(`         ${picked.descriptionUrl}\n`); continue; }

    const res = await fetch(picked.url, { headers: { 'User-Agent': UA } });
    if (!res.ok) { console.log(`         download failed: ${res.status}\n`); continue; }
    fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    console.log(`         saved → images/${slot.file}\n`);
    credits.push({ file: slot.file, ...picked });
  }

  if (credits.length) {
    const head = fs.existsSync(CREDITS)
      ? fs.readFileSync(CREDITS, 'utf8').trimEnd() + '\n'
      : '# Photo credits\n\nPhotographs sourced from Wikimedia Commons under free licences.\n' +
        'Attribution is a licence condition — these credits must appear on the site.\n';
    const rows = credits.map((c) =>
      `\n## images/${c.file}\n\n- Source: ${c.title}\n- Author: ${c.author}\n- Licence: ${c.licence}\n- Page: ${c.descriptionUrl}\n`
    ).join('');
    fs.writeFileSync(CREDITS, head + rows);
    console.log(`  Wrote ${credits.length} credit${credits.length === 1 ? '' : 's'} to images/PHOTO-CREDITS.md`);
    console.log('  Attribution is required — put these credits on the site before publishing.');
  }
  if (!reachable) {
    console.log('\n  Commons could not be reached. This script needs ordinary internet');
    console.log('  access to commons.wikimedia.org — run it from your own machine.\n');
    return;
  }
  console.log('\n  Run `npm run check` next.\n');
}

run().catch((e) => { console.error(`\n  FAILED: ${e.message}\n`); process.exit(1); });
