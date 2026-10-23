#!/usr/bin/env node
/**
 * Ranomafana directory — data integrity check.
 *
 *   node scripts/validate.mjs          check only
 *   node scripts/validate.mjs --write  check, then regenerate data/ranomafana-data.json
 *
 * No dependencies. Node 18+.
 *
 * Exits 1 if any ERROR is found, 0 otherwise. Warnings never fail the run —
 * they are the "you probably want to look at this" pile.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA_JS = path.join(ROOT, 'data', 'ranomafana-data.js');
const DATA_JSON = path.join(ROOT, 'data', 'ranomafana-data.json');
const INDEX = path.join(ROOT, 'index.html');
const IMAGES = path.join(ROOT, 'images');

const errors = [];
const warnings = [];
const notes = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

/* ------------------------------------------------------------------ load */

let DATA;
try {
  const code = fs.readFileSync(DATA_JS, 'utf8');
  // The data file is plain JS with top-level consts; evaluate it in a bare
  // function scope and hand back the namespace object it builds at the end.
  DATA = new Function(`${code}\n; return RANOMAFANA_DATA;`)();
} catch (e) {
  console.error(`\n  FATAL  data/ranomafana-data.js did not parse\n         ${e.message}\n`);
  process.exit(1);
}

const html = fs.readFileSync(INDEX, 'utf8');
const imagesOnDisk = new Set(fs.readdirSync(IMAGES));

const COLLECTIONS = {
  stays: { label: 'Stay', titleKey: 'name' },
  eat: { label: 'Eat', titleKey: 'name' },
  do: { label: 'Do', titleKey: 'name' },
  itineraries: { label: 'Itinerary', titleKey: 'title' },
  events: { label: 'Event', titleKey: 'title' },
  blog: { label: 'Blog', titleKey: 'title' },
};

/* ------------------------------------------ 0. duplicate keys in the source */
/* A repeated key in an object literal is legal JS — the last one silently wins.
   That is how a stale `gallery:` once shadowed a correct one, invisibly. */
{
  const raw = fs.readFileSync(DATA_JS, 'utf8');
  const objects = raw.split(/\n  \{\n/).slice(1);
  for (const obj of objects) {
    const body = obj.split(/\n  \},?/)[0];
    const slug = body.match(/slug:\s*"([^"]+)"/)?.[1];
    const seen = new Map();
    for (const m of body.matchAll(/^    ([a-zA-Z]+):/gm)) {
      seen.set(m[1], (seen.get(m[1]) ?? 0) + 1);
    }
    for (const [k, n] of seen) {
      if (n > 1) err(`"${slug ?? '(unknown)'}" declares "${k}" ${n} times — the last one silently wins`);
    }
  }
}

/* --------------------------------------------------- 1. structural checks */

for (const [key, meta] of Object.entries(COLLECTIONS)) {
  const rows = DATA[key];
  if (!Array.isArray(rows)) {
    err(`collection "${key}" is missing or not an array`);
    continue;
  }
  if (rows.length === 0) warn(`collection "${key}" is empty`);

  const slugs = new Set();
  const titles = new Set();

  for (const row of rows) {
    const title = row[meta.titleKey];
    const where = `${meta.label} "${title ?? '(untitled)'}"`;

    if (!title) err(`${meta.label}: a row has no "${meta.titleKey}"`);
    if (!row.slug) err(`${where} has no slug`);
    else if (slugs.has(row.slug)) err(`${where} reuses slug "${row.slug}"`);
    else slugs.add(row.slug);

    if (title) {
      // The modals look listings up by name/title, so duplicates silently
      // make the second one unreachable.
      if (titles.has(title)) err(`${where} is a duplicate ${meta.titleKey} — the modal will only ever open the first`);
      titles.add(title);
    }

    if (row.slug && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(row.slug)) {
      warn(`${where} slug "${row.slug}" is not kebab-case`);
    }

    // The pop-up map puts its pin here; Ranomafana is about -21.26, 47.45.
    if (row.mapPin !== undefined && !/^-2[0-2]\.\d+,4[67]\.\d+$/.test(row.mapPin)) {
      err(`${where} mapPin "${row.mapPin}" should be "latitude,longitude" near Ranomafana, like "-21.2501,47.4300"`);
    }
  }
}

