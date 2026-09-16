// 西语每日练 · 离线缓存
// 每次发版只需把 v1 改成 v2、v3…… 用户端会自动下载新缓存并删除旧缓存。
const CACHE_NAME = 'xiyu-daily-v21';
const ASSETS = [
    './',
    './index.html',
    './course-data.js',
    './dict-data.js',
    './manifest.webmanifest',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (c) { return c.addAll(ASSETS); })
            .then(function () { return self.skipWaiting(); })
    );
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys()
            .then(function (keys) {
                return Promise.all(
                    keys.filter(function (k) { return k !== CACHE_NAME; })
                        .map(function (k) { return caches.delete(k); })
                );
            })
            .then(function () { return self.clients.claim(); })
    );
});

self.addEventListener('fetch', function (e) {
    if (e.request.method !== 'GET') return;
    if (new URL(e.request.url).origin !== location.origin) return;
    e.respondWith(
        caches.match(e.request).then(function (hit) {
            if (hit) return hit;
            return fetch(e.request).then(function (res) {
                const copy = res.clone();
                caches.open(CACHE_NAME).then(function (c) { c.put(e.request, copy); });
                return res;
            }).catch(function () {
                return caches.match('./index.html');
            });
        })
    );
});
