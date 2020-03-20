const CORE_CACHE = 1
const CORE_CACHE_NAME =`cache-core-v${CORE_CACHE}`
const CORE_ASSETS = [
    '/',
    'css/styles-concat.css',
    '/offline'
]


// 'self' is the same as 'this'

console.log('sw.jss')

// installing the service worker

self.addEventListener('install', (e) => {
    console.log('installing ')
    e.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache => {return cache.addAll(CORE_ASSETS)})
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
    if (isCoreGetRequest(event.request)) {
        console.log('Core get request: ', event.request.url);
        // cache only strategy
        event.respondWith(
            caches.open(CORE_CACHE_NAME)
            .then(cache => cache.match(event.request.url))
        )
    } else if (isHtmlGetRequest(event.request)) {
        console.log('html get request', event.request.url)
        // generic fallback
        event.respondWith(

            caches.open('html-cache')
            .then(cache => cache.match(event.request.url))
            .then(response => response ? response : fetchAndCache(event.request, 'html-cache'))
            .catch(e => {
                return caches.open(CORE_CACHE_NAME)
                    .then(cache => cache.match('/offline'))
            })
        )
    }
})

function fetchAndCache(request, cacheName) {
    return fetch(request)
        .then(res => {
            if (!res.ok) {
                throw new TypeError('Bad response status')
            }

            const clone = response.clone()
            caches.open(cacheName).then(cache => cache.put(req, clone))
            return res
        })
}


// DECLAN SOURCE OF HELP 
function isCoreGetRequest(request) {
    return request.method === 'GET' && CORE_ASSETS.includes(getPathName(request.url));
}

function isHtmlGetRequest(request) {
    return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept').indexOf('text/html') > -1);
}

function getPathName(requestUrl) {
    const url = new URL(requestUrl);
    return url.pathname;
}