/* ------------------------------------- 1b. settings and the newer fields */
/* TEAM_EMAIL and EXCHANGE sit at the top of the data file; toGate, asOf,
   contact.whatsapp and itinerary costs were added on 23 Oct 2026. */
{
  const code = fs.readFileSync(DATA_JS, 'utf8');
  const S = new Function(`${code}\n; return { TEAM_EMAIL: typeof TEAM_EMAIL === 'undefined' ? undefined : TEAM_EMAIL, EXCHANGE: typeof EXCHANGE === 'undefined' ? undefined : EXCHANGE };`)();
  if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(S.TEAM_EMAIL ?? '')) err('TEAM_EMAIL at the top of the data file should be the team\'s email address');
  const months = (ym) => { const [y, m] = ym.split('-').map(Number); const now = new Date(); return (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m); };
  const X = S.EXCHANGE;
  if (!X || !(X.eur > 0) || !(X.usd > 0) || !/^\d{4}-\d{2}$/.test(X.asOf ?? '')) {
    err('EXCHANGE at the top of the data file needs eur, usd (Ariary per euro and per dollar) and asOf ("2026-10")');
  } else if (months(X.asOf) > 6) {
    warn(`EXCHANGE was set in ${X.asOf}: the euro and dollar guide may be stale — update it from xe.com`);
  }

  for (const [key, meta] of Object.entries({ stays: COLLECTIONS.stays, eat: COLLECTIONS.eat, do: COLLECTIONS.do })) {
    for (const row of DATA[key] ?? []) {
      const where = `${meta.label} "${row.name}"`;
      if (row.toGate !== undefined && !(typeof row.toGate === 'number' && row.toGate >= 0 && row.toGate <= 40)) {
        err(`${where} toGate should be the distance to the park gate in km, a number like 5.5`);
      }
      if (row.asOf !== undefined) {
        if (!/^\d{4}-\d{2}$/.test(row.asOf)) err(`${where} asOf should look like "2026-10"`);
        else if (months(row.asOf) > 12) warn(`${where}: its details date from ${row.asOf}, over a year ago — recheck them, then update asOf`);
      }
      const wa = row.contact?.whatsapp;
      if (wa !== undefined && wa !== '' && !/^\+\d[\d ]{6,}\d( \/ \+\d[\d ]{6,}\d)*$/.test(wa)) {
        err(`${where} contact.whatsapp "${wa}" should be numbers like "+261 34 07 324 33", several joined by " / "`);
      }
    }
  }

  const park = (DATA.do ?? []).find((d) => d.slug === 'ranomafana-national-park') ?? {};
  for (const it of DATA.itineraries ?? []) {
    for (const raw of it.costs ?? []) {
      const key = raw.replace(/^\?/, '');
      const ok = key === 'park' || key === 'specialist'
        || (key.startsWith('guide:') && (park.guideFees ?? []).some((g) => g.walk.startsWith(key.slice(6))))
        || (key.startsWith('do:') && (DATA.do ?? []).some((d) => d.slug === key.slice(3)));
      if (!ok) err(`Itinerary "${it.title}" costs entry "${raw}" matches no fee — use park, specialist, guide:<walk> or do:<slug>`);
    }
  }
}

/* ----------------------------------------- 2. per-collection field checks */

