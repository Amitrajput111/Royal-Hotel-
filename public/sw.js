/**
 * Hotel D — Service Worker
 *
 * Purpose: PERMANENTLY kill any stale SW (Pixie, or any other old project)
 * that was cached in this browser for localhost:5173.
 *
 * Strategy:
 *   1. On install → skip waiting (activate immediately, don't wait for old SW to finish)
 *   2. On activate → delete ALL caches + claim all open tabs (takes over from Pixie SW immediately)
 *   3. On fetch → ALWAYS fetch from network (never serve stale cached content)
 */

const CACHE_NAME = 'hotel-d-v1';

// ── Install: activate immediately without waiting ──
self.addEventListener('install', (event) => {
  // Force this SW to become active without waiting for old tabs to close
  self.skipWaiting();
});

// ── Activate: wipe every old cache + claim all tabs ──
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // Delete ALL caches (including Pixie's or any other old project's caches)
      caches.keys().then((cacheNames) =>
        Promise.all(cacheNames.map((name) => {
          console.log('[Hotel D SW] Deleting cache:', name);
          return caches.delete(name);
        }))
      ),
      // Take control of ALL currently open tabs immediately
      self.clients.claim(),
    ])
  );
});

// ── Fetch: always go to network — NO caching, NO stale serving ──
self.addEventListener('fetch', (event) => {
  // Pass every request directly to the network.
  // This means Pixie's cached responses can NEVER be served through this SW.
  event.respondWith(
    fetch(event.request).catch(() => {
      // If network fails (e.g., offline), return a minimal error response
      return new Response('Network error — please check your connection.', {
        status: 503,
        statusText: 'Service Unavailable',
      });
    })
  );
});
