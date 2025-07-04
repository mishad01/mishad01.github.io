'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5c0078e55431793d182a661164c8cd9a",
"assets/AssetManifest.bin.json": "55413d4160bc9d9bd1e1eb6a1979061b",
"assets/AssetManifest.json": "bb6d71f422f9e66fb32e759895ff5bec",
"assets/assets/icons/bd.png": "b05eb5f2c3ceb42d11e84e73fda6c62c",
"assets/assets/icons/dl.png": "b90d655d5b4498be4281c900f475c38e",
"assets/assets/icons/mb.png": "5990b479449185569570749b17297b8e",
"assets/assets/icons/ml.png": "f9430fa8def6f1871c8580d3f9071ce8",
"assets/assets/icons/service_bg.png": "c67189003a8230f140c2db8e7bcf3ffc",
"assets/assets/icons/social/codio-svgrepo-com.svg": "acb82b1589679f02ac61837dabaa884b",
"assets/assets/icons/social/cplus.svg": "37fc0a753f09b3c13011ced5d535061d",
"assets/assets/icons/social/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/icons/social/discord.svg": "147f41c95f6ad7574168c3d3a462c455",
"assets/assets/icons/social/firebase.svg": "029fd3c092480d94d80837b5fc4d2744",
"assets/assets/icons/social/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/icons/social/git.svg": "31d050e854b69e255fbe31934a31bb3e",
"assets/assets/icons/social/git2.svg": "cd2c31aaa08144624cf84c9111ce2a1f",
"assets/assets/icons/social/github.svg": "ab4728c21190b20f51ca654cc9ba5983",
"assets/assets/icons/social/github2.svg": "623a63e306e6fb67f5221d2dc4c443b0",
"assets/assets/icons/social/github_icon.svg": "eaa77f2fa4bb2a58b8c4024d2694c96e",
"assets/assets/icons/social/gmail.svg": "c19d80324fab0ae1552b00026d3deb69",
"assets/assets/icons/social/googleplay.svg": "4b9aa68e69116da6172d135b253143b8",
"assets/assets/icons/social/ios.svg": "840561479e039626abd825f2db9d1578",
"assets/assets/icons/social/java.svg": "9c7178ef7e6077ba7a063654def3c240",
"assets/assets/icons/social/kotlin.svg": "a7735a82bb1788b6356ba6f03f8ebfc3",
"assets/assets/icons/social/linkedin.svg": "42e40b74bc1ce4394563f8ab1e984d1e",
"assets/assets/icons/social/linkedin_icon.svg": "65c7f284269c2a7d83500608e1e89d5e",
"assets/assets/icons/social/mail.svg": "65eaf1114432a7b98945177d8ce2ef9e",
"assets/assets/icons/social/nextjs.svg": "97b49ff0243b5c315b88dd0945ceef38",
"assets/assets/icons/social/nodejs.svg": "ddd3342cd4917adc644ff531e3ec945d",
"assets/assets/icons/social/nodejs2.svg": "bf75f8511058ebb1b513d0141fd744de",
"assets/assets/icons/social/npm.svg": "581232861bfeaf52f31722be1cfef809",
"assets/assets/icons/social/python.svg": "8dc878284c9524c80011871c32cef6e5",
"assets/assets/icons/social/reddit.svg": "8386ad1ae7b97df391605da6c7e7ccf2",
"assets/assets/icons/social/reddit2.svg": "c4867c05f01ae68dbe6fded28debf5db",
"assets/assets/icons/social/sqlite.svg": "6c5cd0c9699925cc9e0d53490f5c87ea",
"assets/assets/icons/social/stackoverflow.svg": "41534f42827d6ac06eb51767b26e6e09",
"assets/assets/icons/social/telegram.svg": "82902a9e3f8a057176d2470c8041e4c6",
"assets/assets/icons/social/tensorflow.svg": "8d074c5beccaac704d01216c73c195e5",
"assets/assets/icons/social/twitch.svg": "e4046dceb9ad5803a0d4950b9beddf0c",
"assets/assets/icons/social/twitter.svg": "277b4274b9167f0f1b2c4bfbaf482769",
"assets/assets/icons/social/twitter_icon.svg": "2009d9b18fde6ffe4aeb3e34017b306e",
"assets/assets/icons/social/upwork.svg": "a14a6e761ae44a216412573ae53142a6",
"assets/assets/icons/social/vs.svg": "41b13b62b4e07a2a9106265c3bcc9a45",
"assets/assets/icons/social/youtube.svg": "4e86fe5b92e4aff015cd0c010d43bdfe",
"assets/assets/images/club.jpeg": "a4c12ec3952cbda56910b7cd877cdbdd",
"assets/assets/images/coffee.png": "08701e8b781563f8ca043a1d1c430049",
"assets/assets/images/college.png": "9dd4f85ee40da9cdd74a231f8ccba17f",
"assets/assets/images/ecommerce.jpeg": "5230d45421377a8159137802a7d4b821",
"assets/assets/images/edu_bridge.png": "abdea8ea52bc5f89be37d061ef26f1d8",
"assets/assets/images/hr.jpg": "2670c012344f9666289b554f27ed58cf",
"assets/assets/images/iot.jpg": "c5c0d64edde4aeac446d571eecae30bc",
"assets/assets/images/kotlintask.jpg": "a0b0f7872529805027ecece6220fccda",
"assets/assets/images/k_movie.png": "85a7fd09772b030c58242c1a00b1c07d",
"assets/assets/images/k_tip.png": "33dbe73d9d4b81b066b46ae4da2dd020",
"assets/assets/images/learnathon.jpeg": "d49a2064bfc98ae23788f8cc4938b775",
"assets/assets/images/meal.jpg": "d60c803c30c35b59b688188f40eb4dbe",
"assets/assets/images/message.png": "6b5636aca1dba0e676256cc7e3bbb594",
"assets/assets/images/mishad.png": "1f2af6cafd84af7f34cb6cbe08cf8657",
"assets/assets/images/quizz.png": "57502c7642809e21c426b22703b9ee40",
"assets/assets/images/school.png": "a40f6ae73b1816d0c00cdb1969a46bd0",
"assets/assets/images/social.jpeg": "fcbc31145dc5e0ac80a6e3dd8c2afd94",
"assets/assets/images/task.png": "d0613910a695c8d303a09eef76cabdd3",
"assets/assets/images/uni.png": "e2a3765c74d88654f098a244f4fb79ee",
"assets/assets/vectors/bg1.svg": "d5fc8e16135966e56daa1a558e356484",
"assets/assets/vectors/d3.svg": "3e98f1e749a665c3a8f65a9d5ca7e132",
"assets/assets/vectors/mishad.png": "f4b7963d99d017ac77a52d9758406b48",
"assets/assets/vectors/star.svg": "697d33f28ef978cee09b30b04e1aaafa",
"assets/assets/vectors/v1.svg": "12290627a564c99f1a7b34cffe80aca8",
"assets/assets/vectors/v3.svg": "bed45d4ed0b684e67d9f3422338c0696",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "93f4ab15626aa27ac6e0bdf999c81ef2",
"assets/NOTICES": "22821376df3084d127414f582c11ed39",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "30f093c3af0eb3343ff033ab744899d0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c7a9a4e5100821935a76ae87ff950817",
"/": "c7a9a4e5100821935a76ae87ff950817",
"main.dart.js": "ef044fe40bb1937c07453eba2a375b64",
"manifest.json": "b64cb23a1020c3f6ea4ec9727e61d0a4",
"version.json": "7cd7c59922dff3812317b73df18b3037"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
