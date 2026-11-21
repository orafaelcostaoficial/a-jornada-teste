// Artes dos temas sazonais (desafios). Tudo em SVG desenhado para o app: leve e funciona offline.

// Estrelas pequenas espalhadas no céu (posições fixas para não mudar a cada render).
const PONTOS = [[18, 22, 1.2], [46, 12, 1], [74, 30, 1.4], [102, 16, .9], [138, 26, 1.1], [170, 10, 1], [204, 34, 1.3], [232, 18, .9],
  [262, 44, 1], [300, 14, 1.2], [356, 30, 1], [376, 58, .9], [30, 58, 1], [120, 52, .8], [190, 60, .9], [340, 76, .8]];

// Céu noturno sobre Belém: a estrela, as colinas e as casas com janelas acesas.
export function bannerNatal(alt = 170) {
  const estrelas = PONTOS.map(([x, y, r], i) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff6d6" class="pisca" style="animation-delay:${(i % 5) * .6}s"/>`).join('');
  const raios = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4; const l = i % 2 ? 26 : 46;
    return `<path d="M0 0L${(Math.cos(a) * l).toFixed(1)} ${(Math.sin(a) * l).toFixed(1)}" stroke="#ffe39a" stroke-width="${i % 2 ? 1.2 : 2}" stroke-linecap="round" opacity=".7"/>`;
  }).join('');
  return `<svg class="banner-arte" viewBox="0 0 390 ${alt}" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <defs><linearGradient id="ceuN" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#141a3c"/><stop offset=".7" stop-color="#3a2150"/><stop offset="1" stop-color="#6b2338"/></linearGradient>
    <radialGradient id="luzN"><stop offset="0" stop-color="#fff3c4" stop-opacity=".9"/><stop offset="1" stop-color="#ffd36b" stop-opacity="0"/></radialGradient></defs>
    <rect width="390" height="${alt}" fill="url(#ceuN)"/>${estrelas}
    <g transform="translate(318 46)"><circle r="40" fill="url(#luzN)"/>${raios}<path d="M0-13L3.4-3.4 13 0 3.4 3.4 0 13-3.4 3.4-13 0-3.4-3.4z" fill="#fff6d6"/></g>
    <path d="M318 60L262 ${alt - 40}" stroke="#ffe39a" stroke-width="10" opacity=".08"/>
    <path d="M0 ${alt - 34}c50-18 96-20 150-8s100 8 140-6 70-6 100 2V${alt}H0z" fill="#2a1d3a"/>
    <g fill="#1d1430">
      <path d="M196 ${alt - 30}h22v-14l11-9 11 9v14h16v-20h24v20h12v30H196z"/>
      <path d="M232 ${alt - 50}h16v6h-16z"/>
    </g>
    <g fill="#ffd36b"><rect x="205" y="${alt - 24}" width="4" height="5" rx="1"/><rect x="226" y="${alt - 36}" width="5" height="6" rx="1"/><rect x="262" y="${alt - 38}" width="4" height="5" rx="1"/><rect x="274" y="${alt - 24}" width="4" height="5" rx="1"/></g>
    <g transform="translate(262 ${alt - 6})"><path d="M-30 0l30-24 30 24z" fill="#3b2216"/><path d="M-22 0v-14h44V0z" fill="#2b170e"/><circle cy="-5" r="9" fill="#ffd36b" opacity=".55"/><path d="M-6-2h12l-2-5H-4z" fill="#c98a3a"/></g>
    <path d="M0 ${alt - 10}c70-10 150-12 240-4s110 6 150 0V${alt}H0z" fill="#120d22"/>
  </svg>`;
}

// Selos com arte própria (desenho no lugar do ícone).
export const ARTE_SELO = {
  natal: `<svg viewBox="0 0 100 100" aria-hidden="true">
    <defs><radialGradient id="sN" cx="40%" cy="35%"><stop offset="0" stop-color="#d9475a"/><stop offset="1" stop-color="#7d1626"/></radialGradient>
    <linearGradient id="oN" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff0b8"/><stop offset=".5" stop-color="#e6b445"/><stop offset="1" stop-color="#a8761a"/></linearGradient></defs>
    ${Array.from({ length: 24 }, (_, i) => { const a = (i * Math.PI) / 12; return `<circle cx="${(50 + Math.cos(a) * 45).toFixed(1)}" cy="${(50 + Math.sin(a) * 45).toFixed(1)}" r="5.2" fill="url(#oN)"/>`; }).join('')}
    <circle cx="50" cy="50" r="44" fill="url(#oN)"/><circle cx="50" cy="50" r="37" fill="url(#sN)"/>
    <circle cx="50" cy="50" r="33" fill="none" stroke="#f3cf73" stroke-width="1" stroke-dasharray="2 3" opacity=".8"/>
    <path d="M28 70c6-6 14-8 22-6s16 0 22 6" fill="none" stroke="#3f7a4a" stroke-width="3" stroke-linecap="round"/>
    <path d="M30 70c1-5 4-8 8-9m24 9c-1-5-4-8-8-9" stroke="#3f7a4a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <circle cx="35" cy="66" r="2.2" fill="#e6b445"/><circle cx="65" cy="66" r="2.2" fill="#e6b445"/>
<g class="arte-centro"><path d="M50 22l4.6 11.4L66 38l-11.4 4.6L50 54l-4.6-11.4L34 38l11.4-4.6z" fill="url(#oN)"/>
    <path d="M50 28l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#fff8de"/></g>
    <text x="50" y="84" text-anchor="middle" font-family="Georgia,serif" font-size="8" font-weight="700" fill="#fff3c4" letter-spacing="1">2026</text>
  </svg>`,
};
