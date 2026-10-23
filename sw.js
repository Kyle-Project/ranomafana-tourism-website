/* Offline reading for the Ranomafana guide (review B7, 23 Oct 2026).

   Once someone has opened the site, the browser keeps a copy of the page, the
   data, the translations and the maps, so the guide still opens in the forest or
   on the bus with no signal. With a signal it always fetches the newest version
   first, so a published change is never held back. Photos are not kept, to save
   space on visitors' phones.

   Nothing here needs editing when listings change. If this file is ever changed,
   raise the number in CACHE so old copies are cleared. */

const CACHE = 'ranomafana-offline-v1';
const KEEP = [
  './',
  'index.html',
  'data/ranomafana-data.js',
  'data/ranomafana-translations.js',
  'images/map-madagascar.svg',
  'images/map-ranomafana.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(KEEP))
      .catch(() => { /* offline copies are a bonus; the site works without them */ })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((name) => name !== CACHE).map((name) => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

// Pages, scripts, data and maps: network first, the kept copy when offline.
const keepable = (url) => url.origin === self.location.origin
  && !/\.(jpe?g|png|webp|avif|gif|mp4)$/i.test(url.pathname);

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (!keepable(url)) return;
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
        }
        return response;
      })
      .catch(() => caches.match(request, { ignoreSearch: true })
        .then((kept) => kept || (request.mode === 'navigate' ? caches.match('index.html') : undefined))
        .then((kept) => kept || Response.error()))
  );
});