for (const s of DATA.stays ?? []) {
  const where = `Stay "${s.name}"`;
  if (!['eco', 'hotel', 'guest'].includes(s.type)) {
    err(`${where} has type "${s.type}" — must be eco, hotel or guest, or it vanishes from every filter`);
  }
  for (const f of ['price', 'desc', 'img']) if (!s[f]) err(`${where} is missing "${f}"`);
  for (const f of ['wifi', 'hotWater', 'restaurant', 'parking']) {
    if (typeof s[f] !== 'boolean') err(`${where} amenity "${f}" must be true or false, got ${JSON.stringify(s[f])}`);
  }
  if (s.gallery && !Array.isArray(s.gallery)) err(`${where} gallery must be an array`);
  for (const g of s.gallery ?? []) {
    if (!g.src) err(`${where} has a gallery entry with no src`);
    if (!g.alt) warn(`${where} gallery image ${g.src} has no alt text`);
  }
}

for (const e of DATA.eat ?? []) {
  const where = `Eat "${e.name}"`;
  if (!['malagasy', 'french', 'snack', 'hotel'].includes(e.type)) {
    err(`${where} has type "${e.type}" — must be malagasy, french, snack or hotel`);
  }
  for (const f of ['price', 'rating', 'desc', 'img']) if (!e[f]) err(`${where} is missing "${f}"`);
}

for (const d of DATA.do ?? []) {
  const where = `Do "${d.name}"`;
  for (const f of ['category', 'price', 'desc', 'img']) if (!d[f]) err(`${where} is missing "${f}"`);
  if (d.status && !['open', 'coming-soon'].includes(d.status)) {
    err(`${where} status "${d.status}" — must be open or coming-soon`);
  }
  for (const c of d.circuits ?? []) {
    for (const f of ['name', 'duration', 'level', 'desc']) {
      if (!c[f]) err(`${where} circuit "${c.name ?? '(unnamed)'}" is missing "${f}"`);
    }
  }
}

/* The home page, the park page and the Hiring a guide page all read the park's
   fees from these fields rather than from the price string. */
{
  const park = (DATA.do ?? []).find((d) => d.slug === 'ranomafana-national-park');
  if (!park) warn('Do: no "ranomafana-national-park" entry — the National Park page will be empty');
  else {
    for (const f of ['entryFee', 'childFee', 'communityFee', 'feesAsOf']) {
      if (!park[f]) warn(`Do "${park.name}" is missing "${f}" — the fee shows blank on the home, park and guide pages`);
    }
    if (park.feesAsOf && !/^\d{4}-\d{2}$/.test(park.feesAsOf)) warn(`Do "${park.name}" feesAsOf should look like 2025-08`);
    if (!Array.isArray(park.guideFees) || !park.guideFees.length) warn(`Do "${park.name}" has no guideFees`);
    for (const g of park.guideFees ?? []) {
      if (!g.walk || !g.hours || !g.price) err(`Do "${park.name}" has a guideFees row missing walk, hours or price`);
    }
  }
}

for (const i of DATA.itineraries ?? []) {
  const where = `Itinerary "${i.title}"`;
  for (const f of ['badge', 'level', 'bestFor', 'desc']) if (!i[f]) err(`${where} is missing "${f}"`);
  if (!Array.isArray(i.stops) || i.stops.length === 0) err(`${where} has no stops`);
}

for (const ev of DATA.events ?? []) {
  const where = `Event "${ev.title}"`;
  for (const f of ['dayBadge', 'monthBadge', 'whenLabel', 'desc']) if (!ev[f]) err(`${where} is missing "${f}"`);
  if (ev.date && Number.isNaN(Date.parse(ev.date))) err(`${where} has an unparseable date "${ev.date}"`);
  if (ev.date && !ev.recurring && Date.parse(ev.date) < Date.now()) {
    warn(`${where} is a one-off dated in the past (${ev.date}) — it still shows on the Events page`);
  }
  if (ev.months !== undefined) {
    if (!Array.isArray(ev.months) || ev.months.some((m) => !Number.isInteger(m) || m < 1 || m > 12)) {
      err(`${where} months must be a list of month numbers 1–12, e.g. [6, 7]`);
    }
  } else if (!/weekly/i.test(ev.monthBadge ?? '')) {
    warn(`${where} has no "months" — it will not appear on the When to visit month picker`);
  }
}

