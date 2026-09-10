// Minimal service worker — required by browsers to allow "Install App".
// This app needs a live connection anyway (Firebase), so it doesn't cache
// anything for offline use — it just passes every request straight through.

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => new Response('You are offline. Please reconnect to use this app.'))
  );
});
