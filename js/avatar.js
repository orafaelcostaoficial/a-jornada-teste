import { avatarPorId, AVATARES_COM_IMAGEM } from '../data/avatares.js';
import { ico } from './icones.js';

// Item que marca cada estágio, mostrado como selo no retrato.
const SELO_ITEM = { cajado: 'footprints', alforje: 'backpack', manto: 'shirt', lamparina: 'lamp', pergaminho: 'scroll', aura: 'sparkles' };

// Cenário de fundo do retrato por estágio (0 Peregrino … 6 Ancião). O personagem fica por cima.
// Cada estágio acrescenta detalhes: estrada, dunas, ovelhas, lamparina e estrelas, muralhas, luz.
const FUNDOS = [
  // 0 Peregrino: amanhecer simples
  '<defs><linearGradient id="g0" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff9a4d"/><stop offset="1" stop-color="#ffcf6e"/></linearGradient></defs><rect width="100" height="100" fill="url(#g0)"/><circle cx="50" cy="70" r="16" fill="#fff1a8" opacity=".9"/><path d="M0 78c20-6 35-6 50 0s32 6 50 0v22H0z" fill="#d9783a"/>',
  // 1 Andarilho: colinas e estrada
  '<defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffbf5a"/><stop offset="1" stop-color="#ffe08a"/></linearGradient></defs><rect width="100" height="100" fill="url(#g1)"/><path d="M0 70c18-12 34-12 50-4s34 4 50-6v40H0z" fill="#4caf50"/><path d="M42 100l6-30h4l6 30z" fill="#f2d29a"/><circle cx="80" cy="22" r="7" fill="#fff3c4"/>',
  // 2 Viajante: deserto, dunas e palmeira
  '<defs><linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff8f3d"/><stop offset="1" stop-color="#ffc061"/></linearGradient></defs><rect width="100" height="100" fill="url(#g2)"/><circle cx="24" cy="26" r="9" fill="#fff0c4"/><path d="M0 74c16-14 34-14 48-2 12-10 30-10 52 4v24H0z" fill="#d96a2b"/><path d="M84 74c0-12 1-20 3-26" stroke="#8a5a2b" stroke-width="3" fill="none"/><path d="M87 48c-6-5-14-3-17 2 6-2 11-2 17-2zm0 0c5-6 13-6 16-1-6-1-10-1-16 1z" fill="#3f8a3d"/>',
  // 3 Pastor: pastos verdes com ovelhas
  '<defs><linearGradient id="g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb84d"/><stop offset="1" stop-color="#ffd77a"/></linearGradient></defs><rect width="100" height="100" fill="url(#g3)"/><path d="M0 66c22-10 40-10 56-2s30 6 44-2v38H0z" fill="#43a047"/>' + [[16, 72], [84, 70], [72, 80]].map(([x, y]) => `<g transform="translate(${x} ${y})"><ellipse rx="6" ry="4.5" fill="#fff"/><circle cx="5" cy="-2" r="2.4" fill="#444"/></g>`).join(''),
  // 4 Guardião: noite, estrelas e lamparina acesa
  '<defs><radialGradient id="g4" cx="50%" cy="70%" r="70%"><stop offset="0" stop-color="#3b4a7a"/><stop offset="1" stop-color="#1b2140"/></radialGradient></defs><rect width="100" height="100" fill="url(#g4)"/>' + [[14, 16], [30, 10], [70, 14], [86, 26], [58, 24], [20, 34]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.3" fill="#fff6c9"/>`).join('') + '<path d="M0 80c25-8 50-8 100 0v20H0z" fill="#2a3358"/><g transform="translate(78 64)"><path d="M0 8h12l-2 6H2z" fill="#d29a2c"/><path d="M6 0c3 3 3 6 0 8-3-2-3-5 0-8z" fill="#ffb238"/><circle cx="6" cy="5" r="9" fill="#ffd36b" opacity=".25"/></g>',
  // 5 Sábio: muralhas de cidade ao entardecer
  '<defs><linearGradient id="g5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9b6fd6"/><stop offset="1" stop-color="#ffb35c"/></linearGradient></defs><rect width="100" height="100" fill="url(#g5)"/><path d="M0 62h10v-6h6v6h10v-8h6v8h12v-6h6v6h14v-8h6v8h10v-6h6v6h14v38H0z" fill="#c9955a"/><rect x="44" y="70" width="12" height="30" rx="6" fill="#7a5230"/>',
  // 6 Ancião: luz dourada (usa a imagem final)
  '<defs><radialGradient id="g6" cx="50%" cy="45%" r="65%"><stop offset="0" stop-color="#fff6d6"/><stop offset=".55" stop-color="#ffd36b"/><stop offset="1" stop-color="#d29a2c"/></radialGradient></defs><rect width="100" height="100" fill="url(#g6)"/>' + Array.from({ length: 12 }, (_, i) => `<path d="M50 45L${50 + 70 * Math.cos(i * Math.PI / 6)} ${45 + 70 * Math.sin(i * Math.PI / 6)}" stroke="#fff" stroke-width="5" opacity=".25"/>`).join(''),
];

export function retrato(id, itens = [], tam = 120) {
  const a = avatarPorId(id);
  if (!a) return '';
  const est = Math.min(itens.length, 6);
  const ultimo = itens[itens.length - 1];
 // Três imagens: inicial (estágios 0–2), mediana (3–5) e final (6). Sem a imagem, cai na anterior.
  const fase = est >= 6 ? '-final' : est >= 3 ? '-meio' : '';
  const ordem = { '-final': ['-final', '-meio', ''], '-meio': ['-meio', ''], '': [''] }[fase];
  const arq = ordem.map((f) => id + f).find((n) => AVATARES_COM_IMAGEM.has(n));
  const temImg = !!arq;
  const fundo = `<svg class="retrato-fundo" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${FUNDOS[est]}</svg>`;
  const arte = temImg ? `<img src="img/avatares/${arq}.webp" alt="${a.nome}" loading="lazy">`
      : `<span class="retrato-sim">${ico(a.simbolo)}</span>${tam >= 100 ? `<span class="retrato-ini">${a.nome}</span>` : ''}`;
  return `<span class="retrato est-${est} ${temImg ? 'com-img' : ''}" style="--rc:${a.cor};--rt:${tam}px"><span class="retrato-in">${fundo}${arte}</span>${ultimo && tam >= 44 ? `<span class="selo-item">${ico(SELO_ITEM[ultimo])}</span>` : ''}</span>`;
}

// Antes da primeira sessão todo viajante é pó da terra (Gn 2:7). Ao concluir Gênesis 1–2 ele recebe
// o fôlego de vida e escolhe o personagem que vai acompanhar a jornada.
export function poHTML(tam = 120) {
  if (AVATARES_COM_IMAGEM.has('po')) return `<span class="retrato po com-img" style="--rt:${tam}px"><span class="retrato-in"><svg class="retrato-fundo" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${FUNDOS[0]}</svg><img src="img/avatares/po.webp" alt="Pó da terra"></span></span>`;
  return `<span class="retrato po" style="--rt:${tam}px"><span class="retrato-in"><svg class="retrato-fundo" viewBox="0 0 100 100" aria-hidden="true">${FUNDOS[0]}</svg>
    <svg viewBox="0 0 100 100" class="po-arte" aria-hidden="true"><ellipse cx="50" cy="86" rx="34" ry="6" fill="#000" opacity=".12"/>
    <path d="M18 86c2-14 12-22 20-24 3-12 10-18 14-18 6 0 11 6 13 14 9 2 17 12 17 28z" fill="#a8774a"/>
    <path d="M38 62c4-2 8-2 12 0M52 50c3-1 6 0 8 2" stroke="#8a5f38" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="30" cy="78" r="2" fill="#c99a6a"/><circle cx="64" cy="74" r="1.6" fill="#c99a6a"/><circle cx="48" cy="80" r="1.4" fill="#c99a6a"/></svg></span></span>`;
}

// Usar sempre esta para mostrar o viajante.
export function avatarHTML(av = {}, itens = [], tam = 120) {
  return av?.personagem ? retrato(av.personagem, itens, tam) : poHTML(tam);
}
