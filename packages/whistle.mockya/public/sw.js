if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + '.js', n).href),
    s[i] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const t = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[t]) return;
    let o = {};
    const l = (e) => i(e, t),
      d = { module: { uri: t }, exports: o, require: l };
    s[t] = Promise.all(n.map((e) => d[e] || l(e))).then((e) => (r(...e), o));
  };
}
define(['./workbox-e1e09b90'], function (e) {
  'use strict';
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: 'assets/index-6d18d40d.css', revision: null },
        { url: 'assets/index-b4588b76.js', revision: null },
        { url: 'assets/workbox-window.prod.es5-a7b12eab.js', revision: null },
        { url: 'index.html', revision: '5d74e20b018bdc363531a028f26f41f7' },
        { url: 'manifest.webmanifest', revision: '1f69497d71302d98e1a1422008c6a75c' },
      ],
      {},
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html')));
});
