// Service Worker pour FlexBeat
const CACHE_NAME = 'flexbeat-v1.0.0'
const urlsToCache = [
  '/',
  '/offline.html',
  '/manifest.json'
]

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installation en cours...')
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cache ouvert')
        return cache.addAll(urlsToCache)
      })
      .catch((error) => {
        console.error('Service Worker: Erreur lors de l\'installation:', error)
      })
  )
})

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activation en cours...')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Suppression de l\'ancien cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// Interception des requêtes
self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes chrome-extension et autres schémas non supportés
  if (event.request.url.startsWith('chrome-extension://') || 
      event.request.url.startsWith('chrome://') ||
      event.request.url.startsWith('moz-extension://') ||
      event.request.url.startsWith('safari-extension://')) {
    return
  }
  
  // Ignorer les requêtes non-GET
  if (event.request.method !== 'GET') {
    return
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retourner la réponse du cache si elle existe
        if (response) {
          return response
        }
        
        // Sinon, faire la requête réseau
        return fetch(event.request)
          .then((response) => {
            // Vérifier que la réponse est valide
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }
            
            // Cloner la réponse pour la mettre en cache
            const responseToCache = response.clone()
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache)
              })
              .catch((error) => {
                console.error('Service Worker: Erreur lors de la mise en cache:', error)
              })
            
            return response
          })
          .catch(() => {
            // En cas d'erreur réseau, retourner la page offline
            if (event.request.destination === 'document') {
              return caches.match('/offline.html')
            }
          })
      })
  )
})

// Gestion des notifications push (pour une utilisation future)
self.addEventListener('push', (event) => {
  console.log('Service Worker: Notification push reçue')
  // Ici vous pourrez ajouter la logique pour afficher des notifications
})

// Gestion des clics sur les notifications
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Clic sur notification')
  event.notification.close()
  
  event.waitUntil(
    clients.openWindow('/')
  )
}) 