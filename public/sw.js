// notes* Service worker(sw) are always promise based
// SW steps are 1. installing, 2. activating & 3. fetching

const CORE_CACHE = 1
const CORE_CACHE_NAME = `demo-core-v${CORE_CACHE}`

const precacheResources = [
    '/',
    'css/styles.css'
]


// 'self' is the same as 'this'

console.log('sw.jss')

// installing the service worker

self.addEventListener('install', (e) => {
    console.log('installing ')
    self.skipWaiting()

    // alles wordt gedaan en dan slapen, hierin the functionaliteiten aan meegeven
    //     // dingen hier opslaan
    //     // use case voor sw = caching 

    //     caches.open(CORE_CACHE_NAME)
    //     .then(cache => cache.addAll(precacheResources))

})
// activating the sw
self.addEventListener('activate', event => {
    console.log('Activated service worker!')
    
})

// fetching the sw
self.addEventListener('fetch', event => {
    console.log('fetching', event.request.url)
    // event.respondWith(caches.match(event.request))
    //     .then(cachedResponse => {
    //         if (cachedResponse) {
    //             return cachedResponse
    //         }
    //         return fetch(event.request)
    //     })
})