const CACHE_NAME = 'oldgeneration-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/manifest.json',
  '/images/logo.png',
  '/images/og-image.jpg',
  '/images/telegram.png',
  '/images/line.png',
  '/videos/shortfilm.mp4',
  '/videos/captions.vtt'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        return cachedResponse || fetch(event.request).then(response => {
          // Cache dynamic content except for API calls
          if (event.request.url.includes('/api/')) {
            return response;
          }
          
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      }).catch(() => {
        // Offline fallback for HTML requests
        if (event.request.headers.get('Accept').includes('text/html')) {
          return caches.match('/');
        }
      })
  );
});
