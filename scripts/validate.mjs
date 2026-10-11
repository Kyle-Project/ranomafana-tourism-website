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
  if (typeof b.readMins !== 'number') warn(`${where} readMins should be a number`);
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
  [...html.matchAll(/images\/[A-Za-z0-9._-]+/g)].map((m) => m[0].slice('images/'.length))
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
  for (const [k, v] of Object.entries(gaps)) {
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
