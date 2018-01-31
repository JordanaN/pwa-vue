//Cache
let cacheName = 'cache-site'
//add arquivos para cache e trabalho offline
let filesToCache = [
    '/',
    'index.html',
    'style.css',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-128x128.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-144x144.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-152x152.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-192x192.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-256x256.png',
    'https://schoolofnetcom.github.io/pwa/img/icons/icon-512x512.png'
]

self.addEventListener('install', function (e){
    console.log('[ServiceWorker] Installer');
    //função para esperar o cacheamento d aplicação
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log('[ServiceWorker] Cache app sell')
            return cache.addAll(filesToCache); //add todos no cache
        })
    )
});

self.addEventListener('activate', function (e){
    console.log('[ServiceWorker] Activate')
});

self.addEventListener('fetch', function (e){
    console.log('[ServiceWorker] Fetch', e.request.url);
    //pegando os arquivos do cache
    e.respondWith(
        caches.match(e.request).then(function(response){
            console.log('[ServiceWorker] Get cache for ', e.request.url)
            //retorna o arquivo encontrado ou faz nova requisição
            return response || fetch(e.request)
        })
    )
});