for (const b of DATA.blog ?? []) {
  const where = `Blog "${b.title}"`;
  for (const f of ['category', 'excerpt', 'img']) if (!b[f]) err(`${where} is missing "${f}"`);
  if (!['published', 'draft'].includes(b.status)) err(`${where} status must be published or draft`);
  if ('readMins' in b) warn(`${where} has "readMins", which is no longer used — the site works out read time from the body`);
  if (b.body !== undefined && (!Array.isArray(b.body) || b.body.some((line) => typeof line !== 'string' || !line.trim()))) {
    err(`${where} body must be a list of non-empty text lines (a line starting "## " is a sub-heading)`);
  }
  if (!b.body || !b.body.length) warn(`${where} has no body — its reader shows "the full story is on its way"`);
}

/* --------------------------------------------------------- 3. image paths */

const referenced = new Set();
const collect = (v) => {
  if (typeof v === 'string') {
    for (const m of v.matchAll(/images\/[A-Za-z0-9._-]+/g)) referenced.add(m[0].slice('images/'.length));
  } else if (Array.isArray(v)) v.forEach(collect);
  else if (v && typeof v === 'object') Object.values(v).forEach(collect);
};
collect(DATA);

const htmlRefs = new Set(
  // A real file name has an extension; "images/w800/" (phone-sized copies made at
  // publish time) is a folder, not a reference.
  [...html.matchAll(/images\/[A-Za-z0-9._-]+\.[A-Za-z0-9]+/g)].map((m) => m[0].slice('images/'.length))
);
for (const r of htmlRefs) referenced.add(r);

/* A gallery slot may name a photo that has not been taken yet, as long as it
   carries a `fallback` that does exist — that is the planned-photo pattern, not
   a broken path. Collect those separately. */
