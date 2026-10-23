#!/usr/bin/env node
/**
 * Ranomafana guide — extras added when the site is published (review A3, A4, E1,
 * E2; 23 Oct 2026).
 *
 *   node scripts/publish-extras.mjs _site
 *
 * GitHub runs this on the copy of the site it is about to publish (see
 * .github/workflows/publish.yml), never on the files in this folder, so nothing
 * here needs running or editing by hand. It:
 *
 *  1. writes a copy of the page for each section — …/stay/, …/park/, …/know/ —
 *     with its own title, description and address, so search engines can list
 *     every page (they ignore the "#stay" kind of address);
 *  2. adds structured data (schema.org) describing the destination, the places
 *     to stay and eat, things to do, the park and dated events, taken from the
 *     data file;
 *  3. lists the photos that exist, so empty photo slots aren't requested
 *     (window.PHOTO_FILES), and the 800 px copies made by publish-photos.py
 *     (window.SMALL_FILES), so phones get the smaller ones;
 *  4. rewrites sitemap.xml with every page's address.
 *
 * The site works without any of this: run locally, the page simply has no lists.
 * The site's address comes from <link rel="canonical"> in index.html.
 */

import fs from 'node:fs';
import path from 'node:path';

const SITE = path.resolve(process.argv[2] || '_site');
const read = (file) => fs.readFileSync(path.join(SITE, file), 'utf8');
const html = read('index.html');

// ------------------------------------------------------------------ inputs
const BASE = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1];
if (!BASE) throw new Error('index.html has no <link rel="canonical">');
const DATA = new Function(`${read('data/ranomafana-data.js')}\n; return RANOMAFANA_DATA;`)();
const PARK = DATA.do.find((d) => d.slug === 'ranomafana-national-park') || {};

const objectAfter = (marker) => {
  const start = html.indexOf(marker);
  if (start < 0) throw new Error(`index.html has no "${marker}"`);
  const open = html.indexOf('{', start);
  let depth = 0;
  for (let i = open; i < html.length; i++) {
    if (html[i] === '{') depth++;
    else if (html[i] === '}' && --depth === 0) return new Function(`return ${html.slice(open, i + 1)};`)();
  }
  throw new Error(`could not read ${marker}`);
};
const EN = objectAfter('const translations = {').en;
const PAGE_TITLE = objectAfter('const PAGE_TITLE = {');
const PAGES = new Function(`return ${html.match(/const PAGES = (\[[^\]]*\]);/)[1]};`)();

const TOKENS = {
  stays: DATA.stays.length, eats: DATA.eat.length, dos: DATA.do.length, itins: DATA.itineraries.length,
  circuits: (PARK.circuits || []).length, entryFee: PARK.entryFee, childFee: PARK.childFee,
  communityFee: PARK.communityFee, specialistFee: PARK.specialistFee, parkHours: PARK.hours,
};
const plain = (text) => String(text || '').replace(/<[^>]+>/g, '').replace(/\{(\w+)\}/g, (m, k) => (k in TOKENS ? TOKENS[k] : ''))
  .replace(/\s+/g, ' ').trim();
const attr = (text) => plain(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const siteDescription = html.match(/<meta name="description" content="([^"]*)">/)[1];

// The intro line under each page's heading, as its search description.
function pageDescription(page) {
  const at = html.indexOf(`<section id="page-${page}"`);
  const end = html.indexOf('<section id="page-', at + 10);
  const m = html.slice(at, end < 0 ? undefined : end).match(/class="page-intro" data-i18n="(\w+)"/);
  if (m && EN[m[1]]) return plain(EN[m[1]]);
  if (page === 'park' && PARK.desc) return plain(PARK.desc);
  return siteDescription;
}

// --------------------------------------------------------- structured data
const firstPhone = (c) => (c?.phone || '').split('/')[0].trim() || undefined;
const geo = (pin) => (pin ? { '@type': 'GeoCoordinates', latitude: Number(pin.split(',')[0]), longitude: Number(pin.split(',')[1]) } : undefined);
const address = { '@type': 'PostalAddress', addressLocality: 'Ranomafana', addressRegion: 'Vatovavy', addressCountry: 'MG' };
const links = (c) => [c?.website, c?.social].filter(Boolean);
const clean = (obj) => JSON.parse(JSON.stringify(obj));   // drops empty fields
const list = (items) => ({ '@type': 'ItemList', itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, item })) });
const CUISINE = { malagasy: 'Malagasy', french: 'French', snack: 'Snacks', hotel: 'Hotel restaurant' };
const today = new Date().toISOString().slice(0, 10);

