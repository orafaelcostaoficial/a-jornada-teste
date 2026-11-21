// Cenários do mapa da jornada. Cada trecho da história tem um fundo e enfeites próprios.
// Para uma nova era: adicionar cenas aqui e mapear as sessões em CENA_DA_SESSAO.

// fundo: paisagem no alto da cena (tipo do horizonte, cores vivas) e chão com textura.
// ceu = [alto, horizonte]; longe/meio = camadas do horizonte; chao = [perto do horizonte, embaixo].
export const CENAS = {
  jardim:     { quando: 'Sem data', nome: 'O jardim do Éden', enfeites: ['arvore', 'flor', 'rio', 'arvore', 'flor'],
    fundo: { tipo: 'colinas', ceu: ['#5fc2ff', '#c8f0ff'], longe: '#7fd38a', meio: '#4fbf62', chao: ['#5cc95a', '#3fae4c'], textura: 'grama', astro: 'sol' } },
  diluvio:    { quando: 'Sem data', nome: 'O dilúvio', enfeites: ['onda', 'arca', 'onda', 'arcoiris'],
    fundo: { tipo: 'mar', ceu: ['#4a78c2', '#9fc4ee'], longe: '#2f7fd0', meio: '#2a6fc0', chao: ['#2f86d8', '#1f63b0'], textura: 'agua', chuva: true } },
  babel:      { quando: 'Sem data', nome: 'Babel', enfeites: ['torre', 'tijolo'],
    fundo: { tipo: 'cidade', ceu: ['#ff9f55', '#ffe1a0'], longe: '#d98a4a', meio: '#e9a65c', chao: ['#f0b766', '#dd9a48'], textura: 'areia', astro: 'sol' } },
  patriarcas: { quando: 'c. 2100–1900 a.C.', nome: 'Os patriarcas', enfeites: ['tenda', 'estrelas', 'duna', 'poco', 'tenda', 'palmeira', 'estrelas'],
    fundo: { tipo: 'dunas', ceu: ['#2b3a86', '#f59a6a'], longe: '#d9814e', meio: '#eda25a', chao: ['#f6bf6a', '#e9a24c'], textura: 'areia', astro: 'lua', estrelas: true } },
  egito:      { quando: 'c. 1900–1800 a.C.', nome: 'O Egito', enfeites: ['piramide', 'palmeira', 'nilo', 'espiga', 'piramide'],
    fundo: { tipo: 'piramides', ceu: ['#45b8f5', '#ffe9a8'], longe: '#e8b35a', meio: '#f2c46c', chao: ['#9fd36a', '#f2c46c'], textura: 'areia', astro: 'sol' } },
  exodo:      { quando: 'Êxodo c. 1446 ou c. 1260 a.C.', nome: 'Escravos no Egito', enfeites: ['piramide', 'tijolo', 'nilo', 'palmeira', 'tijolo'],
    fundo: { tipo: 'piramides', ceu: ['#ff8a4c', '#ffd98c'], longe: '#d7863f', meio: '#e59a4c', chao: ['#e8a052', '#cf7f36'], textura: 'areia', astro: 'sol' } },
  mar:        { quando: 'Logo depois da saída (Êx 14)', nome: 'O mar se abre', enfeites: ['nuvem'],
    fundo: { tipo: 'mar', ceu: ['#3aa8f0', '#bfe8ff'], longe: '#1f8be0', meio: '#1878cc', chao: ['#e9c27a', '#d9a95c'], textura: 'areia', paredes: true } },
  deserto:    { quando: 'Os 40 anos no deserto', nome: 'O deserto', enfeites: ['duna', 'tenda', 'estrelas', 'poco', 'duna', 'nuvem'],
    fundo: { tipo: 'dunas', ceu: ['#ffa53d', '#ffe6a3'], longe: '#e8913c', meio: '#f4ad52', chao: ['#f8c86e', '#eba54e'], textura: 'areia', astro: 'sol' } },
  sinai:      { quando: '3º mês depois da saída (Êx 19:1)', nome: 'Ao pé do Sinai', enfeites: ['nuvem', 'raio', 'tenda', 'duna', 'tenda'],
    fundo: { tipo: 'montanha', ceu: ['#4b3f9e', '#b9a8f0'], longe: '#7a68c2', meio: '#5b4796', chao: ['#cf9f6a', '#b9844e'], textura: 'pedra' } },
  moabe:      { quando: '40º ano depois da saída (Dt 1:3)', nome: 'As planícies de Moabe', enfeites: ['palmeira', 'tenda', 'rio', 'palmeira', 'duna'],
    fundo: { tipo: 'colinas', ceu: ['#58bdf5', '#dff4ff'], longe: '#b7b06a', meio: '#9fc457', chao: ['#b4d65e', '#93bf47'], textura: 'grama', astro: 'sol', rio: true } },
  jordao:     { quando: '10º dia do 1º mês (Js 4:19)', nome: 'A travessia do Jordão', enfeites: ['pedras', 'palmeira', 'rio', 'tenda', 'pedras'],
    fundo: { tipo: 'colinas', ceu: ['#4fb6f2', '#d8f2ff'], longe: '#9fbf66', meio: '#7fb84f', chao: ['#9cd060', '#7cb544'], textura: 'grama', astro: 'sol', rio: true } },
  jerico:     { quando: 'Logo depois da Páscoa em Gilgal (Js 5:10)', nome: 'Jericó', enfeites: ['muralha', 'palmeira', 'tenda', 'muralha', 'palmeira'],
    fundo: { tipo: 'muralha', ceu: ['#ff9a52', '#ffe2a6'], longe: '#d99a58', meio: '#c9844a', chao: ['#e8b56a', '#d69a4e'], textura: 'areia', astro: 'sol' } },
  conquista:  { quando: 'O texto não dá a data', nome: 'Gibeom e a conquista', enfeites: ['sol', 'oliveira', 'tenda', 'nuvem', 'oliveira'],
    fundo: { tipo: 'colinas', ceu: ['#ffb43c', '#fff0b8'], longe: '#b9a160', meio: '#9fae55', chao: ['#b8c45e', '#9aae47'], textura: 'grama', astro: 'sol' } },
  canaa:      { quando: 'Josué já velho (Js 13:1)', nome: 'A terra repartida', enfeites: ['oliveira', 'espiga', 'tenda', 'oliveira', 'pedras'],
    fundo: { tipo: 'colinas', ceu: ['#5bbdf5', '#e2f5ff'], longe: '#8fbf6a', meio: '#6fb055', chao: ['#8fcf5c', '#6eb345'], textura: 'grama', astro: 'sol' } },
  juizes:     { quando: 'Depois da morte de Josué (Jz 2:8-10)', nome: 'O tempo dos juízes', enfeites: ['palmeira', 'cantaro', 'oliveira', 'tenda', 'cantaro'],
    fundo: { tipo: 'colinas', ceu: ['#5a6fc4', '#f7b97a'], longe: '#8a7fb0', meio: '#7d9a5a', chao: ['#a2b863', '#86a04c'], textura: 'grama', astro: 'sol' } },
  filisteus:  { quando: '20 anos de Sansão (Jz 16:31)', nome: 'A terra dos filisteus', enfeites: ['palmeira', 'duna', 'palmeira', 'duna'],
    fundo: { tipo: 'mar', ceu: ['#46a8e8', '#cdeeff'], longe: '#2f8fd6', meio: '#2a7fc4', chao: ['#e9c27a', '#d6a75a'], textura: 'areia', astro: 'sol' } },
  'sem-rei':  { quando: 'Fineias ainda servia (Jz 20:28)', nome: 'Sem rei em Israel', enfeites: ['nuvem', 'tenda', 'oliveira', 'nuvem'],
    fundo: { tipo: 'colinas', ceu: ['#3d3a6e', '#c78a7a'], longe: '#6b5a7a', meio: '#5f6f4e', chao: ['#8a9a5a', '#6f8045'], textura: 'grama', astro: 'lua', estrelas: true } },
  belem:      { quando: 'No tempo dos juízes (Rt 1:1)', nome: 'Os campos de Belém', enfeites: ['espiga', 'oliveira', 'espiga', 'tenda', 'espiga'],
    fundo: { tipo: 'colinas', ceu: ['#ffb259', '#fff1c2'], longe: '#d9b45c', meio: '#e6c062', chao: ['#f0cf6a', '#dcb24c'], textura: 'trigo', astro: 'sol' } },
  uz:         { quando: 'Sem data no texto', nome: 'A terra de Uz', enfeites: ['nuvem', 'raio', 'nuvem', 'sol'],
    fundo: { tipo: 'colinas', ceu: ['#5f73b8', '#c9d4f2'], longe: '#8c9ac4', meio: '#7fa66a', chao: ['#9cc26a', '#7fa851'], textura: 'grama', chuva: true } },
};

