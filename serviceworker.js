var cacheName = 'mikit-doc';
var cacheList = [
    'https://millylee.github.io/mikit-doc/',
    'https://unpkg.com'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(cacheList);
        })
    );
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }));
        })
    );
});