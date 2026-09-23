const CACHE_NAME = "focus-app-v1";
const assets = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
  "https://fonts.googleapis.com/icon?family=Material+Icons+Round",
];

// Install Service Worker
self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(assets);
    }),
  );
});

// Fetch events (Offline mode support)
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    }),
  );
});
