const CACHE_NAME = 'oldgeneration-v2.5';
const ASSETS = ['/', '/index.html', '/styles.css', '/scripts.js', '/manifest.json', '/images/logo.png', '/images/telegram.png', '/images/line.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('/videos/')) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    return caches.open(CACHE_NAME).then(cache => { cache.put(event.request, response.clone()); return response; });
  })));
});
