/* Cache optimized homepage and Impact hero photos; pages and videos keep their normal loading. */
importScripts('./hero-assets.js');
self.addEventListener('install', event => {
  event.waitUntil(caches.open(HERO_CACHE).then(cache => cache.addAll(HERO_ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('monalisaa-hero-') && key !== HERO_CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const asset = HERO_ASSETS.find(path => new URL(path, self.registration.scope).href === url.href);
  if (!asset) return;
  event.respondWith(caches.open(HERO_CACHE).then(async cache => {
    const saved = await cache.match(event.request);
    if (saved) return saved;
    const response = await fetch(event.request);
    if (response.ok) await cache.put(event.request, response.clone());
    return response;
  }));
});
