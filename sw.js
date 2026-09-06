self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("portal-")).map(k=>caches.delete(k)))).then(()=>self.registration.unregister())));
