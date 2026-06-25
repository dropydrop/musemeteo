const VERSION = '4.0.0'; // CHANGER CE NUMÉRO À CHAQUE NOUVELLE MISE À JOUR POUR LE PWA

// Génère un ID unique à chaque activation/déploiement pour forcer la mise à jour
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
          // Supprime TOUS les anciens caches qui ne correspondent pas au timestamp actuel
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // Stratégie pour la navigation principale (index.html)
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./index.html'))
    );
    return;
  }
  // Pour le reste (API Open-Meteo, Tailwind CDN), on passe direct par le réseau
  e.respondWith(fetch(e.request));
});