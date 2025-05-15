const CACHE_NAME = 'oldgeneration-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/manifest.json',
  '/scripts.js',
  '/icons/apple-touch-icon.png',
  '/icons/favicon-32x32.png',
  '/icons/favicon-16x16.png',
  '/icons/mstile-150x150.png',
  '/images/logo.png',
  '/images/og-image.jpg',
  '/images/telegram.png',
  '/images/line.png',
  '/videos/shortfilm.mp4',
  '/videos/captions.vtt'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request).then(response => {
        if (event.request.url.includes('/api/')) {
          return response;
        }
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    }).catch(() => {
      if (event.request.headers.get('Accept').includes('text/html')) {
        return caches.match('/');
      }
    })
  );
});
