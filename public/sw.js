const CORE_CACHE = 1
const CORE_CACHE_NAME = `cache-core-v${CORE_CACHE}`
const CORE_ASSETS = [
    '/',
    'css/styles-concat.css',
    '/offline'
]


// 'self' is the same as 'this'

console.log('sw.jss')

// installing the service worker

self.addEventListener('install', (e) => {
    console.log('installing ', e)
    e.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache => {
            return cache.addAll(CORE_ASSETS)
        })
        .then(() => self.skipWaiting())
    )
})
// activating the sw
self.addEventListener('activate', event => {
    console.log('Activated service worker!')
    // event.waitUntil(clients.claim())
})

// fetching the sw



self.addEventListener('fetch', event => {
    console.log('Fetch event: ', event.request.url);
    const req = event.request
    
    // mikaels respondWith

    event.respondWith(
        caches.match(req)
        .then(cachedRes => {
            if (cachedRes) {
                console.log(cachedRes)
                return cachedRes
            }
            return fetch(req)
        }).catch(e => {
            return caches.open(CORE_CACHE_NAME)
                .then(cache => cache.match('/offline'))
        })
    )
})