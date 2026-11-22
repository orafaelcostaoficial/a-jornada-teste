// Offline: rede primeiro (pega atualizações quando há internet), cache como reserva.
// Ao mudar a lista de arquivos, suba a versão.
const VERSAO = 'v42';
const PREFIXO = 'ajornada:' + self.registration.scope + ':';
const CACHE = PREFIXO + VERSAO;
const ARQUIVOS = [
  './', './index.html', './css/estilo.css', './manifest.webmanifest',
  './js/app.js', './js/jogo.js', './js/store.js', './js/icones.js', './js/avatar.js',
  './js/tema.js', './js/config.js', './js/nuvem.js', './js/cenario.js', './vendor/supabase.js',
  './data/biblia/blivre/1.json', './data/biblia/blivre/18.json', './data/biblia/blivre/2.json', './data/biblia/blivre/3.json', './data/biblia/blivre/4.json', './data/biblia/blivre/5.json',
  './fonts/fraunces-latin-500-normal.woff2', './fonts/fraunces-latin-600-normal.woff2', './fonts/fraunces-latin-700-normal.woff2',
  './fonts/nunito-latin-400-normal.woff2', './fonts/nunito-latin-600-normal.woff2', './fonts/nunito-latin-700-normal.woff2', './fonts/nunito-latin-800-normal.woff2',
  './data/plano.js', './data/era-principio.js', './data/era-moises.js', './data/era-juizes.js', './data/quiz-cartas-principio.js', './data/quiz-cartas-moises.js', './data/quiz-cartas-juizes.js', './data/desafios.js', './data/imagens.js', './data/avatares.js',
  './icons/icon-192.png', './icons/icon-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith(PREFIXO) && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' })
      .then((r) => { const copia = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copia)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
