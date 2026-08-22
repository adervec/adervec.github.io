const C="portal-202608221744";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./","manifest.webmanifest","icon.svg","icon-192.png","icon-512.png"])));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))));});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
 e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r;}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(m=>m||caches.match("./"))));});
