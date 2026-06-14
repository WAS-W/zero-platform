const CACHE_NAME = 'zer0-v1'
const urlsToCache = [
    '/zero-platform',
	'/zero-platform/index.html',
	'/zero-platform/script.js',
	'/zero-platfrorm/icon.png'
]
self.addEventListener('load',function(event) {
    event.waitUntil(
	caches.open(CACHE_NAME)
	.then( cache => cache.addAll(urlsToCache))
)
})
self.addEventListener('fetch',function(event) {
    event.respondWith(
	caches.match(event.requast)
	.then(response => response || fetch(event.requast))
})