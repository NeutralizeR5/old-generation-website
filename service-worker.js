/**
 * OLD GENERATION - Sovereign Guardian (Service Worker)
 * Version: 2.1.0
 * Protocol: Ensure perpetual access to the Archives and Enlistment Portal.
 */

const CACHE_NAME = 'oldgeneration-v2.1';

// Essential Assets for Offline Operational Readiness
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/scripts.js',
  '/manifest.json',
  '/icons/apple-touch-icon.png',
  '/icons/favicon-32x32.png',
  '/icons/favicon-16x16.png',
  '/icons/mstile-150x150.png',
  '/images/logo.png',
  '/images/og-image.jpg',
  '/images/telegram.png',
  '/images/line.png'
];

// Phase I: Installation & Cache Deployment
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Sovereign Guardian: Deploying essential assets to the cache.');
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Phase II: Activation & Legacy Purge
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    }).then(() => {
      console.log('Sovereign Guardian: Legacy caches purged. New protocol active.');
      return self.clients.claim();
    })
  );
});

// Phase III: Intelligence Retrieval (Fetch Strategy)
self.addEventListener('fetch', event => {
  // Ignore video requests to prevent cache overflow and range-request issues
  if (event.request.url.includes('/videos/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Return from cache if available, otherwise fetch from the network
      return cachedResponse || fetch(event.request).then(response => {
        // Do not cache API responses or dynamic data
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Optimise resource management by cloning successful responses into cache
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    }).catch(() => {
      // Offline Fallback for HTML documents
      if (event.request.headers.get('Accept').includes('text/html')) {
        return caches.match('/');
      }
    })
  );
});