function structuredData(page) {
  const url = page === 'home' ? BASE : `${BASE}${page}/`;
  switch (page) {
    case 'home':
      return [
        { '@type': 'WebSite', name: 'Ranomafana · A community visitor guide', url: BASE, inLanguage: ['en', 'fr', 'de', 'mg'] },
        { '@type': 'TouristDestination', name: 'Ranomafana', description: siteDescription, url: BASE, address },
      ];
    case 'stay':
      return [list(DATA.stays.map((s) => clean({
        '@type': 'LodgingBusiness', name: s.name, description: plain(s.desc), url: `${url}#stay/${s.slug}`,
        telephone: firstPhone(s.contact), email: s.contact?.email || undefined, sameAs: links(s.contact),
        priceRange: s.price, address, geo: geo(s.mapPin),
      })))];
    case 'eat':
      return [list(DATA.eat.map((e) => clean({
        '@type': 'Restaurant', name: e.name, description: plain(e.desc), url: `${url}#eat/${e.slug}`,
        telephone: firstPhone(e.contact), email: e.contact?.email || undefined, sameAs: links(e.contact),
        priceRange: e.price, servesCuisine: CUISINE[e.type], address, geo: geo(e.mapPin),
      })))];
    case 'do':
      return [list(DATA.do.map((d) => clean({
        '@type': 'TouristAttraction', name: d.name, description: plain(d.desc), url: `${url}#do/${d.slug}`,
        isAccessibleForFree: /\bfree\b/i.test(d.price) || undefined, address, geo: geo(d.mapPin),
      })))];
    case 'park':
      return [clean({
        '@type': ['TouristAttraction', 'Park'], name: 'Ranomafana National Park', description: plain(PARK.desc), url,
        openingHours: /^\d\d:\d\d.\d\d:\d\d$/.test(PARK.hours || '') ? `Mo-Su ${PARK.hours.replace(/[^\d:]+/, '-')}` : undefined,
        sameAs: ['https://parcs-madagascar.com/en/parc/ranomafana-2/'], address,
      })];
    case 'events':
      return DATA.events.filter((e) => e.date && e.date >= today).map((e) => clean({
        '@type': 'Event', name: e.title, description: plain(e.desc), startDate: e.date,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', eventStatus: 'https://schema.org/EventScheduled',
        location: { '@type': 'Place', name: 'Ranomafana', address },
      }));
    default:
      return [];
  }
}
const ldJson = (page) => {
  const graph = structuredData(page);
  return graph.length
    ? `\n  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`
    : '';
};

// ------------------------------------------------------------- photo lists
const photoFiles = fs.readdirSync(path.join(SITE, 'images')).filter((f) => fs.statSync(path.join(SITE, 'images', f)).isFile());
const smallDir = path.join(SITE, 'images', 'w800');
const smallFiles = fs.existsSync(smallDir) ? fs.readdirSync(smallDir) : [];
const small = new Set(smallFiles);

// Images written straight into the page need their sizes in the markup, before
// any script runs (the hero downloads at once).
const withSmallPhotos = (text) => text.replace(/<img\b([^>]*?)\bsrc="images\/([^"]+)"([^>]*)>/g, (all, before, name, after) =>
  (small.has(name) && !/srcset=/.test(all)
    ? `<img${before}src="images/${name}" srcset="images/w800/${name} 800w, images/${name} 1600w" sizes="(max-width: 720px) 100vw, 1200px"${after}>`
    : all));

// ------------------------------------------------------------- the pages
const MARKER = /(<!-- PUBLISH-EXTRAS:[\s\S]*?-->)/;
if (!MARKER.test(html)) throw new Error('index.html has no PUBLISH-EXTRAS marker');

function pageHtml(page) {
  const lists = `<script>${page === 'home' ? '' : `window.START_PAGE = ${JSON.stringify(page)}; `}window.PHOTO_FILES = ${JSON.stringify(photoFiles)}; window.SMALL_FILES = ${JSON.stringify(smallFiles)};</script>`;
  let out = withSmallPhotos(html).replace(MARKER, `$1\n  ${lists}`);
  out = out.replace(/(<meta name="twitter:card"[^>]*>)/, `$1${ldJson(page)}`);
  if (page === 'home') return out;

  const title = `${plain(EN[PAGE_TITLE[page]] || page)} · Ranomafana`;
  const description = pageDescription(page);
  const url = `${BASE}${page}/`;
  return out
    .replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n  <base href="../">')
    .replace(/<title>[^<]*<\/title>/, `<title>${attr(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${attr(description)}">`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${attr(title)}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${attr(description)}">`);
}

fs.writeFileSync(path.join(SITE, 'index.html'), pageHtml('home'));
const written = [];
for (const page of PAGES.filter((p) => p !== 'home')) {
  fs.mkdirSync(path.join(SITE, page), { recursive: true });
  fs.writeFileSync(path.join(SITE, page, 'index.html'), pageHtml(page));
  written.push(page);
}

// ------------------------------------------------------------- sitemap
const urls = [BASE, ...written.map((p) => `${BASE}${p}/`)];
fs.writeFileSync(path.join(SITE, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`);

console.log(`Pages: home + ${written.length} (${written.join(', ')}); ${photoFiles.length} photo files, ${smallFiles.length} phone-sized; sitemap with ${urls.length} addresses.`);
