// sw.js - Service Worker for Platoon Digital Patrol
const CACHE_NAME = 'Platoon-Patrol-v4';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.png'
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Fetch Event (Required for PWA Install Prompt)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
