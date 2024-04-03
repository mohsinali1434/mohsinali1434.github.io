'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "480903872f60433f1d6e2e974c3eda51",
"assets/AssetManifest.bin.json": "ea216932d6d1cf0bba684a84f00bcfe6",
"assets/AssetManifest.json": "09e68db7bdfe7be9661db18108b6bdff",
"assets/assets/images/coming-soon.png": "02862fa23e1c154df4cd1837589f535f",
"assets/assets/images/intro-image.png": "dd9f69b5ef2f077e3d280eeda12b3bda",
"assets/assets/project-images/calculator-app.png": "23c00fa00fcb6645e23409a8ab2515f1",
"assets/assets/project-images/tic-tac-toe.png": "6f6213c5300c74966f4f60b3ac790dcd",
"assets/assets/social-media-svg/facebook-outlined.svg": "29f409995ceeb3a84446a8326cd63028",
"assets/assets/social-media-svg/facebook.svg": "a6a36fca4b5a389d0eefbbd3a9c53a7e",
"assets/assets/social-media-svg/github-outlined.svg": "3c7f33536d3be82c15efd2503cae493a",
"assets/assets/social-media-svg/github.svg": "4427fedd16df8ab5da0f388e0d94ffe2",
"assets/assets/social-media-svg/instagram-outlined.svg": "4dc5ed4a875f2618aaf5a27d24893781",
"assets/assets/social-media-svg/instagram.svg": "2fa21f6fce030076be9d89dd85496a56",
"assets/assets/social-media-svg/linkedin-outlined.svg": "72bc547df961c5eda233e79bae4560a5",
"assets/assets/social-media-svg/linkedin.svg": "5100826d208b6c173e599d9463b36dcf",
"assets/assets/social-media-svg/twitter-outlined.svg": "7542493d1224cf74db40759947931e3b",
"assets/assets/social-media-svg/twitter.svg": "37caa6621fbf99d618c438b5a3c3ca5e",
"assets/assets/tech-svg/bootstrap.svg": "5994f5e44d7f1e0546aeaf23a16b3ac6",
"assets/assets/tech-svg/canva.svg": "795b4c789a7301a6b0b858ded8d69820",
"assets/assets/tech-svg/css.svg": "152c7fe46af2e912b746e392a945a6d8",
"assets/assets/tech-svg/dart.svg": "20d7b82998ddc6f73a4310bf58e609df",
"assets/assets/tech-svg/figma.svg": "3b0fb69f67df8e1c5665644cc8f7a983",
"assets/assets/tech-svg/firebase.svg": "1da8d950e3f30a69d7c957c26238e1de",
"assets/assets/tech-svg/flutter.svg": "92199e1295daa401a178e23bcfc438c8",
"assets/assets/tech-svg/github.svg": "91fc7cd187b65073322024169d2cd416",
"assets/assets/tech-svg/google-maps.svg": "6bafda451909ba2a5c14510482cfd146",
"assets/assets/tech-svg/html.svg": "a0657d1cac3b20f1e113738056db3c63",
"assets/assets/tech-svg/jira.svg": "a397460c103a310f9ac429fdee79cf9c",
"assets/assets/tech-svg/laravel.svg": "82639bcdcf4afbefaebfed38a7c7fab4",
"assets/assets/tech-svg/mongodb.svg": "c2a864c96dbfc449ec45dd7ac4438628",
"assets/assets/tech-svg/nodejs.svg": "a123152868245dee71c441124a98ac3e",
"assets/assets/tech-svg/python.svg": "4948e6764d2214fe0c09621c6defe06b",
"assets/assets/tech-svg/rest-api.svg": "173b8551b211d730ea7c31dcd5605ebc",
"assets/assets/tech-svg/weka.svg": "573788c312ff6d748bc5418d97d17dc1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d9f08763b2dd22384fd372eee80bd804",
"assets/NOTICES": "713a84b8edfa73f6da1a88cdfd17eecb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.PNG": "4e03ac3334d663e751a70de3285b7bae",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fcdbdfb68e6e3ad581a6963dd522a549",
"/": "fcdbdfb68e6e3ad581a6963dd522a549",
"main.dart.js": "bedd3e36dfd92f34081894b2a37ae6ad",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