const planned = new Set();
for (const key of ['stays', 'eat', 'do']) {
  for (const row of DATA[key] ?? []) {
    for (const g of row.gallery ?? []) {
      const src = g.src?.replace(/^images\//, '');
      const fb = g.fallback?.replace(/^images\//, '');
      if (src && !imagesOnDisk.has(src)) {
        if (fb && imagesOnDisk.has(fb)) planned.add(src);
        else err(`images/${src} is referenced by "${row.name ?? row.title}" and has no usable fallback`);
      }
    }
  }
}

/* Each generated placeholder card has a French, German and Malagasy twin
   (placeholder-<slug>-fr.jpg …) that the site shows in that language. */
for (const r of [...referenced]) {
  const base = r.match(/^(placeholder-[a-z0-9-]+)\.jpg$/)?.[1];
  if (!base || /-(fr|de|mg)$/.test(base)) continue;
  for (const [lang, name] of [['fr', 'French'], ['de', 'German'], ['mg', 'Malagasy']]) {
    const twin = `${base}-${lang}.jpg`;
    if (imagesOnDisk.has(twin)) referenced.add(twin);
    else if (imagesOnDisk.has(r)) warn(`images/${twin} is missing, so that placeholder shows in English in ${name} — run npm run photos:placeholders`);
  }
}

for (const r of [...referenced].sort()) {
  if (!imagesOnDisk.has(r) && !planned.has(r)) err(`images/${r} is referenced but not on disk`);
}
if (planned.size) {
  notes.push(`${planned.size} gallery slots are waiting for a photograph (they fall back to a placeholder) — see PHOTO-AND-DATA-GAPS.md`);
}
const orphans = [...imagesOnDisk].filter((f) => !referenced.has(f) && !f.startsWith('.') ).sort();
if (orphans.length) {
  notes.push(`${orphans.length} image${orphans.length === 1 ? '' : 's'} on disk but unused: ${orphans.join(', ')}`);
}

/* Large files slow the site down badly on a Madagascar connection. */
for (const f of imagesOnDisk) {
  const bytes = fs.statSync(path.join(IMAGES, f)).size;
  if (bytes > 500_000) warn(`images/${f} is ${(bytes / 1024 / 1024).toFixed(1)} MB — consider resizing to 1600px / quality 80`);
}

/* --------------------------------------------- 4. data ↔ index.html wiring */

if (!html.includes('data/ranomafana-data.js')) {
  err('index.html does not load data/ranomafana-data.js');
}
if (/const stayData\s*=/.test(html)) {
  err('index.html still defines stayData inline — it should come from the data file only');
}
for (const [fn, id] of [
  ['renderStays', 'stayGrid'],
  ['renderEat', 'eatGrid'],
  ['renderDo', 'doGrid'],
  ['renderItineraries', 'itineraryGrid'],
  ['renderEvents', 'eventList'],
  ['renderBlog', 'blogGrid'],
]) {
  if (!html.includes(`function ${fn}(`)) err(`index.html has no ${fn}() render function`);
  if (!html.includes(`id="${id}"`)) err(`index.html has no #${id} container for ${fn}()`);
}

/* Every stay filter chip must correspond to a type that actually exists. */
const stayTypes = new Set((DATA.stays ?? []).map((s) => s.type));
for (const m of html.matchAll(/filterStayType\('([a-z]+)'/g)) {
  if (m[1] !== 'all' && !stayTypes.has(m[1])) {
    warn(`index.html has a "${m[1]}" stay filter chip but no stay uses that type — the chip shows an empty grid`);
  }
}
const eatTypes = new Set((DATA.eat ?? []).map((e) => e.type));
for (const m of html.matchAll(/filterEatType\('([a-z]+)'/g)) {
  if (m[1] !== 'all' && !eatTypes.has(m[1])) {
    warn(`index.html has a "${m[1]}" dining filter chip but no restaurant uses that type`);
  }
}
for (const t of eatTypes) {
  if (!html.includes(`filterEatType('${t}'`)) {
    notes.push(`dining type "${t}" has no filter chip on the Eat page — those listings only appear under "All"`);
  }
}

/* Things-to-do categories are sorted into filter groups by DO_GROUPS in index.html. */
{
  const block = html.match(/const DO_GROUPS = \{([\s\S]*?)\};/)?.[1];
  if (!block) warn('index.html has no DO_GROUPS map — the Things to do filters will not work');
  else {
    for (const cat of new Set((DATA.do ?? []).map((d) => d.category))) {
      if (!block.includes(`'${cat}':`)) {
        warn(`Things-to-do category "${cat}" is not in DO_GROUPS in index.html — those listings only show under "Everything"`);
      }
    }
  }
}

/* ------------------------------------------------------------ 4b. languages */

const LANGS = { fr: 'French', de: 'German', mg: 'Malagasy' };
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

/* Interface and page text: every key in the English dictionary in index.html
   needs a French, German and Malagasy version, or that text shows in English. */
{
  const start = html.indexOf('const translations = {');
  const end = html.indexOf('function t(key)', start);
  let dicts = null;
  try {
    dicts = new Function(html.slice(start, end).replace('const translations =', 'return'))();
  } catch (e) {
    err(`the translations dictionary in index.html did not parse: ${e.message}`);
  }
  for (const [lang, name] of Object.entries(dicts ? LANGS : {})) {
    const missing = Object.keys(dicts.en).filter((k) => !(k in (dicts[lang] ?? {})));
    if (missing.length) warn(`${plural(missing.length, 'text is', 'texts are')} missing from the ${name} dictionary in index.html (shown in English): ${missing.join(', ')}`);
  }

  // A key written twice in one dictionary is legal JS: the second silently wins,
  // and the first text never shows (it happened with costHeading, 23 Oct 2026).
  const source = html.slice(start, end);
  const blocks = source.split(/\n {6}(en|fr|de|mg): \{/);
  for (let i = 1; i < blocks.length; i += 2) {
    const seen = new Map();
    for (const m of blocks[i + 1].matchAll(/(?:^|[\s,{])([a-zA-Z][a-zA-Z0-9]*): ["'`]/gm)) seen.set(m[1], (seen.get(m[1]) ?? 0) + 1);
    const twice = [...seen].filter(([, n]) => n > 1).map(([k]) => k);
    if (twice.length) err(`the ${blocks[i]} dictionary in index.html defines ${twice.join(', ')} more than once — only the last one shows`);
  }
}

/* Category names are shown through CATEGORY_LABEL in index.html. */
{
  const block = html.match(/const CATEGORY_LABEL = \{([\s\S]*?)\};/)?.[1];
  if (!block) warn('index.html has no CATEGORY_LABEL map — category names show in English in every language');
  else {
    const cats = new Set([...(DATA.do ?? []).map((d) => d.category), ...(DATA.blog ?? []).map((b) => b.category)]);
    for (const cat of cats) {
      if (!block.includes(`'${cat}':`)) warn(`category "${cat}" is not in CATEGORY_LABEL in index.html — it shows in English in every language`);
    }
  }
}

/* Listing text: data/ranomafana-translations.js holds { en, fr, de, mg } per field.
   Its "en" must still match the data file. When it doesn't, the site shows the
   English for that field in every language until the translation is updated. */
const TRANSLATED_FIELDS = {
  stays: ['desc', 'price', 'wifiNote', 'rooms', 'meals', 'features', 'ratesNote', 'contact.note', 'gallery[].alt'],
  eat: ['desc', 'highlights', 'meals', 'contact.note', 'gallery[].alt'],
  do: ['desc', 'price', 'duration', 'tips', 'intro', 'wildlife', 'circuits', 'guideFees', 'contact.note', 'gallery[].alt'],
  itineraries: ['badge', 'title', 'level', 'bestFor', 'parkTicket', 'desc', 'stops'],
  events: ['title', 'dayBadge', 'monthBadge', 'whenLabel', 'desc'],
  blog: ['title', 'excerpt', 'body'],
};
const untranslated = [];
{
  const file = path.join(ROOT, 'data', 'ranomafana-translations.js');
  let TR = null;
  if (!fs.existsSync(file)) warn('data/ranomafana-translations.js is missing — listings show in English in every language');
  else {
    try {
      TR = new Function(`${fs.readFileSync(file, 'utf8')}\n; return LISTING_TRANSLATIONS;`)();
    } catch (e) {
      err(`data/ranomafana-translations.js did not parse: ${e.message}`);
    }
  }
  if (!html.includes('data/ranomafana-translations.js')) warn('index.html never loads data/ranomafana-translations.js');

  // "gallery[].alt" is the alt text of every photo in the gallery, as one list
  const getPath = (obj, p) => {
    const [head, tail] = p.split('[].');
    const base = head.split('.').reduce((v, k) => (v == null ? v : v[k]), obj);
    return tail === undefined ? base : (Array.isArray(base) ? base.map((item) => getPath(item, tail)) : undefined);
  };
  const outdated = [];
  for (const [key, meta] of Object.entries(TR ? COLLECTIONS : {})) {
    for (const [slug, fields] of Object.entries(TR[key] ?? {})) {
      const row = (DATA[key] ?? []).find((r) => r.slug === slug);
      if (!row) { warn(`translations: no ${meta.label.toLowerCase()} has the slug "${slug}" any more — renamed or removed?`); continue; }
      for (const [field, versions] of Object.entries(fields)) {
        const where = `${meta.label} "${row[meta.titleKey]}" ${field}`;
        for (const [lang, name] of Object.entries(LANGS)) {
          if (versions[lang] === undefined) warn(`translations: ${where} has no ${name} version`);
          else if (Array.isArray(versions.en) && versions[lang].length !== versions.en.length) {
            warn(`translations: ${where} — the ${name} version has ${versions[lang].length} items, the English ${versions.en.length}`);
          }
        }
        if (JSON.stringify(versions.en) !== JSON.stringify(getPath(row, field))) outdated.push(where);
      }
    }
    for (const row of DATA[key] ?? []) {
      for (const field of TRANSLATED_FIELDS[key] ?? []) {
        const v = getPath(row, field);
        if (v === undefined || v === '' || (Array.isArray(v) && !v.length)) continue;
        if (!TR[key]?.[row.slug]?.[field]) untranslated.push(`${meta.label} "${row[meta.titleKey]}" ${field}`);
      }
    }
  }
  if (outdated.length) {
    warn(`${plural(outdated.length, 'translated field has', 'translated fields have')} new English in the data file, so the site shows English there in every language until data/ranomafana-translations.js is updated (new "en", then fr, de and mg): ${outdated.join('; ')}`);
  }
  if (untranslated.length) {
    notes.push(`${plural(untranslated.length, 'listing text is', 'listing texts are')} not translated yet, so they show in English in every language${process.argv.includes('--gaps') ? '' : ' — npm run check:gaps lists them'}`);
  }
}

/* ------------------------------------------------------- 5. editorial gaps */

const gaps = { unverified: [], photoNeeded: [], noContact: [] };
for (const [key, meta] of Object.entries(COLLECTIONS)) {
  for (const row of DATA[key] ?? []) {
    const name = `${meta.label}: ${row[meta.titleKey]}`;
    if (row.verified === false) gaps.unverified.push(name);
    if (row.photoNeeded) gaps.photoNeeded.push(name);
    if ((key === 'stays' || key === 'eat') && row.contact) {
      const c = row.contact;
      if (!c.phone && !c.email && !c.website && !c.social) gaps.noContact.push(name);
    }
  }
}

/* ------------------------------------------------------------ 6. report */

const line = (s = '') => console.log(s);
line();
line('  Ranomafana directory — data check');
line('  ' + '─'.repeat(60));
for (const [key, meta] of Object.entries(COLLECTIONS)) {
  line(`  ${String((DATA[key] ?? []).length).padStart(3)}  ${meta.label === 'Stay' ? 'stays' : key}`);
}
line('  ' + '─'.repeat(60));

if (errors.length) {
  line();
  line(`  ${errors.length} ERROR${errors.length === 1 ? '' : 'S'} — the site will misbehave until these are fixed`);
  errors.forEach((e) => line(`    ✗ ${e}`));
}
if (warnings.length) {
  line();
  line(`  ${warnings.length} warning${warnings.length === 1 ? '' : 's'}`);
  warnings.forEach((w) => line(`    ! ${w}`));
}
if (notes.length) {
  line();
  line('  Notes');
  notes.forEach((n) => line(`    · ${n}`));
}

line();
line('  Editorial gaps (tracked in PHOTO-AND-DATA-GAPS.md, not failures)');
line(`    ${String(gaps.unverified.length).padStart(3)}  unconfirmed listings`);
line(`    ${String(gaps.photoNeeded.length).padStart(3)}  awaiting a real photo`);
line(`    ${String(gaps.noContact.length).padStart(3)}  with no published contact details`);
if (process.argv.includes('--gaps')) {
  for (const [k, v] of Object.entries({ ...gaps, untranslated })) {
    if (!v.length) continue;
    line();
    line(`  ${k}:`);
    v.forEach((n) => line(`    · ${n}`));
  }
}

/* ------------------------------------------------------- 7. JSON mirror */

if (process.argv.includes('--write')) {
  if (errors.length) {
    line();
    line('  JSON mirror NOT regenerated — fix the errors first.');
  } else {
    fs.writeFileSync(DATA_JSON, JSON.stringify(DATA, null, 2) + '\n');
    line();
    line('  Regenerated data/ranomafana-data.json');
  }
} else {
  const current = fs.existsSync(DATA_JSON) ? fs.readFileSync(DATA_JSON, 'utf8') : '';
  if (current.trim() !== JSON.stringify(DATA, null, 2).trim()) {
    line();
    line('  data/ranomafana-data.json is out of date — run: npm run check:write');
  }
}

line();
line(errors.length ? '  FAILED' : '  OK');
line();
process.exit(errors.length ? 1 : 0);