// Horizonte (viewBox 400×170): o chão da cena começa na linha de baixo, na cor chao[0].
const H = 170;
const astroSVG = (f) => (f.astro === 'sol' ? '<circle cx="320" cy="48" r="26" fill="#ffd84d"/><circle cx="320" cy="48" r="38" fill="#ffe680" opacity=".35"/>'
  : f.astro === 'lua' ? '<path d="M316 22a19 19 0 1 0 16 30a15 15 0 1 1-16-30Z" fill="#fff4cf"/>' : '')
  + (f.estrelas ? [[40, 22], [90, 50], [150, 18], [210, 40], [260, 14], [370, 70], [120, 80], [30, 70]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i % 3 ? 1.6 : 2.4}" fill="#fff" opacity=".9"/>`).join('') : '')
  + (f.chuva ? '<g stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".45">' + Array.from({ length: 22 }, (_, i) => { const x = (i * 37) % 400, y = (i * 53) % 110; return `<path d="M${x} ${y}l-6 14"/>`; }).join('') + '</g>' : '');
const CAMADAS = {
  colinas: (f) => `<path d="M0 105C60 70 120 92 185 80S310 58 400 92V${H}H0Z" fill="${f.longe}"/>
    <path d="M0 132C80 104 145 128 225 112S345 100 400 124V${H}H0Z" fill="${f.meio}"/>
    ${f.rio ? `<path d="M140 ${H}C170 150 230 146 270 124" stroke="#5fc8f5" stroke-width="10" fill="none" stroke-linecap="round"/>` : ''}
    <path d="M0 154C100 140 200 160 300 146S380 144 400 150V${H}H0Z" fill="${f.chao[0]}"/>`,
  dunas: (f) => `<path d="M0 115C50 92 90 92 140 108S230 84 290 100 370 90 400 104V${H}H0Z" fill="${f.longe}"/>
    <path d="M0 140C70 112 130 116 190 134S300 112 400 132V${H}H0Z" fill="${f.meio}"/>
    <path d="M0 158C90 146 180 162 270 150S370 148 400 154V${H}H0Z" fill="${f.chao[0]}"/>`,
  // Com paredes (Êx 14:21-22): duas muralhas de água e o fundo do mar seco no meio, sem água no caminho.
  mar: (f) => f.paredes ? `<path d="M0 ${H}V48C25 36 52 42 72 56C92 70 150 98 186 106L100 ${H}Z" fill="${f.longe}"/>
      <path d="M400 ${H}V48C375 36 348 42 328 56C308 70 250 98 214 106L300 ${H}Z" fill="${f.longe}"/>
      <g stroke="#fff" stroke-width="3" fill="none" opacity=".55" stroke-linecap="round"><path d="M16 66q14-11 30-1"/><path d="M384 66q-14-11-30-1"/><path d="M20 104q12-8 26 0"/><path d="M380 104q-12-8-26 0"/><path d="M56 132q10-7 22 0"/><path d="M344 132q-10-7-22 0"/></g>
      <path d="M100 ${H}L186 106H214L300 ${H}Z" fill="${f.chao[0]}"/>
      <path d="M0 156C90 148 200 162 300 152S380 150 400 154V${H}H0Z" fill="${f.chao[0]}"/>`
    : `<rect y="104" width="400" height="${H - 104}" fill="${f.longe}"/>
      <g stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".55"><path d="M20 118q10-6 20 0t20 0"/><path d="M150 112q10-6 20 0t20 0"/><path d="M280 122q10-6 20 0t20 0"/><path d="M90 140q10-6 20 0t20 0"/><path d="M330 146q10-6 20 0t20 0"/></g>
      <path d="M0 156C90 148 200 162 300 152S380 150 400 154V${H}H0Z" fill="${f.chao[0]}"/>`,
  cidade: (f) => `<path d="M0 120C80 104 160 116 240 106S350 102 400 112V${H}H0Z" fill="${f.longe}"/>
    <path d="M150 140V120h100v20ZM165 120v-18h70v18ZM180 102V86h40v16ZM192 86V72h16v14Z" fill="${f.meio}"/><path d="M195 140v-12h10v12Z" fill="${f.longe}"/>
    <path d="M0 152C100 140 200 158 300 146S380 144 400 150V${H}H0Z" fill="${f.chao[0]}"/>`,
  piramides: (f) => `<path d="M0 124C80 112 160 122 240 114S350 110 400 118V${H}H0Z" fill="${f.longe}"/>
    <path d="M40 132L95 72L150 132Z" fill="${f.meio}"/><path d="M95 72L150 132H120Z" fill="#000" opacity=".12"/>
    <path d="M130 132L170 88L210 132Z" fill="${f.meio}"/><path d="M170 88L210 132H188Z" fill="#000" opacity=".12"/>
    <path d="M250 136L280 104L310 136Z" fill="${f.meio}"/>
    <path d="M0 150C90 136 200 156 300 142S380 140 400 146V${H}H0Z" fill="${f.chao[0]}"/>`,
  muralha: (f) => `<path d="M0 126C80 112 160 124 240 114S350 110 400 120V${H}H0Z" fill="${f.longe}"/>
    <path d="M70 140V96h18v-8h10v8h40v-8h10v8h40v-8h10v8h40v-8h10v8h40v-8h10v8h18v44Z" fill="${f.meio}"/>
    <path d="M70 108h258M70 122h258" stroke="#000" stroke-opacity=".12" stroke-width="2"/><path d="M190 140v-20a10 10 0 0 1 20 0v20Z" fill="#000" opacity=".22"/>
    <path d="M0 152C100 140 200 158 300 146S380 144 400 150V${H}H0Z" fill="${f.chao[0]}"/>`,
  montanha: (f) => `<path d="M0 118L50 86L95 108L150 70L205 104L265 80L325 112L400 88V${H}H0Z" fill="${f.longe}"/>
    <path d="M90 ${H}L230 34L250 46L268 30L400 140V${H}Z" fill="${f.meio}"/><path d="M230 34L250 46L268 30L300 70L260 62L240 74Z" fill="#fff" opacity=".2"/>
    <g fill="#3d3566" opacity=".9"><circle cx="232" cy="30" r="16"/><circle cx="256" cy="22" r="20"/><circle cx="282" cy="30" r="15"/><rect x="220" y="28" width="76" height="14" rx="7"/></g>
    <path d="M262 40l-8 16h7l-5 13 14-19h-7l5-10Z" fill="#ffd84d"/>
    <path d="M0 156C100 146 200 162 300 150S380 148 400 154V${H}H0Z" fill="${f.chao[0]}"/>`,
};
export function paisagem(cenaId) {
  const f = CENAS[cenaId].fundo;
  return `<svg class="paisagem" viewBox="0 0 400 ${H}" preserveAspectRatio="none" aria-hidden="true">${astroSVG(f)}${CAMADAS[f.tipo](f)}</svg>`;
}
const TEX = {
  grama: '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="56"><g stroke="rgba(10,90,20,.35)" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M12 34l-3-7M12 34l1-8M12 34l5-6"/><path d="M50 14l-3-6M50 14l1-7M50 14l4-5"/></g><circle cx="34" cy="48" r="2" fill="rgba(255,255,255,.35)"/></svg>',
  areia: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="40"><g fill="rgba(140,80,10,.22)"><circle cx="8" cy="10" r="1.6"/><circle cx="30" cy="26" r="1.3"/><circle cx="40" cy="6" r="1"/></g><g fill="rgba(255,255,255,.35)"><circle cx="20" cy="34" r="1.3"/><circle cx="44" cy="20" r="1"/></g><path d="M14 20q5-3 10 0" stroke="rgba(140,80,10,.18)" stroke-width="1.5" fill="none"/></svg>',
  agua: '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="44"><g stroke="rgba(255,255,255,.4)" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M6 14q8-6 16 0t16 0"/><path d="M44 34q8-6 16 0t16 0"/></g></svg>',
  trigo: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="48"><g stroke="rgba(150,95,10,.4)" stroke-width="2" stroke-linecap="round" fill="none"><path d="M10 40V24M10 28l-3-4M10 28l3-4M10 33l-3-4M10 33l3-4"/><path d="M40 22V6M40 10l-3-4M40 10l3-4M40 15l-3-4M40 15l3-4"/></g><circle cx="28" cy="40" r="1.6" fill="rgba(255,255,255,.4)"/></svg>',
  pedra: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="50"><g fill="rgba(90,55,25,.25)"><ellipse cx="12" cy="14" rx="5" ry="3"/><ellipse cx="42" cy="36" rx="4" ry="2.5"/></g><g fill="rgba(255,255,255,.3)"><circle cx="30" cy="10" r="1.5"/><circle cx="52" cy="18" r="1.2"/></g></svg>',
};
export function estiloCena(cenaId) {
  const f = CENAS[cenaId].fundo;
  return `--ceu1:${f.ceu[0]};--ceu2:${f.ceu[1]};--chao1:${f.chao[0]};--chao2:${f.chao[1]};--tex:url('data:image/svg+xml,${encodeURIComponent(TEX[f.textura])}')`;
}

export function cenaDaSessao(id) {
  const [l, n] = [id.slice(0, 2), Number(id.slice(3))];
  if (l === 'jo') return 'uz';
  if (l === 'js') return ['jordao', 'jerico', 'conquista'][n - 1] || 'canaa';
  if (l === 'jz') return n <= 3 ? 'juizes' : n === 4 ? 'filisteus' : 'sem-rei';
  if (l === 'rt') return 'belem';
  if (l === 'ex') return n <= 5 ? 'exodo' : n === 6 ? 'mar' : n === 7 ? 'deserto' : 'sinai';
  if (l === 'lv') return 'sinai';
  if (l === 'nm') return n <= 2 ? 'sinai' : n <= 6 ? 'deserto' : 'moabe';
  if (l === 'dt') return 'moabe';
  if (n <= 3) return 'jardim';
  if (n <= 5) return 'diluvio';
  if (n === 6) return 'babel';
  if (n <= 19) return 'patriarcas';
  return 'egito';
}

export const ENFEITES = {
  arvore: '<ellipse cx="30" cy="70" rx="16" ry="4" fill="#000" opacity=".1"/><rect x="27" y="40" width="6" height="30" rx="2" fill="#7a5230"/><circle cx="30" cy="30" r="20" fill="#4f9a4a"/><circle cx="20" cy="36" r="12" fill="#5fae55"/><circle cx="40" cy="34" r="13" fill="#3f8a3d"/><circle cx="26" cy="26" r="3" fill="#e2493f"/><circle cx="38" cy="38" r="3" fill="#e2493f"/>',
  flor: '<g transform="translate(30 50)"><path d="M0 20V0" stroke="#3f8a3d" stroke-width="3"/>' + [0, 72, 144, 216, 288].map((r) => `<ellipse rx="5" ry="9" transform="rotate(${r}) translate(0 -8)" fill="#f2a7c3"/>`).join('') + '<circle r="4" fill="#f6c945"/></g>',
  rio: '<path d="M0 40c15-10 25 10 40 0s25 10 40 0" stroke="#7fc1e8" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M5 55c15-10 25 10 40 0s20 8 30 2" stroke="#a9d8f2" stroke-width="5" fill="none" stroke-linecap="round"/>',
  onda: '<path d="M0 50c10-14 20-14 30 0s20 14 30 0 20-14 30 0" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/><path d="M5 62c10-10 20-10 30 0s20 10 30 0" stroke="#4f8fc0" stroke-width="5" fill="none" stroke-linecap="round"/>',
  arca: '<path d="M5 45h60l-8 16H13z" fill="#8a5a2b"/><rect x="18" y="30" width="34" height="15" rx="2" fill="#a9733f"/><path d="M15 28h40l-20-10z" fill="#6b4422"/><rect x="30" y="35" width="8" height="6" fill="#4a2e16"/>',
  arcoiris: '<g fill="none" stroke-width="5" stroke-linecap="round">' + ['#e2493f', '#f39c34', '#f6c945', '#5fae55', '#4f8fc0', '#7d4fc0'].map((c, i) => `<path d="M${8 + i * 5} 60a${27 - i * 5} ${27 - i * 5} 0 0 1 ${54 - i * 10} 0" stroke="${c}"/>`).join('') + '</g>',
  torre: '<path d="M20 70h40l-4-12H24z" fill="#c9955a"/><path d="M24 58h32l-4-12H28z" fill="#d6a66b"/><path d="M28 46h24l-4-12H32z" fill="#c9955a"/><path d="M32 34h16l-4-12h-8z" fill="#d6a66b"/><rect x="37" y="60" width="6" height="10" fill="#7a5230"/>',
  tijolo: '<g fill="#c27a45" stroke="#9a5a2e"><rect x="10" y="50" width="20" height="10" rx="1"/><rect x="32" y="50" width="20" height="10" rx="1"/><rect x="21" y="39" width="20" height="10" rx="1"/></g>',
  tenda: '<ellipse cx="35" cy="68" rx="28" ry="4" fill="#000" opacity=".1"/><path d="M5 66L35 24l30 42z" fill="#b5652e"/><path d="M35 24l30 42H45z" fill="#93501f"/><path d="M28 66l7-14 7 14z" fill="#4a2e16"/><path d="M35 24v-6" stroke="#6b4422" stroke-width="2"/>',
  estrelas: [[12, 18, 3], [40, 10, 4], [60, 30, 2.5], [25, 40, 2], [52, 52, 3]].map(([x, y, r]) => `<path d="M${x} ${y - r * 2}l${r * .6} ${r * 1.4} ${r * 1.4} ${r * .6}-${r * 1.4} ${r * .6}-${r * .6} ${r * 1.4}-${r * .6}-${r * 1.4}-${r * 1.4}-${r * .6} ${r * 1.4}-${r * .6}z" fill="#fff6c9"/>`).join(''),
  duna: '<path d="M0 70c15-25 35-25 50-8 8-10 20-12 30 8z" fill="#e3b46f"/><path d="M50 62c8-10 20-12 30 8H58z" fill="#cf9b52"/>',
  poco: '<ellipse cx="35" cy="66" rx="22" ry="5" fill="#000" opacity=".1"/><rect x="15" y="44" width="40" height="22" rx="4" fill="#a89a86"/><path d="M15 50h40M15 58h40M28 44v22M42 44v22" stroke="#8a7d6b" stroke-width="1.5"/><path d="M18 44V24h34v20" stroke="#6b4422" stroke-width="3" fill="none"/><path d="M14 24h42" stroke="#6b4422" stroke-width="4"/>',
  palmeira: '<path d="M34 70c0-20 2-34 6-44" stroke="#8a5a2b" stroke-width="6" fill="none" stroke-linecap="round"/><g fill="#3f8a3d"><path d="M40 26c-10-8-24-6-30 2 10-4 20-2 30-2z"/><path d="M40 26c8-10 22-10 28-2-10-2-18-2-28 2z"/><path d="M40 26c-4-12 0-20 8-24-4 8-6 16-8 24z"/><path d="M40 26c-12 2-20 10-22 18 6-8 14-14 22-18z"/><path d="M40 26c12 0 20 6 24 14-8-6-16-10-24-14z"/></g>',
  piramide: '<path d="M5 70L40 22l35 48z" fill="#e3b46f"/><path d="M40 22l35 48H48z" fill="#c8964e"/><path d="M20 50h30M14 60h48" stroke="#b9853f" stroke-width="1.2" opacity=".6"/>',
  nilo: '<path d="M0 50c20-8 30 8 50 0s20 8 30 2" stroke="#4f9fd0" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M14 38v14M20 34v18M62 40v12" stroke="#5fae55" stroke-width="3" stroke-linecap="round"/>',
  espiga: '<g transform="translate(35 70)"><path d="M0 0v-44" stroke="#c99a35" stroke-width="3"/>' + [-38, -30, -22, -14].map((y) => `<ellipse cx="-5" cy="${y}" rx="4" ry="7" transform="rotate(-25 -5 ${y})" fill="#e3b445"/><ellipse cx="5" cy="${y}" rx="4" ry="7" transform="rotate(25 5 ${y})" fill="#e3b445"/>`).join('') + '</g>',
  nuvem: '<g fill="#7b8396"><circle cx="25" cy="40" r="14"/><circle cx="42" cy="34" r="17"/><circle cx="58" cy="42" r="12"/><rect x="20" y="40" width="44" height="14" rx="7"/></g>',
  raio: '<path d="M42 10L24 44h14l-8 26 24-38H40z" fill="#f6c945"/>',
  muralha: '<ellipse cx="40" cy="70" rx="32" ry="4" fill="#000" opacity=".1"/><path d="M8 68V36h8v-6h7v6h10v-6h7v6h10v-6h7v6h8v32Z" fill="#c9955a"/><path d="M8 46h64M8 57h64M24 36v10M48 36v10M36 46v11M60 46v11M20 57v11M52 57v11" stroke="#9a6a38" stroke-width="1.5"/><path d="M34 68V58a6 6 0 0 1 12 0v10Z" fill="#5a3a1c"/>',
  pedras: '<ellipse cx="40" cy="70" rx="28" ry="4" fill="#000" opacity=".1"/><g fill="#b3a693" stroke="#8a7d6b" stroke-width="1.5"><ellipse cx="26" cy="62" rx="12" ry="7"/><ellipse cx="54" cy="62" rx="12" ry="7"/><ellipse cx="40" cy="50" rx="11" ry="7"/><ellipse cx="40" cy="38" rx="8" ry="6"/></g>',
  oliveira: '<ellipse cx="40" cy="70" rx="18" ry="4" fill="#000" opacity=".1"/><path d="M38 70c1-10-4-14-2-24M42 70c0-8 6-12 4-22" stroke="#7a5a3a" stroke-width="5" fill="none" stroke-linecap="round"/><g fill="#8fa86a"><circle cx="30" cy="34" r="12"/><circle cx="48" cy="30" r="13"/><circle cx="40" cy="22" r="10"/></g><g fill="#6f8a50"><circle cx="34" cy="38" r="7"/><circle cx="52" cy="36" r="6"/></g>',
  cantaro: '<ellipse cx="40" cy="70" rx="16" ry="3.5" fill="#000" opacity=".1"/><path d="M30 34h20l-2 4c8 4 10 12 8 20-2 8-8 12-16 12s-14-4-16-12c-2-8 0-16 8-20Z" fill="#c2733f"/><path d="M28 50h24" stroke="#9a5228" stroke-width="2"/><path d="M40 34c-6-6-3-14 0-20 3 6 6 14 0 20Z" fill="#ffb02e"/><path d="M40 32c-3-4-1-8 0-11 1 3 3 7 0 11Z" fill="#ffe36b"/>',
  sol: '<circle cx="40" cy="40" r="14" fill="#ffc84a"/>' + Array.from({ length: 8 }, (_, i) => `<path d="M40 16v-8" stroke="#ffc84a" stroke-width="4" stroke-linecap="round" transform="rotate(${i * 45} 40 40)"/>`).join(''),
};

export const enfeite = (nome) => `<svg viewBox="0 0 80 80" class="enfeite" aria-hidden="true">${ENFEITES[nome] || ''}</svg>`;
