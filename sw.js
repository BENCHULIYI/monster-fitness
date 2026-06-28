// Service Worker for Monster Fitness PWA
const CACHE_NAME = 'monster-fitness-v5';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting(); // 强制新Service Worker立即激活
});

self.addEventListener('fetch', event => {
  // 网络优先策略，确保每次都能获取最新版本
  event.respondWith(
    fetch(event.request).then(response => {
      // 请求成功，更新缓存
      if (response && response.status === 200) {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
      }
      return response;
    }).catch(() => {
      // 网络失败，从缓存读取
      return caches.match(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => {
      return Promise.all(
        names.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    }).then(() => {
      return self.clients.claim(); // 立即接管所有页面
    })
  );
});
