const VERSION = '4.0.0';
const CACHE_NAME = 'musemeteo-v-' + Date.now();

const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      // Forcer la prise de contrôle immédiate
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (e) => {
  // Pour les requêtes vers index.html, on va chercher sur le réseau d'abord
  if (e.request.mode === 'navigate') {
    e.respondWith(
      // Stratégie "network first" pour index.html
      fetch(e.request)
        .then((response) => {
          // Mettre à jour le cache en arrière-plan
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, clonedResponse);
          });
          return response;
        })
        .catch(() => {
          // Si hors-ligne, servir le cache
          return caches.match('./index.html');
        })
    );
    return;
  }
  
  // Pour les autres ressources (API, CDN, etc.), on utilise le réseau
  e.respondWith(fetch(e.request));
});