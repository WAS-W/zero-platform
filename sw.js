const CACHE_NAME = 'zero-v1'
const urlsToCache = [
    'index.html',
	'script.js',
	'icon.PNG'
]
self.addEventListener('install',function(event) {
    event.waitUntil(
	caches.open(CACHE_NAME)
	.then( cache => cache.addAll(urlsToCache))
)
})
self.addEventListener('fetch',function(event) {
    event.respondWith(
	caches.match(event.requast)
	.then(response => response || fetch(event.request))
	)
})