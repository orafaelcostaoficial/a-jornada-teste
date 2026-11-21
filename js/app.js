import { ERAS, LIVROS, linkNAA } from '../data/plano.js';
import { COM_IMAGEM, SELOS_COM_IMAGEM } from '../data/imagens.js';
import * as store from './store.js';
import * as J from './jogo.js';
import { ico } from './icones.js';
import { avatarHTML } from './avatar.js';
import { AVATARES, AVATARES_COM_IMAGEM } from '../data/avatares.js';
import * as N from './nuvem.js';
import { CENAS, cenaDaSessao, enfeite, paisagem, estiloCena } from './cenario.js';
import { CANAL_TESTE } from './config.js';
import { bannerNatal, ARTE_SELO } from './tema.js';
import { DESAFIOS } from '../data/desafios.js';

const NOME_APP = 'A Jornada';
const VERSAO_APP = 'v32';
let RAIZ = store.carregar();
const P = () => RAIZ.perfis[RAIZ.ativo];
const perfis = () => Object.values(RAIZ.perfis);
const $app = document.getElementById('app');

const COR_ERA = {
  'principio': '#b0712f', 'moises': '#c0843a', 'juizes': '#3a6ea5', 'reino-unido': '#3f8a5a',
  'reino-dividido': '#7a55a0', 'exilio': '#a33d3d', 'pos-exilio': '#3b84a5', 'jesus': '#d29a2c',
  'igreja': '#34506e', 'fim-seculo': '#9c2f3a',
};
const RARIDADE = {
  comum: { nome: 'Comum', gemas: 1 }, rara: { nome: 'Rara', gemas: 2 },
  epica: { nome: 'Épica', gemas: 3 }, lendaria: { nome: 'Lendária', gemas: 4 },
};

const esc = (t = '') => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const salvar = () => { store.salvar(RAIZ); agendarSync(); };

// ─── Nuvem ───
let AMIGOS = []; let SYNC = { status: N.ligada() ? 'pronto' : 'desligada', erro: null };
function resumo(p) {
  const s = J.semanaAtual(p); const prox = J.proxima(p);
  const xpSemana = p.log.filter((l) => s.dias.includes(l.data)).reduce((t, l) => t + l.xp, 0);
  return { xpSemana, semana: s.dias[0], sessaoAtual: prox ? prox.id : 'fim', era: prox ? LIVROS[prox.livro].era : null };
}
let timerSync = null;
function agendarSync(ms = 2500) {
  if (!N.ligada() || !RAIZ.nuvem) return;
  clearTimeout(timerSync); timerSync = setTimeout(sincronizar, ms);
}
async function sincronizar() {
  if (!N.ligada() || !RAIZ.nuvem || SYNC.status === 'sincronizando') return;
  SYNC = { status: 'sincronizando', erro: null };
  try {
    RAIZ = await N.sincronizar(RAIZ, resumo); store.salvar(RAIZ);
    AMIGOS = await N.amigos();
    SYNC = { status: 'ok', erro: null, em: new Date() };
    if (!document.querySelector('textarea:focus, input:focus') && !location.hash.startsWith('#/sessao')) render();
  } catch (e) { SYNC = { status: 'erro', erro: e.message }; }
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') agendarSync(300); });
setInterval(() => document.visibilityState === 'visible' && agendarSync(0), 90000);

function confirmar(msg, sim, aoSim) {
  const o = overlay(`<div class="confirma"><p>${msg}</p><button class="btn grande perigo" data-sim>${sim}</button><button class="btn" data-fechar>Cancelar</button></div>`);
  o.querySelector('[data-sim]').addEventListener('click', () => { o.remove(); aoSim(); });
}

// ─── Instalar como app ───
let pedidoInstalar = null;
const instalado = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const ehIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
window.addEventListener('beforeinstallprompt', (ev) => { ev.preventDefault(); pedidoInstalar = ev; if (location.hash.match(/hoje|perfil|^$/)) render(); });
window.addEventListener('appinstalled', () => { pedidoInstalar = null; toast('A Jornada instalada!'); render(); });
// O Chrome não oferece instalar de novo um app que já está no celular: nesse caso o cartão avisa em vez de oferecer.
let JA_INSTALADO = false;
navigator.getInstalledRelatedApps?.().then((l) => { if (l?.length) { JA_INSTALADO = true; render(); } }).catch(() => {});
function cartaoInstalar(compacto) {
  if (instalado()) return '';
  if (JA_INSTALADO) return compacto ? '' : `<section class="instalar">${ico('circle-check')}<div><b>Já está instalado neste celular</b><small>Abra pelo ícone A Jornada na tela inicial.</small></div></section>`;
  if (compacto && sessionStorage.getItem('ajornada-instalar-fechado')) return '';
  return `<section class="instalar">${ico('download')}<div><b>Instale A Jornada no celular</b><small>Abre como app, em tela cheia, e funciona sem internet.</small></div>
    <button class="btn ouro" data-acao="instalar">Instalar</button>${compacto ? `<button class="fechar" data-acao="fechar-instalar" aria-label="Fechar">${ico('x')}</button>` : ''}</section>`;
}
async function instalar() {
  if (pedidoInstalar) { pedidoInstalar.prompt(); await pedidoInstalar.userChoice; pedidoInstalar = null; render(); return; }
  overlay(ehIOS()
    ? `<div class="guia-instalar"><h2>Instalar no iPhone</h2><ol>
        <li>Abra este endereço no <b>Safari</b>.</li>
        <li>Toque em <b>Compartilhar</b> (o quadrado com a seta para cima).</li>
        <li>Escolha <b>Adicionar à Tela de Início</b> e confirme.</li></ol>
        <button class="btn grande" data-fechar>Entendi</button></div>`
    : `<div class="guia-instalar"><h2>Instalar no Android</h2><ol>
        <li>Abra este endereço no <b>Chrome</b>.</li>
        <li>Toque no menu <b>⋮</b> (canto superior direito).</li>
        <li>Escolha <b>Instalar app</b> (ou <b>Adicionar à tela inicial</b>) e confirme.</li></ol>
        <p class="dica">Se essa opção não aparecer, o app provavelmente já está instalado: procure o ícone A Jornada na tela inicial.</p>
        <button class="btn grande" data-fechar>Entendi</button></div>`);
}

// ─── Texto bíblico (Bíblia Livre, dentro do app) ───
const TEXTOS = {};
async function textoLivro(livro) {
  if (!TEXTOS[livro.n]) TEXTOS[livro.n] = fetch(`data/biblia/blivre/${livro.n}.json`).then((r) => r.json());
  return TEXTOS[livro.n];
}
const ir = (h) => { location.hash = h; };
const fmtData = (d) => { const [, m, dd] = d.split('-'); return `${dd}/${m}`; };
const eraDe = (s) => LIVROS[s.livro].era;

// ─── Efeitos ───
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast'; t.innerHTML = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('on'));
  setTimeout(() => { t.classList.remove('on'); setTimeout(() => t.remove(), 300); }, 2600);
}
function confete(n = 60) {
  const cores = ['#d29a2c', '#f1d48a', '#3f8a5a', '#3a6ea5', '#a33d3d', '#fff'];
  for (let i = 0; i < n; i++) {
    const c = document.createElement('i');
    c.className = 'confete';
    c.style.cssText = `left:${Math.random() * 100}vw;background:${cores[i % cores.length]};animation-delay:${Math.random() * .4}s;--x:${(Math.random() - .5) * 200}px;--r:${Math.random() * 720}deg`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2600);
  }
}
function overlay(html, aoFechar) {
  const o = document.createElement('div');
  o.className = 'overlay';
  o.innerHTML = `<div class="overlay-in">${html}</div>`;
  document.body.appendChild(o);
  requestAnimationFrame(() => o.classList.add('on'));
  o.addEventListener('click', (ev) => {
    if (ev.target.closest('[data-fechar]') || ev.target === o) {
      o.classList.remove('on'); setTimeout(() => { o.remove(); aoFechar?.(); }, 250);
    }
  });
  return o;
}

// ─── Componentes ───
function topo() {
  const p = P(); const nv = J.nivel(p.xp);
  return `${CANAL_TESTE ? `<a class="faixa-teste" href="https://orafaelcostaoficial.github.io/a-jornada/#/hoje">Canal de teste · ${VERSAO_APP} · dados separados · voltar ao app</a>` : ''}<header class="topbar">
    <a class="eu" href="#/perfil"><span class="eu-av">${avatarHTML(p.avatar, J.itensAte(nv.n), 34)}</span><span><b>${esc(p.nome)}</b><small>${rotNivel(p)} · ${nomeEstagio(p)}</small></span></a>
    <button class="xp-chip" data-acao="ver-xp" aria-label="Ver como ganhou o XP">${ico('sparkles')} ${p.xp} XP</button>
  </header>`;
}

// Antes do fôlego de vida (sem personagem) o viajante é Pó da terra, nível 0 (Gn 2:7).
const ehPo = (p) => !p.avatar?.personagem;
const nomeEstagio = (p) => (ehPo(p) ? 'Pó da terra' : J.estagio(J.nivel(p.xp).n).nome);
const rotNivel = (p) => (ehPo(p) ? 'Nível 0' : `Nível ${J.nivel(p.xp).n}`);
function barraXP(p) {
  if (ehPo(p)) return `<div class="xpbar" data-acao="ver-xp" role="button"><div class="xpbar-top"><b>Nível 0</b><span>${p.xp} XP</span></div>
    <div class="barra"><i style="width:0%"></i></div>
    <small>${J.concluidas(p).length ? 'Receba o fôlego de vida: vire <b>Peregrino</b>' : 'A 1ª sessão traz o fôlego de vida (Gn 2:7)'}</small></div>`;
  const nv = J.nivel(p.xp);
  const prox = J.ESTAGIOS.find((e) => e.nivel > nv.n);
  return `<div class="xpbar" data-acao="ver-xp" role="button"><div class="xpbar-top"><b>Nível ${nv.n}</b><span>${p.xp - nv.ini}/${nv.fim - nv.ini} XP</span></div>
    <div class="barra"><i style="width:${nv.pct}%"></i></div>
    ${prox ? `<small>No nível ${prox.nivel} você vira <b>${prox.nome}</b></small>` : '<small>Estágio máximo alcançado</small>'}</div>`;
}

// Painel do XP: quanto falta para o próximo nível, de onde veio o XP e os últimos ganhos.
const NOME_GANHO = { sessao: 'Sessões', aplicacao: 'Aplicações escritas', estudo: 'Anotações de estudo', semana: 'Metas da semana', revisao: '"Como foi?" contado', acerto: 'Acertos no quiz', livro: 'Livros concluídos', era: 'Eras concluídas', desafio: 'Desafios' };
const ICO_GANHO = { sessao: 'book-open', aplicacao: 'hand-helping', estudo: 'user-pen', semana: 'target', revisao: 'messages-square', acerto: 'circle-check', livro: 'book-open-text', era: 'landmark', desafio: 'star' };
// bonus: meta da semana (ref semana-/seq-), aplicação (+4) ou anotação de estudo de versões antigas (+3).
const grupoGanho = (l) => (l.tipo === 'bonus' ? (/^(semana|seq)-/.test(String(l.ref)) ? 'semana' : l.xp === 3 ? 'estudo' : 'aplicacao') : l.tipo === 'desafio-fim' ? 'desafio' : l.tipo);
function textoGanho(l) {
  const g = grupoGanho(l); const s = J.sessaoPorId(l.ref);
  if (g === 'sessao') return s ? `Sessão de ${J.refSessao(s)}` : 'Sessão concluída';
  if (g === 'aplicacao') return s ? `Aplicação em ${J.refSessao(s)}` : 'Aplicação escrita';
  if (g === 'revisao') return s ? `Contou como foi: ${J.refSessao(s)}` : 'Contou como foi';
  if (g === 'estudo') return s ? `Anotação de estudo em ${J.refSessao(s)}` : 'Anotação de estudo';
  if (g === 'semana') return String(l.ref).startsWith('seq') ? 'Semanas seguidas' : 'Meta da semana';
  if (g === 'livro') return `${LIVROS[l.ref]?.nome || 'Livro'} concluído`;
  if (g === 'era') return `Era ${ERAS.find((e) => e.id === l.ref)?.nome || ''} concluída`;
  if (g === 'desafio') return l.tipo === 'desafio-fim' ? 'Desafio completo' : 'Dia de desafio';
  return 'XP';
}
function abrirXP() {
  const p = P(); const nv = J.nivel(p.xp); const po = ehPo(p);
  const falta = nv.fim - p.xp; const est = J.ESTAGIOS.find((e) => e.nivel > nv.n);
  let faltaEst = 0; if (est) { for (let n = nv.n; n < est.nivel; n++) faltaEst += J.xpParaSubir(n); faltaEst -= p.xp - nv.ini; }
  const tot = {}; for (const l of p.log) { const g = grupoGanho(l); tot[g] = (tot[g] || 0) + (l.xp || 0); }
  const maior = Math.max(1, ...Object.values(tot));
  // Últimos ganhos: junta acertos do mesmo dia numa linha só.
  const ult = [];
  for (const l of [...p.log].reverse()) {
    const g = grupoGanho(l); const u = ult.at(-1);
    if (g === 'acerto' && u && u.g === 'acerto' && u.data === l.data) { u.xp += l.xp; u.n++; continue; }
    if (ult.length >= 10) break;
    ult.push({ g, data: l.data, xp: l.xp, n: 1, txt: textoGanho(l) });
  }
  const linhas = Object.keys(NOME_GANHO).filter((g) => tot[g]).sort((a, b) => tot[b] - tot[a]);
  overlay(`<div class="xp-painel">
    <div class="xp-topo"><div class="xp-n"><small>Nível</small><b>${po ? 0 : nv.n}</b></div>
      <div><b>${p.xp} XP</b><small>${po ? 'Pó da terra' : esc(J.estagio(nv.n).nome)} ${p.criadoEm ? ` · desde ${dataCurta(p.criadoEm)}` : ''}</small></div></div>
    ${po ? '<p class="xp-falta">Conclua a 1ª sessão para receber o fôlego de vida e virar <b>Peregrino</b>.</p>' : `
    <div class="barra"><i style="width:${nv.pct}%"></i></div>
    <p class="xp-falta">Faltam <b>${falta} XP</b> para o nível ${nv.n + 1}${est ? (est.nivel === nv.n + 1 ? `, quando você vira <b>${esc(est.nome)}</b>` : ` · <b>${faltaEst} XP</b> para virar <b>${esc(est.nome)}</b> (nível ${est.nivel})`) : ''}</p>`}
    ${linhas.length ? `<div class="xp-sec">De onde veio</div>
    <div class="xp-fontes">${linhas.map((g) => `<div class="xp-fonte"><span>${ico(ICO_GANHO[g])}</span><div><b>${NOME_GANHO[g]}</b><i style="width:${Math.round((tot[g] / maior) * 100)}%"></i></div><em>${tot[g]}</em></div>`).join('')}</div>` : ''}
    ${ult.length ? `<div class="xp-sec">Últimos ganhos</div>
    <div class="xp-hist">${ult.map((u) => `<div><small>${dataCurta(u.data)}</small><span>${u.g === 'acerto' ? `${u.n} acerto${u.n > 1 ? 's' : ''} no quiz` : esc(u.txt)}</span><b>+${u.xp}</b></div>`).join('')}</div>` : ''}
    <div class="xp-sec">Como ganhar XP</div>
    <div class="xp-como">
      <span>Concluir uma sessão <b>+${J.XP.sessao}</b></span><span>Escrever a aplicação <b>+${J.XP.aplicacao}</b></span>
      <span>Contar "como foi?" <b>+${J.XP.revisao}</b></span><span>Acerto na revisão <b>+${J.XP.acerto}</b></span>
      <span>Meta da semana (5 dias) <b>+${J.FAIXAS_SEMANA[0].xp}</b></span><span>Concluir um livro <b>+${J.XP.livro}</b></span>
      <span>Concluir uma era <b>+${J.XP.era}</b></span><span>Completar um desafio <b>+${J.XP.livro}</b></span></div>
    <button class="btn grande" data-fechar>Fechar</button></div>`);
}

function carta(id, { aberta = true, nova = false, verso = false } = {}) {
  const c = J.PERSONAGENS[id]; const [sim, rar, tit] = J.CARTAS[id] || ['star', 'comum', ''];
  const s = J.SESSOES.find((x) => x.personagens.includes(id));
  const era = s ? eraDe(s) : 'principio';
  if (!aberta) return `<div class="carta bloq"><div class="carta-in"><div class="carta-arte">${ico('lock-keyhole', 'g')}</div><div class="carta-nome">???</div></div></div>`;
  const gemas = '◆'.repeat(RARIDADE[rar].gemas);
  return `<a class="carta r-${rar} ${nova ? 'nova' : ''}" href="#/carta/${id}" style="--c:${COR_ERA[era]}">
    <div class="carta-in">
      <div class="carta-cab"><span class="carta-nome">${esc(c.nome)}</span><span class="gemas">${gemas}</span></div>
      <div class="carta-arte"><span class="simbolo">${ico(sim)}</span>${COM_IMAGEM.has(id) ? `<img src="img/cartas/${id}.webp" alt="" loading="lazy">` : ''}</div>
      <div class="carta-tit">${esc(tit)}</div>
      <div class="carta-pe"><span>${esc(RARIDADE[rar].nome)}</span><span class="era-nome">${esc(ERAS.find((e) => e.id === era).nome)}</span></div>
    </div></a>`;
}

function semana(p) {
  const s = J.semanaAtual(p); const h = store.hoje(); const seg = s.dias[0];
  const letras = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];
  const anterior = store.somarDias(seg, -7);
  const seqMeta = J.bateuFaixa(p, seg, 5) ? J.sequencia(p, seg, 5) : J.sequencia(p, anterior, 5);
  const seqFech = J.bateuFaixa(p, seg, 7) ? J.sequencia(p, seg, 7) : J.sequencia(p, anterior, 7);
  return `<section class="bloco semana">
    <div class="bloco-tit"><span>Esta semana</span><span class="${s.feitos >= J.META_SEMANA ? 'ok' : ''}">${s.feitos}/7 dias</span></div>
    <div class="dias">${s.dias.map((d, i) => `<div class="dia ${s.ativos.has(d) ? 'feito' : ''} ${d === h ? 'hoje' : ''}">${s.ativos.has(d) ? ico('check') : letras[i]}</div>`).join('')}</div>
    <div class="faixas">${J.FAIXAS_SEMANA.map((f) => `<span class="faixa ${J.bateuFaixa(p, seg, f.dias) ? 'on' : ''}"><b>${f.dias} dias</b><small>${f.dias === 7 ? 'fechada · ' : ''}+${f.xp} XP</small></span>`).join('')}</div>
    ${seqMeta || seqFech ? `<div class="seqs">${seqMeta ? `<span>${ico('flame')} ${seqMeta} semana${seqMeta > 1 ? 's' : ''} batendo a meta</span>` : ''}${seqFech ? `<span>${ico('crown')} ${seqFech} semana${seqFech > 1 ? 's' : ''} fechada${seqFech > 1 ? 's' : ''}</span>` : ''}</div>` : ''}
    <p class="dica">Semanas seguidas dão bônus extra: +${J.SEQ.meta.porSemana} XP por semana batendo a meta e +${J.SEQ.fechada.porSemana} XP por semana fechada. Perder uma semana só zera a sequência, nunca o que você já ganhou.</p>
  </section>`;
}

// ─── Telas ───
function telaBoasVindas() {
  return `<div class="boas">
    <div class="boas-av">${avatarHTML({}, [], 130)}</div>
    <h1>${NOME_APP}</h1>
    <p class="lead">Atravesse a Bíblia na ordem da história. Toda jornada começa no pó da terra (Gn 2:7): na primeira sessão você recebe o fôlego de vida e escolhe quem vai te acompanhar.</p>
    <a class="btn grande" href="#/novo-perfil">Criar meu viajante</a>
    ${instalado() ? '' : `<button class="btn sec" data-acao="instalar">${ico('download')} Instalar no celular</button>`}
  </div>`;
}

function galeriaPersonagens(atual) {
  return `<div class="galeria-av">${AVATARES.map((a) => `<button class="op-av ${atual === a.id ? 'on' : ''}" data-acao="f-personagem" data-v="${a.id}">${avatarHTML({ personagem: a.id }, [], 64)}<span>${esc(a.nome)}</span></button>`).join('')}</div>`;
}

function telaPerfilForm(editId) {
  const p = editId ? RAIZ.perfis[editId] : null;
  const f = FORM ||= { nome: p?.nome || '', tipo: p?.tipo || (perfis().length ? 'crianca' : 'adulto'), avatar: { ...(p?.avatar || { personagem: null }) } };
  const itens = J.itensAte(p ? J.nivel(p.xp).n : 1);
  const esc1 = f.avatar.personagem ? AVATARES.find((a) => a.id === f.avatar.personagem) : null;
  return `<header class="topo-sec"><a class="voltar" href="${perfis().length ? '#/perfil' : '#/hoje'}">${ico('chevron-left')}</a><h2>${p ? 'Editar viajante' : 'Novo viajante'}</h2></header>
  <div class="editor">
    <div class="editor-prev">${avatarHTML(f.avatar, itens, 140)}
      ${esc1 ? `<div class="esc-info"><b>${esc(esc1.nome)}</b><small>${esc(esc1.frase)} <i>${esc(esc1.ref)}</i></small></div>`
        : `<div class="esc-info"><b>Pó da terra</b><small>Toda jornada começa aqui. Ao concluir a primeira sessão, você recebe o fôlego de vida e escolhe o personagem que vai te acompanhar. <i>Gn 2:7</i></small></div>`}</div>
    <label class="rot" for="nome">Nome</label>
    <input id="nome" class="campo" value="${esc(f.nome)}" placeholder="Como chamar este viajante?" maxlength="20">
    <div class="rot">Perfil</div>
    <div class="seg">${[['adulto', 'Adulto'], ['crianca', 'Criança']].map(([v, t]) => `<button class="${f.tipo === v ? 'on' : ''}" data-acao="f-tipo" data-v="${v}">${t}</button>`).join('')}</div>
    ${p?.avatar?.personagem ? `<div class="rot">Trocar de personagem</div>${galeriaPersonagens(f.avatar.personagem)}` : ''}
    <button class="btn grande" data-acao="f-salvar" data-id="${editId || ''}">${p ? 'Salvar' : 'Começar a jornada'}</button>
    ${p && perfis().length > 1 ? `<button class="btn perigo-sec" data-acao="f-remover" data-id="${editId}">Remover este viajante</button>` : ''}
  </div>`;
}

// Fôlego de vida: depois da primeira sessão, o pó ganha vida e o viajante escolhe o personagem.
function folegoDeVida(perfilId, depois) {
  const alvo = RAIZ.perfis[perfilId];
  const o = overlay(`<div class="folego">
    <div class="folego-cena">${avatarHTML({}, [], 150)}<span class="sopro"></span></div>
    <small>Gênesis 2:7</small>
    <h2>O Senhor formou o homem do pó da terra e soprou o fôlego de vida.</h2>
    <p>${esc(alvo.nome)}, sua jornada começou. Escolha quem vai te acompanhar:</p>
    ${galeriaPersonagens(null).replace(/data-acao="f-personagem"/g, 'data-acao="receber"')}
  </div>`);
  o.querySelector('.overlay-in').classList.add('largo');
  o.querySelectorAll('[data-acao="receber"]').forEach((btn) => btn.addEventListener('click', (ev) => {
    ev.stopPropagation();
    alvo.avatar = { personagem: btn.dataset.v }; alvo.editado = new Date().toISOString(); salvar();
    const a = AVATARES.find((x) => x.id === btn.dataset.v);
    const graos = Array.from({ length: 22 }, (_, k) => `<i class="grao" style="--dx:${Math.round((Math.random() - .5) * 180)}px;--dy:${Math.round(-60 - Math.random() * 120)}px;--t:${(1.1 + Math.random() * .7).toFixed(2)}s;left:${30 + Math.random() * 40}%;top:${45 + Math.random() * 35}%"></i>`).join('');
    const box = o.querySelector('.overlay-in');
    box.innerHTML = `<div class="folego ok transforma">
      <div class="tf-cena"><span class="tf-luz"></span><span class="tf-po">${avatarHTML({}, [], 170)}</span><span class="tf-pers">${avatarHTML(alvo.avatar, J.itensAte(J.nivel(alvo.xp).n), 170)}</span>${graos}<span class="tf-flash"></span></div>
      <p class="tf-verso">“…e assoprou em seu nariz sopro de vida; e foi o homem em alma vivente.” <i>Gn 2:7 (Bíblia Livre)</i></p>
      <div class="tf-fim"><h2>${esc(a.nome)}</h2><p>${esc(a.frase)} <i>${esc(a.ref)}</i></p><button class="btn grande" data-fechar>Seguir a jornada</button></div></div>`;
    const f = box.querySelector('.transforma');
    requestAnimationFrame(() => f.classList.add('passo1'));
    setTimeout(() => f.classList.add('passo2'), 2200);
    setTimeout(() => { f.classList.add('passo3'); confete(60); }, 3300);
  }));
  const obs = new MutationObserver(() => { if (!document.body.contains(o)) { obs.disconnect(); render(); depois?.(); } });
  obs.observe(document.body, { childList: true });
}

let FORM = null;

function telaHoje() {
  const p = P(); const nv = J.nivel(p.xp);
  const prox = J.proxima(p);
  const aplic = J.aplicacoesParaRevisar(p);
  const quiz = J.quizPendente(p);
  const feitaHoje = p.log.some((l) => l.tipo === 'sessao' && l.data === store.hoje());
  const est = J.estagio(nv.n);

  const missoes = [
    { feito: feitaHoje, ico: 'book-open', txt: 'Fazer a sessão do dia', xp: `+${J.XP.sessao}–${J.XP.sessao + J.XP.aplicacao}`, href: prox ? `#/sessao/${prox.id}` : null },
    quiz.length ? { feito: false, ico: 'medal', txt: `Revisar ${quiz.length} pergunta${quiz.length > 1 ? 's' : ''}`, xp: `+${J.XP.acerto} cada`, href: '#/revisao' } : null,
    ...aplic.map((s) => ({ feito: false, ico: 'heart', txt: `Como foi: “${p.sessoes[s.id].aplicacao}”`, xp: `+${J.XP.revisao}`, href: `#/aplicacao/${s.id}` })),
  ].filter(Boolean);

  return `${topo()}
  <section class="hero" style="--c:${prox ? COR_ERA[eraDe(prox)] : '#d29a2c'}">
    <div class="hero-av">${avatarHTML(p.avatar, J.itensAte(nv.n), 110)}</div>
    <div class="hero-info"><small>${nomeEstagio(p)}</small><h2>${esc(p.nome)}</h2>${barraXP(p)}</div>
  </section>
  ${!p.avatar?.personagem && J.concluidas(p).length ? `<button class="aviso grande-aviso" data-acao="escolher-personagem">${ico('sparkles')}<span><b>Receba o fôlego de vida</b><br>Escolha o personagem que vai te acompanhar.</span>${ico('chevron-right')}</button>` : ''}
  ${cartaoInstalar(true)}
  ${prox ? `<a class="missao" href="#/sessao/${prox.id}" style="--c:${COR_ERA[eraDe(prox)]}">
      <div class="missao-top"><span>${feitaHoje ? 'Quer avançar mais?' : 'Sessão de hoje'}</span><span>${esc(ERAS.find((e) => e.id === eraDe(prox)).nome)}</span></div>
      <div class="missao-ref">${esc(J.refSessao(prox))}</div>
      <div class="missao-tit">${esc(prox.titulo)}</div>
      <div class="missao-go">Começar ${ico('chevron-right')}</div>
    </a>`
    : `<section class="bloco"><b>Você chegou ao fim do conteúdo escrito!</b><p>A próxima era está sendo preparada. Enquanto isso, revise as perguntas e releia as sessões.</p></section>`}
  ${J.desafiosVisiveis(CANAL_TESTE).map((d) => cartaoDesafio(p, d)).join('')}
  <section class="bloco"><div class="bloco-tit"><span>Missões</span></div>
    ${missoes.map((m) => `<a class="mis ${m.feito ? 'feito' : ''}" ${m.href && !m.feito ? `href="${m.href}"` : ''}>
      <span class="mis-ico">${ico(m.feito ? 'circle-check' : m.ico)}</span><span class="mis-txt">${esc(m.txt)}</span><span class="mis-xp">${m.xp}</span></a>`).join('')}
  </section>
  ${semana(p)}`;
}

// ─── Desafios sazonais ───
const fmtDia = (d) => { const [, m, dd] = d.split('-'); return `${Number(dd)}/${Number(m)}`; };
const refTrecho = ([l, c, a, b]) => `${LIVROS[l].nome} ${c}:${a}${b && b !== a ? `-${b}` : ''}`;
// Medalha do selo especial: arte desenhada + imagem do objeto (quando houver) no lugar da estrela.
const arteEspecial = (s) => `<span class="selo-disco arte ${SELOS_COM_IMAGEM.has(s.id) ? 'com-img' : ''}">${ARTE_SELO[s.arte]}${SELOS_COM_IMAGEM.has(s.id) ? `<img class="selo-img" src="img/selos/${s.id}.webp" alt="">` : ''}</span>`;
function trilhaEstrelas(d, feitos, prox) {
  return `<div class="trilha-est">${d.sessoes.map((x, i) => `<span class="${feitos[i] ? 'ok' : ''} ${i === prox ? 'prox' : ''}">${ico('star')}</span>`).join('')}</div>`;
}
function cartaoDesafio(p, d) {
  const pr = J.progressoDesafio(p, d);
  const antes = store.hoje() < d.inicio;
  if (d.tema === 'natal') return `<a class="desafio-card natal" href="#/desafio/${d.id}">${bannerNatal(150)}
    <span class="dn-txt"><small>Desafio de ${esc(d.tipo)}${antes ? ` · começa em ${fmtDia(d.inicio)}` : ''}</small><b>${esc(d.nome)}</b>
    ${trilhaEstrelas(d, p.desafios?.[d.id] || {}, pr.proxima)}<em>${pr.completo ? 'Completo! Selo conquistado' : pr.feitos ? `${pr.feitos} de ${pr.total} dias · continuar` : `${pr.total} dias até o Natal · começar`}</em></span>
    <span class="dn-seta">${ico('chevron-right')}</span></a>`;
  return `<a class="desafio-card" href="#/desafio/${d.id}" style="--c:${d.cor}">
    <span class="desafio-ico">${ico(d.icone)}</span>
    <span class="desafio-txt"><small>Desafio de ${esc(d.tipo)}${antes ? ` · começa em ${fmtDia(d.inicio)}` : ''}</small><b>${esc(d.nome)}</b>
    <span class="desafio-barra"><i style="width:${Math.round((pr.feitos / pr.total) * 100)}%"></i></span><em>${pr.completo ? 'Completo!' : `${pr.feitos} de ${pr.total} dias`}</em></span>
    ${ico('chevron-right')}</a>`;
}
function telaDesafio(id) {
  const d = J.desafioPorId(id); const p = P();
  if (!d) return telaHoje();
  const pr = J.progressoDesafio(p, d); const feitos = p.desafios?.[d.id] || {};
  if (d.tema === 'natal') return `<header class="hero-natal">${bannerNatal(230)}<a class="voltar" href="#/hoje">${ico('chevron-left')}</a>
      <div class="hn-txt"><small>Desafio de ${esc(d.tipo)} · ${fmtDia(d.inicio)} a ${fmtDia(d.fim)}</small><h2>${esc(d.nome)}</h2><p>${esc(d.desc)}</p></div></header>
    <section class="bloco natal-prog">${trilhaEstrelas(d, feitos, pr.proxima)}<p class="sub"><b>${pr.feitos} de ${pr.total} estrelas</b>${pr.completo ? ' · selo conquistado!' : ''}</p>
      <p class="dica">Corre em paralelo à jornada: não atrasa nem trava as suas sessões. Uma leitura por dia é o ideal, mas você pode fazer no seu ritmo até ${fmtDia(d.fim)}.</p></section>
    <div class="advento">${d.sessoes.map((x, i) => {
      const feito = !!feitos[i]; const livre = feito || i === pr.proxima;
      return `<a class="janela ${feito ? 'feito' : ''} ${livre && !feito ? 'prox' : ''} ${livre ? '' : 'bloq'} c${i % 3}" ${livre ? `href="#/dsessao/${d.id}.${i}"` : ''}>
        <span class="jn-n">${i + 1}</span><span class="jn-ico">${ico(feito ? 'star' : livre ? x.icone : 'lock-keyhole')}</span><b>${esc(x.titulo)}</b></a>`;
    }).join('')}</div>
    <a class="selo-premio ${pr.completo ? 'ok' : ''}" ${pr.completo ? `href="#/selo/${d.selo.id}"` : ''}><span class="sp-arte">${arteEspecial(d.selo)}</span>
      <span><small>${pr.completo ? 'Selo conquistado' : 'Ao completar os 12 dias'}</small><b>Selo ${esc(d.selo.nome)}</b><em>${esc(d.selo.ref)}</em></span></a>`;
  return `<header class="cab-sessao" style="--c:${d.cor}"><a class="voltar" href="#/hoje">${ico('chevron-left')}</a>
    <div><small>Desafio de ${esc(d.tipo)} · ${fmtDia(d.inicio)} a ${fmtDia(d.fim)}</small><h2>${esc(d.nome)}</h2></div></header>
  <section class="bloco"><p>${esc(d.desc)}</p><p class="dica">Corre em paralelo à jornada: não atrasa nem trava as suas sessões. Uma leitura por dia é o ideal, mas você pode fazer no seu ritmo até ${fmtDia(d.fim)}.</p>
    <div class="desafio-barra grande"><i style="width:${Math.round((pr.feitos / pr.total) * 100)}%"></i></div><p class="sub">${pr.feitos} de ${pr.total} dias${pr.completo ? ' · selo conquistado!' : ''}</p></section>
  <section class="bloco lista-desafio">${d.sessoes.map((x, i) => {
    const feito = !!feitos[i]; const livre = feito || i === pr.proxima;
    return `<a class="dd ${feito ? 'feito' : ''} ${livre ? '' : 'bloq'}" ${livre ? `href="#/dsessao/${d.id}.${i}"` : ''}>
      <span class="dd-n">${feito ? ico('check') : i + 1}</span><span class="dd-txt"><b>${esc(x.titulo)}</b><small>${esc(x.trechos.map(refTrecho).join('; '))}</small></span>${livre && !feito ? ico('chevron-right') : feito ? '' : ico('lock-keyhole')}</a>`;
  }).join('')}</section>
  ${pr.completo ? `<a class="btn sec" href="#/selo/${d.selo.id}">${ico('award')} Ver o selo ${esc(d.selo.nome)}</a>` : ''}`;
}
function telaDSessao(arg, passo = 0) {
  const [did, si] = String(arg).split('.'); const d = J.desafioPorId(did); const i = Number(si); const x = d?.sessoes[i]; const p = P();
  if (!x) return telaHoje();
  const feito = p.desafios?.[d.id]?.[i];
  const pr = J.progressoDesafio(p, d);
  if (!feito && i !== pr.proxima) return telaDesafio(d.id);
  const r = rascunho(arg); const crianca = p.tipo === 'crianca';
  const temCriancas = perfis().some((o) => o.tipo === 'crianca');
  const cab = d.tema === 'natal'
    ? `<header class="hero-natal curto">${bannerNatal(150)}<a class="voltar" href="#/desafio/${d.id}">${ico('chevron-left')}</a>
      <div class="hn-txt"><span class="hn-dia">${ico(x.icone)}<i>${i + 1}</i></span><div><small>${esc(d.tipo)} · dia ${i + 1} de ${d.sessoes.length}</small><h2>${esc(x.titulo)}</h2><em>${esc(x.trechos.map(refTrecho).join('; '))}</em></div></div></header>`
    : `<header class="cab-sessao" style="--c:${d.cor}"><a class="voltar" href="#/desafio/${d.id}">${ico('chevron-left')}</a>
    <div><small>${esc(d.tipo)} · dia ${i + 1} de ${d.sessoes.length} · ${esc(x.trechos.map(refTrecho).join('; '))}</small><h2>${esc(x.titulo)}</h2></div></header>`;
  if (feito) return `${cab}<section class="bloco"><div class="rot">O que entendi</div><p>${esc(feito.entendi)}</p>${feito.aplicacao ? `<div class="rot">Minha aplicação</div><p>${esc(feito.aplicacao)}</p>` : ''}<p class="dica">Concluído em ${fmtData(feito.data)}.</p></section><a class="btn sec" href="#/desafio/${d.id}">Voltar ao desafio</a>`;
  const passos = ['Leitura', 'Entendi'];
  const barra = `<div class="passos">${passos.map((t, k) => `<span class="${k < passo ? 'ok' : ''} ${k === passo ? 'atual' : ''}"><i>${k < passo ? ico('check') : k + 1}</i>${t}</span>`).join('')}</div>`;
  let corpo;
  if (passo === 0) {
    corpo = `<section class="folha"><div class="rot">Contexto</div><p>${esc(x.contexto)}</p>
      <div class="rot">Notas</div><ul class="notas">${x.notas.map(([ref, t]) => `<li><b>${esc(ref)}</b><span>${esc(t)}</span></li>`).join('')}</ul></section>
    ${(temCriancas || crianca) && x.crianca ? `<section class="kids">${ico('users-round')}<div><b>Para as crianças</b><p>${esc(x.crianca)}</p></div></section>` : ''}
    ${x.trechos.map((t) => `<section class="leitor trecho" data-trecho='${JSON.stringify(t)}'><h3>${esc(refTrecho(t))}</h3><div class="versos"><p class="dica">Carregando o texto…</p></div></section>`).join('')}
    <p class="credito">Texto: Bíblia Livre (BLIVRE) © Diego Santos, Mario Sérgio e Marco Teles, 2018 · <a href="https://creativecommons.org/licenses/by/4.0/deed.pt-br" target="_blank" rel="noopener">CC BY 4.0</a></p>
    <label class="check"><input type="checkbox" id="li" ${r.li ? 'checked' : ''}><span>Li ${x.trechos.length > 1 ? 'todos os trechos' : 'o texto'}</span></label>
    <button class="btn grande" data-acao="passo" data-passo="1" id="btn-li" ${r.li ? '' : 'disabled'}>Continuar ${ico('chevron-right')}</button>`;
  } else {
    const outros = perfis().filter((o) => o.id !== p.id && !o.desafios?.[d.id]?.[i]);
    corpo = `<section class="bloco">
      <label class="rot" for="entendi">${crianca ? 'O que eu aprendi' : 'O que eu entendi'}</label>
      <textarea id="entendi" rows="3" placeholder="Uma frase já basta.">${esc(r.entendi || '')}</textarea>
      <div class="rot">Para pensar</div><p class="pergunta">${esc(crianca && x.crianca ? x.crianca : x.pergunta)}</p>
      <label class="rot" for="aplicacao">${crianca ? 'O que eu vou fazer' : 'Minha aplicação'} <em>opcional · +${J.XP.aplicacao} XP</em></label>
      <textarea id="aplicacao" rows="3">${esc(r.aplicacao || '')}</textarea></section>
    ${outros.length ? `<section class="bloco"><div class="rot">Estudaram junto</div>
      <div class="juntos">${outros.map((o) => `<button class="junto ${r.juntos?.includes(o.id) ? 'on' : ''}" data-acao="junto" data-p="${o.id}">${avatarHTML(o.avatar, J.itensAte(J.nivel(o.xp).n), 30)}<span>${esc(o.nome)}</span></button>`).join('')}</div></section>` : ''}
    <button class="btn grande ouro" data-acao="dconcluir" id="btn-entendi" ${r.entendi?.trim() ? '' : 'disabled'}>Concluir o dia ${i + 1}</button>`;
  }
  return cab + barra + `<div class="anima">${corpo}</div>`;
}
async function carregarTrechos() {
  for (const el of document.querySelectorAll('.leitor.trecho')) {
    const [l, c, a, b] = JSON.parse(el.dataset.trecho);
    try {
      const vs = (await textoLivro(LIVROS[l]))[c] || {};
      el.querySelector('.versos').innerHTML = Object.entries(vs).filter(([v]) => Number(v) >= a && Number(v) <= (b || a)).map(([v, txt]) => `<span class="v"><sup>${v}</sup>${esc(txt)} </span>`).join('');
    } catch { el.querySelector('.versos').innerHTML = '<p class="dica">Não consegui carregar o texto agora.</p>'; }
  }
}

function cabSessao(s, sub) {
  return `<header class="cab-sessao" style="--c:${COR_ERA[eraDe(s)]}">
    <a class="voltar" href="#/jornada">${ico('chevron-left')}</a>
    <div><small>${esc(sub || J.refSessao(s))}</small><h2>${esc(s.titulo)}</h2></div></header>`;
}

function telaSessao(id, passo = 0) {
  const s = J.sessaoPorId(id); const p = P();
  if (!s) return telaHoje();
  if (!J.liberada(p, s)) return `${topo()}<section class="bloco"><p>Esta sessão ainda está bloqueada. Conclua as anteriores primeiro.</p><a class="btn" href="#/jornada">Voltar</a></section>`;
  if (J.concluida(p, s.id) && passo === 0 && !EDITANDO[id]) return telaSessaoFeita(s);

  const livro = LIVROS[s.livro]; const r = rascunho(id);
  const crianca = p.tipo === 'crianca';
  const temCriancas = perfis().some((x) => x.tipo === 'crianca');
  const primeiraDoLivro = J.SESSOES.find((x) => x.livro === s.livro).id === s.id;
  const passos = ['Contexto', 'Leitura', 'Entendi', 'Aplicação'];
  const barra = `<div class="passos">${passos.map((t, i) => `<span class="${i < passo ? 'ok' : ''} ${i === passo ? 'atual' : ''}"><i>${i < passo ? ico('check') : i + 1}</i>${t}</span>`).join('')}</div>`;
  let corpo = '';

  if (passo === 0) {
    corpo = `
    ${primeiraDoLivro ? `<a class="aviso" href="#/livro/${s.livro}">${ico('book-open-text')}<span>Primeira sessão de ${esc(livro.nome)}. Veja a <b>introdução do livro</b>.</span>${ico('chevron-right')}</a>` : ''}
    <section class="folha">
      <div class="rot">Cenário</div><p class="cenario">${ico('map')} ${esc(s.cenario)}</p>
      <div class="rot">Contexto</div><p>${esc(s.contexto)}</p>
      <div class="rot">Notas</div>
      <ul class="notas">${s.notas.map(([ref, t]) => `<li><b>${esc(ref)}</b><span>${esc(t)}</span></li>`).join('')}</ul>
    </section>
    ${(temCriancas || crianca) && J.CRIANCAS[s.id] ? `<section class="kids">${ico('users-round')}<div><b>Para as crianças</b><p>${esc(J.CRIANCAS[s.id])}</p></div></section>` : ''}
    <button class="btn grande" data-acao="passo" data-passo="1">Ir para a leitura ${ico('chevron-right')}</button>`;
  } else if (passo === 1) {
    const caps = []; for (let c = s.caps[0]; c <= s.caps[1]; c++) caps.push(c);
    const capAtual = r.cap && caps.includes(r.cap) ? r.cap : caps[0];
    const url = linkNAA(livro, capAtual);
    corpo = `
    ${caps.length > 1 ? `<div class="abas-cap">${caps.map((c) => `<button class="${c === capAtual ? 'on' : ''} ${r.lidos?.includes(c) ? 'lido' : ''}" data-acao="cap" data-c="${c}">${esc(livro.nome)} ${c}</button>`).join('')}</div>` : ''}
    <section class="leitor" id="leitor" data-livro="${s.livro}" data-cap="${capAtual}"><h3>${esc(livro.nome)} ${capAtual}</h3><div class="versos"><p class="dica">Carregando o texto…</p></div></section>
    <div class="leitor-acoes">
      ${url ? `<a class="btn sec" href="${url}" target="_blank" rel="noopener">${ico('external-link')} Ler ${esc(livro.nome)} ${capAtual} na NAA</a>` : ''}
    </div>
    <p class="credito">Texto: Bíblia Livre (BLIVRE) © Diego Santos, Mario Sérgio e Marco Teles, 2018 · <a href="https://creativecommons.org/licenses/by/4.0/deed.pt-br" target="_blank" rel="noopener">CC BY 4.0</a></p>
    <label class="check"><input type="checkbox" id="li" ${r.li ? 'checked' : ''}><span>Li ${caps.length > 1 ? 'todo o trecho' : 'o texto'}</span></label>
    <button class="btn grande" data-acao="passo" data-passo="2" id="btn-li" ${r.li ? '' : 'disabled'}>Continuar ${ico('chevron-right')}</button>`;
  } else if (passo === 2) {
    corpo = `
    <section class="bloco">
      <label class="rot" for="entendi">${crianca ? 'O que eu aprendi' : 'O que eu entendi'}</label>
      <textarea id="entendi" rows="4" placeholder="Uma frase já basta.">${esc(r.entendi || '')}</textarea>

    </section>
    <button class="btn grande" data-acao="passo" data-passo="3" id="btn-entendi" ${r.entendi?.trim() ? '' : 'disabled'}>Continuar ${ico('chevron-right')}</button>`;
  } else {
    const outros = perfis().filter((x) => x.id !== p.id);
    corpo = `
    <section class="bloco">
      <div class="rot">Para pensar</div><p class="pergunta">${esc(crianca && J.CRIANCAS[s.id] ? J.CRIANCAS[s.id] : s.pergunta)}</p>
      <label class="rot" for="aplicacao">${crianca ? 'O que eu vou fazer' : 'Minha aplicação'} <em>+${J.XP.aplicacao} XP</em></label>
      <textarea id="aplicacao" rows="4" placeholder="Algo concreto. Em ${J.DIAS_PARA_REVISAR_APLICACAO} dias o app pergunta como foi.">${esc(r.aplicacao || '')}</textarea>
    </section>
    ${outros.length && !J.concluida(p, s.id) ? `<section class="bloco"><div class="rot">Estudaram junto</div>
      <div class="juntos">${outros.map((o) => `<button class="junto ${r.juntos?.includes(o.id) ? 'on' : ''}" data-acao="junto" data-p="${o.id}">${avatarHTML(o.avatar, J.itensAte(J.nivel(o.xp).n), 30)}<span>${esc(o.nome)}</span></button>`).join('')}</div>
      <small class="dica">Quem for marcado também conclui a sessão e ganha XP e cartas.</small></section>` : ''}
    <button class="btn grande ouro" data-acao="concluir" data-id="${s.id}">${J.concluida(p, s.id) ? 'Salvar anotações' : 'Concluir sessão'}</button>`;
  }
  return cabSessao(s) + barra + `<div class="anima">${corpo}</div>`;
}
const EDITANDO = {};

function telaSessaoFeita(s) {
  const r = P().sessoes[s.id];
  return `${cabSessao(s, `${J.refSessao(s)} · ${fmtData(r.data)}`)}
  <section class="bloco"><div class="rot">O que entendi</div><p>${esc(r.entendi)}</p>
    ${r.aplicacao ? `<div class="rot">Aplicação</div><p>${esc(r.aplicacao)}</p>` : ''}
    ${r.revisao ? `<div class="rot">Como foi · ${fmtData(r.revisao.data)}</div><p>${esc(r.revisao.texto)}</p>` : ''}
  </section>
  <section class="folha"><div class="rot">Cenário</div><p class="cenario">${ico('map')} ${esc(s.cenario)}</p><div class="rot">Contexto</div><p>${esc(s.contexto)}</p>
    <div class="rot">Notas</div><ul class="notas">${s.notas.map(([ref, t]) => `<li><b>${esc(ref)}</b><span>${esc(t)}</span></li>`).join('')}</ul></section>
  ${J.selosDaSessao(s.id).length ? `<section class="bloco"><div class="rot">Selo desta sessão</div><div class="grade-selos">${J.selosDaSessao(s.id).map((id) => selo(id)).join('')}</div></section>` : ''}
  ${s.personagens.length ? `<section class="bloco"><div class="rot">Cartas desta sessão</div><div class="grade-cartas mini">${s.personagens.map((id) => carta(id)).join('')}</div></section>` : ''}
  <button class="btn sec" data-acao="editar" data-id="${s.id}">Editar minhas anotações</button>`;
}

function telaResultado(res) {
  const total = res.ganhos.reduce((a, [, x]) => a + x, 0);
  return `<div class="resultado">
    <div class="selo"><b>+${total}</b><span>XP</span></div>
    <h2>${res.desafio ? 'Dia concluído!' : 'Sessão concluída!'}</h2>
    <ul class="ganhos">${res.ganhos.map(([t, x]) => `<li><span>${esc(t)}</span><b>+${x}</b></li>`).join('')}</ul>
    ${res.juntos?.length ? `<p class="dica">Também concluíram: ${res.juntos.map(esc).join(', ')}</p>` : ''}
    ${res.abertas ? `<a class="btn grande sec" href="#/cartas">${ico('layers')} Ver no álbum</a>` : res.novosP.length + (res.novosS?.length || 0) ? `<button class="btn grande ouro pacote" data-acao="abrir-cartas">${ico('layers')} Abrir ${[res.novosP.length ? `${res.novosP.length} carta${res.novosP.length > 1 ? 's' : ''}` : '', res.novosS?.length ? `${res.novosS.length} selo${res.novosS.length > 1 ? 's' : ''}` : ''].filter(Boolean).join(' e ')}</button>` : ''}
    ${res.novosM.length ? `<section class="bloco"><div class="rot">Na linha do tempo</div>${res.novosM.map((m) => `<p>${ico('flag')} ${esc(J.MARCOS.find((x) => x.id === m).titulo)}</p>`).join('')}</section>` : ''}
    ${res.novasC.length ? (res.conqVistas ? `<section class="bloco"><div class="rot">Conquistas</div>${res.novasC.map((c) => `<p>${ico('trophy')} <b>${esc(c.nome)}</b> — ${esc(c.desc)}</p>`).join('')}</section>` : `<button class="btn grande ouro pacote" data-acao="ver-conquistas">${ico('trophy')} Receber ${res.novasC.length > 1 ? `${res.novasC.length} conquistas` : 'conquista'}</button>`) : ''}
    <a class="btn sec" href="#/hoje">Voltar ao início</a>
  </div>`;
}

function selo(id, { aberta = true, grande = false } = {}) {
  const s = J.SELOS[id] || J.SELOS_ESPECIAIS[id];
  if (!aberta) return `<div class="selo-p bloq">${ico('lock-keyhole')}<span>???</span></div>`;
  const img = SELOS_COM_IMAGEM.has(id) ? `<img class="selo-img" src="img/selos/${id}.webp" alt="" loading="lazy">` : '';
  return `<a class="selo-p ${grande ? 'grande' : ''}" href="#/selo/${id}"><span class="selo-disco ${s.arte ? 'arte' : ''} ${img ? 'com-img' : ''}">${s.arte ? ARTE_SELO[s.arte] : img ? '' : ico(s.icone)}${img}</span><span>${esc(s.nome)}</span></a>`;
}

function abrirCartas(lista, i = 0) {
  if (i >= lista.length) { if (ultimoResultado) ultimoResultado.abertas = true; render(); return; }
  if (lista[i].startsWith('selo:')) {
    const id = lista[i].slice(5); const s = J.SELOS[id] || J.SELOS_ESPECIAIS[id];
    const o = overlay(`<div class="revelar r-epica"><div class="revelar-selo">${selo(id, { grande: true })}</div>
      <div class="revelar-txt"><small>${J.SELOS_ESPECIAIS[id] ? 'Selo especial' : 'Selo da Palavra'}</small><b>${esc(s.nome)}</b></div><p class="selo-txt">${esc(s.texto)} <i>${esc(s.ref)}</i></p>
      <button class="btn grande" data-fechar>${i + 1 < lista.length ? `Próximo (${i + 2}/${lista.length})` : 'Guardar no álbum'}</button></div>`, () => abrirCartas(lista, i + 1));
    setTimeout(() => o.querySelector('.revelar-selo').classList.add('on'), 200);
    return;
  }
  const id = lista[i]; const [, rar] = J.CARTAS[id];
  const o = overlay(`<div class="revelar r-${rar}">
      <div class="revelar-carta"><div class="face verso"><div class="verso-logo">${ico('book-open')}<span>${NOME_APP}</span></div></div><div class="face frente">${carta(id, { nova: true })}</div></div>
      <div class="revelar-txt"><small>${RARIDADE[rar].nome}</small><b>${esc(J.PERSONAGENS[id].nome)}</b></div>
      <button class="btn grande" data-fechar>${i + 1 < lista.length ? `Próxima (${i + 2}/${lista.length})` : 'Guardar no álbum'}</button>
    </div>`, () => abrirCartas(lista, i + 1));
  setTimeout(() => { o.querySelector('.revelar-carta').classList.add('virada'); if (rar === 'lendaria' || rar === 'epica') confete(rar === 'lendaria' ? 90 : 40); }, 450);
}

function subiuNivel(n) {
  const p = P(); const est = J.ESTAGIOS.find((e) => e.nivel === n);
  overlay(`<div class="levelup">
    <small>Subiu de nível!</small><div class="lv-n">${n}</div>
    <div class="lv-av">${avatarHTML(p.avatar, J.itensAte(n), 130)}</div>
    ${est ? `<p>Agora você é <b>${est.nome}</b>${est.item ? ` e ganhou: <b>${{ cajado: 'cajado', alforje: 'alforje', manto: 'manto', lamparina: 'lamparina', pergaminho: 'pergaminho', aura: 'brilho' }[est.item]}</b>` : ''}.</p>` : `<p>Próximo nível: ${J.xpParaSubir(n)} XP.</p>`}
    <button class="btn grande" data-fechar>Continuar</button></div>`);
  confete(80);
}

function telaAplicacao(id) {
  const s = J.sessaoPorId(id); const r = P().sessoes[id];
  if (!r) return telaHoje();
  return `${cabSessao(s, `${J.refSessao(s)} · ${fmtData(r.data)}`)}
  <section class="bloco"><div class="rot">Você se propôs</div><p class="pergunta">${esc(r.aplicacao)}</p>
    <label class="rot" for="como">Como foi na prática?</label>
    <textarea id="como" rows="4" placeholder="Deu certo? O que aprendeu? Se não deu, o que atrapalhou?"></textarea></section>
  <button class="btn grande ouro" data-acao="revisar" data-id="${id}">Registrar · +${J.XP.revisao} XP</button>`;
}

let filaQuiz = [];
function telaRevisao() {
  if (!filaQuiz.length) filaQuiz = J.quizPendente(P()).sort(() => Math.random() - 0.5).slice(0, 10);
  if (!filaQuiz.length) return `${topo()}<section class="bloco vazio">${ico('medal', 'g')}<p>Nada para revisar hoje. As perguntas voltam em intervalos maiores conforme você acerta.</p><a class="btn" href="#/hoje">Voltar</a></section>`;
  const { q, s, id } = filaQuiz[0];
  return `<header class="topo-sec"><a class="voltar" href="#/hoje">${ico('chevron-left')}</a><h2>Revisão</h2><span class="contador">${filaQuiz.length}</span></header>
  <section class="quiz anima"><small>${esc(J.refSessao(s))}</small><p class="pergunta">${esc(q.q)}</p>
    <div class="opcoes">${q.op.map((o, i) => `<button class="opcao" data-acao="responder" data-id="${id}" data-i="${i}"><i>${'ABCD'[i]}</i>${esc(o)}</button>`).join('')}</div>
    <div id="feedback"></div></section>`;
}

function marcadoresNo(sessaoId, eu) {
  const locais = perfis().filter((o) => o.id !== eu.id && (J.proxima(o)?.id || 'fim') === sessaoId)
    .map((o) => ({ nome: o.nome, avatar: o.avatar, xp: o.xp, familia: true }));
  const amigos = AMIGOS.filter((a) => a.sessao_atual === sessaoId).map((a) => ({ nome: a.nome, avatar: a.avatar, xp: a.xp }));
  const todos = [...locais, ...amigos];
  if (!todos.length) return '';
  return `<span class="amigos-no">${todos.slice(0, 3).map((a) => `<span class="amigo-pin ${a.familia ? 'fam' : ''}">${avatarHTML(a.avatar, J.itensAte(J.nivel(a.xp).n), 26)}<small>${esc(a.nome)}</small></span>`).join('')}${todos.length > 3 ? `<span class="amigo-mais">+${todos.length - 3}</span>` : ''}</span>`;
}

function abasJornada(atual) {
  return `<div class="seg abas-topo"><a class="${atual === 'mapa' ? 'on' : ''}" href="#/jornada">${ico('map')} Mapa</a><a class="${atual === 'linha' ? 'on' : ''}" href="#/linha">${ico('hourglass')} Linha do tempo</a></div>`;
}

// Caminho de terra ligando as sessões do mapa (curva suave pelos centros dos nós, passando de uma cena para a outra).
function desenharCaminhos() {
  document.querySelectorAll('.era-mapa').forEach((era) => {
    // Uma curva só por era (coordenadas da era); cada cena mostra o seu pedaço, recortado pela própria cena.
    const re = era.getBoundingClientRect();
    const P = [...era.querySelectorAll('.cena .no-circ')].map((n) => { const b = n.getBoundingClientRect(); return [b.left + b.width / 2 - re.left, b.top + b.height / 2 - re.top]; });
    if (!P.length) return;
    let d = `M${P[0][0]} ${P[0][1]}`;
    for (let k = 0; k < P.length - 1; k++) {
      const p0 = P[k - 1] || P[k], p1 = P[k], p2 = P[k + 1], p3 = P[k + 2] || p2;
      d += `C${p1[0] + (p2[0] - p0[0]) / 6} ${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6} ${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]} ${p2[1]}`;
    }
    era.querySelectorAll('.cena').forEach((c) => {
      c.querySelector('.caminho')?.remove();
      const rc = c.getBoundingClientRect(); const dx = rc.left - re.left, dy = rc.top - re.top;
      (c.querySelector('.paisagem') || c).insertAdjacentHTML(c.querySelector('.paisagem') ? 'afterend' : 'afterbegin', `<svg class="caminho" width="${c.offsetWidth}" height="${c.offsetHeight}" viewBox="${dx} ${dy} ${c.offsetWidth} ${c.offsetHeight}" aria-hidden="true"><path d="${d}" class="cm-borda"/><path d="${d}" class="cm-terra"/><path d="${d}" class="cm-meio"/></svg>`);
    });
  });
}
addEventListener('resize', () => { if ((location.hash || '').startsWith('#/jornada')) desenharCaminhos(); });

function telaJornada() {
  const p = P(); const prox = J.proxima(p);
  return `${topo()}<h1 class="tit-tela">Jornada</h1>${abasJornada('mapa')}
  <p class="dica datas-aviso">${ico('hourglass')} Datas aproximadas, estimadas por estudiosos: a Bíblia não usa o nosso calendário. Onde o texto não permite datar, não há data.</p>
  ${ERAS.filter((era) => era.conteudo && (J.progressoEra(p, era.id).feitas > 0 || (prox && LIVROS[prox.livro].era === era.id))).map((era) => {
    const pe = J.progressoEra(p, era.id);
    const divisor = era.id === 'jesus' ? `<div class="divisor-ac"><span>a.C.</span><b>${ico('star')} Nascimento de Jesus</b><span>d.C.</span></div>` : '';
    const ss = J.SESSOES.filter((s) => LIVROS[s.livro].era === era.id);
    const grupos = [];
    for (const s of ss) {
      const c = cenaDaSessao(s.id);
      if (!grupos.length || grupos.at(-1).cena !== c) grupos.push({ cena: c, sessoes: [] });
      grupos.at(-1).sessoes.push(s);
    }
    let i = 0;
    return `${divisor}<section class="era-mapa" style="--c:${COR_ERA[era.id]}">
      <div class="era-banner"><small>Era ${ERAS.indexOf(era) + 1} · ${esc(era.quando)}</small><b>${esc(era.nome)}</b><span>${pe.feitas}/${pe.total}</span><div class="barra fina"><i style="width:${Math.round(pe.feitas / pe.total * 100)}%"></i></div></div>
      ${grupos.map((g) => {
        const cena = CENAS[g.cena];
        const livroIni = g.sessoes[0].livro;
        const ehInicioLivro = J.SESSOES.find((x) => x.livro === livroIni).id === g.sessoes[0].id;
        return `<div class="cena cena-${g.cena}" style="${estiloCena(g.cena)}">${paisagem(g.cena)}
          ${ehInicioLivro ? `<a class="livro-banner" href="#/livro/${livroIni}"><span class="ordem">${LIVROS[livroIni].ordem}</span><b>${esc(LIVROS[livroIni].nome)}</b><small>Introdução ${ico('chevron-right')}</small></a>` : ''}
          <div class="cena-nome">${esc(cena.nome)}<em>${esc(cena.quando)}</em></div>
          <div class="trilha">${g.sessoes.map((s, k) => {
            const st = J.concluida(p, s.id) ? 'feita' : J.liberada(p, s) ? 'atual' : 'bloq';
            const off = g.cena === 'mar' ? (i++, 0) : [0, 64, 96, 64, 0, -64, -96, -64][i++ % 8]; // no mar, o caminho passa pelo meio, no chão seco
            const lado = off > 0 ? 'esq' : 'dir';
            const enf = cena.enfeites[k % cena.enfeites.length];
            return `<div class="passo-mapa" style="--x:${off}px">
              <span class="enf ${lado}">${enfeite(enf)}</span>
              <a class="no ${st}" ${st === 'bloq' ? '' : `href="#/sessao/${s.id}"`}>
                ${st === 'atual' && prox?.id === s.id ? `<span class="no-tag">Começar</span><span class="no-circ com-av">${avatarHTML(p.avatar, J.itensAte(J.nivel(p.xp).n), 64)}</span>`
                  : `<span class="no-circ">${st === 'feita' ? ico('check') : st === 'bloq' ? ico('lock-keyhole') : ico('star')}</span>`}
                <span class="no-lbl">${s.caps[0]}${s.caps[1] !== s.caps[0] ? '–' + s.caps[1] : ''}</span>
                ${marcadoresNo(s.id, p)}
              </a></div>`;
          }).join('')}</div></div>`;
      }).join('')}
    </section>`;
  }).join('')}`;
}

function telaAmigos() {
  const p = P();
  if (!N.ligada()) {
    return `${topo()}<h1 class="tit-tela">Amigos</h1>
    <section class="bloco vazio">${ico('users-round', 'g')}<p><b>${CANAL_TESTE ? 'A nuvem fica desligada no canal de teste.' : 'O banco ainda não foi ligado.'}</b></p>
      <p class="dica">${CANAL_TESTE ? 'Abra com ?nuvem=1 no endereço para testar a sincronização.' : 'Quando o banco estiver configurado, aqui aparecem a família em todos os celulares, os amigos e o ranking da semana.'}</p></section>
    ${rankingLocal(p)}`;
  }
  if (!RAIZ.nuvem) {
    return `${topo()}<h1 class="tit-tela">Amigos</h1><p class="sub">Ligue a sua família à nuvem para usar em vários celulares e acompanhar os amigos.</p>
    <section class="bloco"><div class="bloco-tit"><span>Primeiro celular da casa</span></div>
      <label class="rot" for="fam-nome">Nome da família</label><input id="fam-nome" class="campo" placeholder="Ex.: Família Costa" maxlength="30">
      <button class="btn grande ouro" data-acao="criar-familia" style="margin-top:12px">Criar família</button></section>
    <section class="bloco"><div class="bloco-tit"><span>Já criou em outro celular?</span></div>
      <label class="rot" for="convite">Convite da família</label><input id="convite" class="campo" placeholder="ex.: a1b2c3-d4e5f6" autocapitalize="off">
      <button class="btn grande" data-acao="entrar-familia" style="margin-top:12px">Entrar na família</button>
      <p class="dica">O convite aparece no celular que criou a família, nesta mesma tela.</p></section>`;
  }
  const n = RAIZ.nuvem;
  const st = { sincronizando: 'Sincronizando…', ok: `Sincronizado ${SYNC.em ? SYNC.em.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : ''}`, erro: `Erro: ${esc(SYNC.erro || '')}`, pronto: 'Pronto' }[SYNC.status] || '';
  const familias = {};
  for (const a of AMIGOS) (familias[a.familia_id] ||= { nome: a.familia, membros: [] }).membros.push(a);
  return `${topo()}<h1 class="tit-tela">Amigos</h1>
  <p class="sub sync ${SYNC.status}">${ico(SYNC.status === 'erro' ? 'x' : 'circle-check')} ${esc(n.familiaNome)} · ${st} <button class="mini" data-acao="sync">Sincronizar</button></p>
  ${ranking(p)}
  <section class="bloco"><div class="bloco-tit"><span>Adicionar amigo</span></div>
    <div class="codigo"><small>Seu código de amigo</small><b>${esc(n.codigoAmigo)}</b><button class="btn sec" data-acao="compartilhar">${ico('upload')} Enviar</button></div>
    <label class="rot" for="cod-amigo">Código do amigo</label>
    <div class="linha-btns"><input id="cod-amigo" class="campo" placeholder="ABC123" maxlength="6" autocapitalize="characters"><button class="btn ouro" data-acao="add-amigo">Adicionar</button></div></section>
  ${Object.keys(familias).length ? `<section class="bloco"><div class="bloco-tit"><span>Famílias amigas</span></div>
    ${Object.entries(familias).map(([fid, f]) => `<div class="fam-amiga"><div><b>${esc(f.nome)}</b><small>${f.membros.map((m) => esc(m.nome)).join(', ')}</small></div><button class="mini" data-acao="rem-amigo" data-f="${fid}" data-n="${esc(f.nome)}">Remover</button></div>`).join('')}</section>` : ''}
  <section class="bloco"><div class="bloco-tit"><span>Outros celulares da casa</span></div>
    <p class="dica">No outro celular, abra o app, vá em Amigos → "Entrar na família" e use o convite. Ele é secreto: dá acesso às anotações da família.</p>
    <div class="codigo secreto"><small>Convite</small><b id="convite-val" data-v="${esc(n.convite)}">••••••-••••••</b><button class="btn sec" data-acao="ver-convite">Mostrar</button></div></section>`;
}

function linhaRanking(pos, a, eu) {
  return `<div class="rank ${eu ? 'eu' : ''}"><span class="pos ${pos <= 3 ? 'p' + pos : ''}">${pos}</span>${avatarHTML(a.avatar, J.itensAte(J.nivel(a.xp).n), 34)}
    <div><b>${esc(a.nome)}</b><small>${a.onde}</small></div><span class="rank-xp">${a.xpSemana} XP</span></div>`;
}
function ondeEsta(sessaoId) {
  if (!sessaoId || sessaoId === 'fim') return 'Era concluída';
  const s = J.sessaoPorId(sessaoId); return s ? `Em ${J.refSessao(s)}` : '';
}
function rankingLocal(p) {
  const lista = perfis().map((o) => ({ id: o.id, nome: o.nome, avatar: o.avatar, xp: o.xp, xpSemana: resumo(o).xpSemana, onde: ondeEsta(resumo(o).sessaoAtual) }))
    .sort((a, b) => b.xpSemana - a.xpSemana);
  if (lista.length < 2) return '';
  return `<section class="bloco"><div class="bloco-tit"><span>Ranking da semana · neste celular</span></div>${lista.map((a, i) => linhaRanking(i + 1, a, a.id === p.id)).join('')}</section>`;
}
function ranking(p) {
  const semana = J.semanaAtual(p).dias[0];
  const lista = [
    ...perfis().map((o) => ({ id: o.id, nome: o.nome, avatar: o.avatar, xp: o.xp, xpSemana: resumo(o).xpSemana, onde: ondeEsta(resumo(o).sessaoAtual) })),
    ...AMIGOS.map((a) => ({ id: a.perfil_id, nome: a.nome, avatar: a.avatar, xp: a.xp, xpSemana: a.semana === semana ? a.xp_semana : 0, onde: `${esc(a.familia)} · ${ondeEsta(a.sessao_atual)}` })),
  ].sort((a, b) => b.xpSemana - a.xpSemana);
  return `<section class="bloco"><div class="bloco-tit"><span>Ranking da semana</span><span>zera na segunda</span></div>${lista.map((a, i) => linhaRanking(i + 1, a, a.id === p.id)).join('')}</section>`;
}

function telaLivro(id) {
  const l = LIVROS[id]; const it = J.INTRODUCOES[id];
  if (!it) return telaJornada();
  const cap = parseInt(it.chave.split(' ')[1]);
  return `<header class="cab-sessao" style="--c:${COR_ERA[l.era]}"><a class="voltar" href="#/jornada">${ico('chevron-left')}</a><div><small>Introdução ao livro</small><h2>${esc(l.nome)}</h2></div></header>
  <section class="folha intro">
    <div class="intro-grid">
      <div><div class="rot">Autor</div><p>${esc(it.autor)}</p></div>
      <div><div class="rot">Data</div><p>${esc(it.data)}</p></div>
    </div>
    <div class="rot">Cenário</div><p>${esc(it.cenario)}</p>
    <div class="rot">Tema</div><p>${esc(it.tema)}</p>
    <div class="rot">Texto-chave</div><p>${linkNAA(l, cap) ? `<a class="link" href="${linkNAA(l, cap)}" target="_blank" rel="noopener">${esc(it.chave)} ${ico('external-link')}</a>` : esc(it.chave)}</p>
    <div class="rot">Estrutura</div><p>${esc(it.estrutura)}</p>
    <div class="rot">Esboço</div>
    <div class="esboco">${it.esboco.map(([c, t]) => `<div><b>${esc(c)}</b><span>${esc(t)}</span></div>`).join('')}</div>
  </section>
`;
}

function telaCartas(aba = 'pessoas') {
  const p = P();
  const eventos = DESAFIOS.filter((d) => J.progressoDesafio(p, d).completo);
  const abas = `<div class="seg abas-topo"><a class="${aba === 'pessoas' ? 'on' : ''}" href="#/cartas">${ico('layers')} Pessoas</a><a class="${aba === 'selos' ? 'on' : ''}" href="#/selos">${ico('award')} Selos</a>${eventos.length ? `<a class="${aba === 'eventos' ? 'on' : ''}" href="#/eventos">${ico('trophy')} Eventos</a>` : ''}</div>`;
  if (aba === 'eventos' && eventos.length) {
    const fim = (d) => Object.values(p.desafios[d.id]).map((x) => x.data).sort().pop();
    return `${topo()}<h1 class="tit-tela">Álbum</h1>${abas}<p class="sub">Cada desafio completado abre aqui a sua página, com o selo daquele evento.</p>
    ${eventos.sort((a, b) => fim(b).localeCompare(fim(a))).map((d) => `<a class="evento ${d.tema ? `t-${d.tema}` : ''}" href="#/selo/${d.selo.id}" style="--c:${d.cor}">
      ${d.tema === 'natal' ? bannerNatal(190) : ''}<span class="ev-selo">${d.selo.arte ? arteEspecial(d.selo) : (SELOS_COM_IMAGEM.has(d.selo.id) ? `<span class="selo-disco com-img"><img class="selo-img" src="img/selos/${d.selo.id}.webp" alt=""></span>` : `<span class="selo-disco">${ico(d.selo.icone)}</span>`)}</span>
      <span class="ev-txt"><small>${esc(d.tipo)} · concluído em ${fmtData(fim(d))}</small><b>${esc(d.nome)}</b><em>${d.sessoes.length} de ${d.sessoes.length} dias · Selo ${esc(d.selo.nome)}</em></span></a>`).join('')}`;
  }
  if (aba === 'selos') {
    const lib = J.selosLiberados(p);
    return `${topo()}<h1 class="tit-tela">Álbum</h1>${abas}<p class="sub">${lib.size} de ${Object.keys(J.SELOS).length} Selos da Palavra · palavras e objetos que marcam a história</p>
    <div class="grade-selos">${Object.keys(J.SELOS).map((id) => selo(id, { aberta: lib.has(id) })).join('')}</div>`;
  }
  const lib = J.personagensLiberados(p);
  const ordem = [...new Set(J.SESSOES.flatMap((s) => s.personagens))];
  const porRar = Object.keys(RARIDADE).map((r) => [r, ordem.filter((id) => J.CARTAS[id][1] === r && lib.has(id)).length, ordem.filter((id) => J.CARTAS[id][1] === r).length]);
  return `${topo()}<h1 class="tit-tela">Álbum</h1>${abas}<p class="sub">${lib.size} de ${ordem.length} cartas nesta era</p>
  <div class="raridades">${porRar.map(([r, a, t]) => `<span class="r-${r}"><i></i>${RARIDADE[r].nome} ${a}/${t}</span>`).join('')}</div>
  <div class="grade-cartas">${ordem.map((id) => carta(id, { aberta: lib.has(id) })).join('')}</div>`;
}

function telaSelo(id) {
  if (J.SELOS_ESPECIAIS[id]) {
    const e = J.SELOS_ESPECIAIS[id]; if (!J.selosEspeciaisDe(P()).includes(id)) return telaCartas('eventos');
    return `<header class="topo-sec"><a class="voltar" href="#/eventos">${ico('chevron-left')}</a><h2>Selo especial</h2></header>
    <div class="selo-grande-wrap">${selo(id, { grande: true })}</div>
    <section class="folha"><div class="rot">Sobre este selo</div><p>${esc(e.texto)}</p><div class="rot">Onde conferir</div><p class="refs">${esc(e.ref)}</p></section>
    <a class="btn sec" href="#/desafio/${id}">Ver o desafio</a>`;
  }
  const s = J.SELOS[id];
  if (!s || !J.selosLiberados(P()).has(id)) return telaCartas('selos');
  const ses = J.sessaoPorId(s.sessao);
  return `<header class="topo-sec"><a class="voltar" href="#/selos">${ico('chevron-left')}</a><h2>Selo da Palavra</h2></header>
  <div class="selo-grande-wrap">${selo(id, { grande: true })}</div>
  <section class="folha"><div class="rot">O que o texto diz</div><p>${esc(s.texto)}</p><div class="rot">Onde conferir</div><p class="refs">${esc(s.ref)}</p></section>
  <a class="btn sec" href="#/sessao/${ses.id}">Ver a sessão: ${esc(J.refSessao(ses))}</a>`;
}

function telaCarta(id) {
  const c = J.PERSONAGENS[id]; const p = P();
  if (!c || !J.personagensLiberados(p).has(id)) return telaCartas();
  const minhas = J.concluidas(p).filter((s) => s.personagens.includes(id));
  return `<header class="topo-sec"><a class="voltar" href="#/cartas">${ico('chevron-left')}</a><h2>Carta</h2></header>
  <div class="carta-grande">${carta(id)}</div>
  <section class="folha"><div class="rot">Quem foi</div><p>${esc(c.quem)}</p>
    <div class="rot">O que fez</div><p>${esc(c.vida)}</p>
    <div class="rot">Onde conferir</div><p class="refs">${esc(c.refs)}</p></section>
  ${minhas.length ? `<section class="bloco"><div class="rot">Minhas anotações</div>${minhas.map((s) => `<a class="linha-link" href="#/sessao/${s.id}"><span>${esc(p.sessoes[s.id].entendi)}</span><small>${esc(J.refSessao(s))}</small></a>`).join('')}</section>` : ''}`;
}

function telaLinha() {
  const lib = J.marcosLiberados(P());
  return `${topo()}<h1 class="tit-tela">Jornada</h1>${abasJornada('linha')}<p class="sub">A linha do tempo se preenche conforme você avança.</p>
  <div class="linha">${ERAS.map((era) => {
    const marcos = J.MARCOS.filter((m) => m.era === era.id);
    return `${era.id === 'jesus' ? `<div class="divisor-ac linha-div"><span>a.C.</span><b>${ico('star')} Nascimento de Jesus</b><span>d.C.</span></div>` : ''}<div class="linha-era" style="--c:${COR_ERA[era.id]}"><div class="linha-era-nome">${esc(era.nome)}<em>${esc(era.quando)}</em></div>
      ${marcos.length ? marcos.map((m) => lib.has(m.id)
        ? `<div class="marco on"><b>${esc(m.titulo)}</b><small>${esc(m.quando)}</small></div>`
        : '<div class="marco"><span class="oculto"></span></div>').join('') : '<div class="marco"><small>em breve</small></div>'}
    </div>`;
  }).join('')}</div>`;
}

const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const dataCurta = (d) => { if (!d) return ''; const [, m, dd] = String(d).split('-'); return `${+dd} ${MESES[m - 1]}`; };
const MEDALHA_NOME = { bronze: 'Medalha de bronze', prata: 'Medalha de prata', ouro: 'Medalha de ouro' };
function medalhaEra(eraId, cls = '') {
  return `<span class="selo-disco era-em so-ico ${cls}">${ico(J.ICONE_ERA[eraId] || 'landmark')}</span>`;
}
// Estante: largura pelo nº de capítulos, altura e cor variando por livro; prateleiras de ~290px.
const LOMBADA = { ct: 'Cânticos', '1ts': '1 Tess.', '2ts': '2 Tess.' };
const CORES_LIVRO = ['#7a2e2a', '#2f5a45', '#2d4a78', '#9a6a22', '#5b3a6e', '#25616a', '#8a3b1f', '#4a5a2a', '#6b2f4a', '#3b4f63'];
const livrosNaEstante = () => J.CONQUISTAS.filter((c) => c.grupo === 'livro' && ERAS.find((x) => x.id === LIVROS[c.livro].era).conteudo);
function prateleiras(p, { novo = null, larguraMax = 286 } = {}) {
  const tem = (c) => p.conquistas[c.id];
  const linhas = []; let linha = [], larg = 0;
  // Na estante só entra livro concluído (sem livro pela metade).
  for (const c of livrosNaEstante().filter((x) => tem(x) || x.livro === novo)) {
    const L = LIVROS[c.livro];
    const w = Math.max(16, Math.min(46, Math.round(14 + L.caps * 0.36))); const h = 92 + ((L.n * 37) % 26);
    const nome = LOMBADA[L.id] || L.nome;
    const html = `<div class="livro on ${c.livro === novo ? 'entra' : ''} ${nome.length > 11 ? 'longo' : ''}" style="--w:${w}px;--h:${h}px;--c:${CORES_LIVRO[L.n % CORES_LIVRO.length]}" title="${esc(c.nome)}"><span>${esc(nome)}</span>${ico('check')}</div>`;
    if (larg + w + 3 > larguraMax && linha.length) { linhas.push(linha); linha = []; larg = 0; }
    linha.push({ html, novo: c.livro === novo }); larg += w + 3;
  }
  if (linha.length) linhas.push(linha);
  return linhas;
}
const prateleiraHTML = (l) => `<div class="prateleira">${l.map((x) => x.html).join('')}</div>`;

function blocoConquistas(p) {
  const tem = (c) => p.conquistas[c.id];
  const medalha = (c) => `<div class="conq ${c.nivel} ${tem(c) ? 'on' : ''}"><span class="med">${ico(c.icone)}</span><b>${esc(c.nome)}</b><small>${esc(c.desc)}</small>${tem(c) ? `<em>${dataCurta(tem(c))}</em>` : ''}</div>`;
  const grupo = (g, nome) => { const l = J.CONQUISTAS.filter((c) => c.grupo === g); return `<div class="conq-grupo"><div class="rot">${nome} <span>${l.filter(tem).length}/${l.length}</span></div><div class="conquistas">${l.map(medalha).join('')}</div></div>`; };
  const eras = J.CONQUISTAS.filter((c) => c.grupo === 'era');
  const era = (c) => `<div class="era-c ${tem(c) ? 'on' : ''}">${medalhaEra(c.era)}<b>${esc(ERAS.find((x) => x.id === c.era).nome)}</b>${tem(c) ? `<em>${dataCurta(tem(c))}</em>` : ''}</div>`;
  const livros = livrosNaEstante();
  const todas = [...J.CONQUISTAS.filter((c) => c.nivel), ...eras, ...livros];
  return `<section class="bloco"><div class="bloco-tit"><span>Conquistas</span><span>${todas.filter(tem).length}/${todas.length}</span></div>
    <div class="conq-grupo"><div class="rot">Grandes marcos: as eras <span>${eras.filter(tem).length}/${eras.length}</span></div><div class="eras-c">${eras.map(era).join('')}</div></div>
    <div class="conq-grupo"><div class="rot">Estante: livros concluídos <span>${livros.filter(tem).length}/${livros.length}</span></div><div class="estante">${(prateleiras(p).length ? prateleiras(p) : [[]]).map(prateleiraHTML).join('')}</div><p class="dica">${livros.some(tem) ? 'Cada livro concluído ganha seu lugar na estante.' : 'Conclua um livro e ele ganha seu lugar na estante.'}</p></div>
    ${grupo('ritmo', 'Ritmo')}${grupo('colecao', 'Coleção')}${grupo('pratica', 'Prática')}</section>`;
}

// Animações de conquista: livro entrando na estante, medalha da era, medalhas comuns. Uma tela de cada vez.
function animarConquistas(lista, depois) {
  const p = P();
  const livros = lista.filter((c) => c.grupo === 'livro'); const eras = lista.filter((c) => c.grupo === 'era'); const meds = lista.filter((c) => c.nivel);
  const telas = [
    ...livros.map((c) => [35, () => {
      const linha = prateleiras(p, { novo: c.livro }).find((l) => l.some((x) => x.novo));
      return `<div class="anim-conq anim-livro"><small>Livro concluído</small><h2>${esc(LIVROS[c.livro].nome)}</h2>
        <div class="estante grande">${prateleiraHTML(linha)}</div><p>Mais um livro na sua estante.</p><button class="btn grande" data-fechar>Continuar</button></div>`;
    }]),
    ...eras.map((c) => [90, () => { const e = ERAS.find((x) => x.id === c.era);
      return `<div class="anim-conq anim-era"><div class="raios"></div><small>Grande marco</small>
        <div class="era-c on">${medalhaEra(c.era, 'gira')}</div><h2>${esc(c.nome)}</h2><p>Você concluiu a era <b>${esc(e.nome)}</b>.</p><button class="btn grande ouro" data-fechar>Continuar</button></div>`; }]),
    ...(meds.length ? [[35, () => `<div class="anim-conq anim-med"><small>${meds.length > 1 ? 'Novas medalhas' : 'Nova medalha'}</small>
      <div class="meds">${meds.map((c, i) => `<div class="conq ${c.nivel} on cai" style="animation-delay:${0.15 + i * 0.35}s"><span class="med">${ico(c.icone)}</span><b>${esc(c.nome)}</b><small>${MEDALHA_NOME[c.nivel]}</small></div>`).join('')}</div>
      <button class="btn grande" data-fechar>Continuar</button></div>`]] : []),
  ];
  const proxima = (i) => {
    if (i >= telas.length) { depois?.(); return; }
    const [nConfete, html] = telas[i];
    overlay(html(), () => proxima(i + 1)); setTimeout(() => confete(nConfete), 900);
  };
  proxima(0);
}
if (CANAL_TESTE) window.__animConq = (ids) => animarConquistas(ids.map((id) => J.CONQUISTAS.find((c) => c.id === id)));

function telaPerfil() {
  const p = P(); const nv = J.nivel(p.xp);
  const aplic = Object.values(p.sessoes).filter((s) => s.revisao).length;
  return `${topo()}
  <section class="perfil-hero"><div>${avatarHTML(p.avatar, J.itensAte(nv.n), 120)}</div>
    <div><h2>${esc(p.nome)}</h2><small>${nomeEstagio(p)} · ${p.tipo === 'crianca' ? 'Criança' : 'Adulto'}</small>${barraXP(p)}
    <a class="link" href="#/editar/${p.id}">Editar viajante</a></div></section>
  <div class="stats">
    <div><b>${J.concluidas(p).length}</b><small>sessões</small></div>
    <div><b>${J.personagensLiberados(p).size + J.selosLiberados(p).size}</b><small>cartas e selos</small></div>
    <div><b>${aplic}</b><small>aplicações vividas</small></div>
    <div><b>${p.log.filter((l) => l.tipo === 'acerto').length}</b><small>acertos</small></div>
  </div>
  <section class="bloco"><div class="bloco-tit"><span>Família</span></div>
    <div class="familia">${perfis().map((o) => `<button class="membro ${o.id === p.id ? 'on' : ''}" data-acao="trocar" data-p="${o.id}">${avatarHTML(o.avatar, J.itensAte(J.nivel(o.xp).n), 46)}<b>${esc(o.nome)}</b><small>Nível ${J.nivel(o.xp).n}</small></button>`).join('')}
      <a class="membro novo" href="#/novo-perfil">${ico('plus')}<b>Adicionar</b><small>viajante</small></a></div></section>
  ${blocoConquistas(p)}
  ${cartaoInstalar(false)}
  <section class="bloco"><div class="bloco-tit"><span>Backup</span></div>
    <p class="dica">Os dados de todos os viajantes ficam neste aparelho. Exporte de vez em quando e guarde o arquivo, ou use para passar o progresso para outro celular.</p>
    <div class="linha-btns"><button class="btn sec" data-acao="exportar">${ico('download')} Exportar</button>
    <label class="btn sec">${ico('upload')} Importar<input type="file" accept="application/json" id="importar" hidden></label></div></section>
  <p class="rodape">Texto bíblico: NAA © Sociedade Bíblica do Brasil, aberto no site oficial. Conteúdo de estudo próprio, com referências para conferir. Ícones: Lucide (ISC).<br>Versão ${VERSAO_APP}${CANAL_TESTE ? ' · canal de teste' : ` · <a href="https://orafaelcostaoficial.github.io/a-jornada-teste/#/hoje">abrir o canal de teste</a>`}</p>`;
}

// ─── Rascunho da sessão ───
const RASC = {};
function rascunho(id) { return (RASC[id] ||= { ...(P().sessoes[id] || {}), li: !!P().sessoes[id], juntos: [] }); }
function capturar(id) {
  const r = rascunho(id);
  for (const k of ['entendi', 'estudo', 'aplicacao']) { const el = document.getElementById(k); if (el) r[k] = el.value; }
  const li = document.getElementById('li'); if (li) r.li = li.checked;
  return r;
}

// ─── Roteamento ───
let passoAtual = {};
let ultimoResultado = null;
const NAV = { hoje: 'hoje', jornada: 'jornada', sessao: 'jornada', livro: 'jornada', cartas: 'cartas', carta: 'cartas', selos: 'cartas', eventos: 'cartas', selo: 'cartas', linha: 'jornada', amigos: 'amigos', perfil: 'perfil', editar: 'perfil', 'novo-perfil': 'perfil', revisao: 'hoje', aplicacao: 'hoje', resultado: 'hoje', desafio: 'hoje', dsessao: 'hoje' };

function render() {
  const [, rota = 'hoje', arg] = (location.hash || '#/hoje').split('/');
  let html;
  if (!P() && rota !== 'novo-perfil') html = telaBoasVindas();
  else switch (rota) {
    case 'novo-perfil': html = telaPerfilForm(null); break;
    case 'editar': html = telaPerfilForm(arg); break;
    case 'sessao': html = telaSessao(arg, passoAtual[arg] || 0); break;
    case 'desafio': html = telaDesafio(arg); break;
    case 'dsessao': html = telaDSessao(arg, passoAtual[arg] || 0); break;
    case 'resultado': html = ultimoResultado ? telaResultado(ultimoResultado) : telaHoje(); break;
    case 'aplicacao': html = telaAplicacao(arg); break;
    case 'revisao': html = telaRevisao(); break;
    case 'jornada': html = telaJornada(); break;
    case 'livro': html = telaLivro(arg); break;
    case 'cartas': html = telaCartas(); break;
    case 'selos': html = telaCartas('selos'); break;
    case 'eventos': html = telaCartas('eventos'); break;
    case 'selo': html = telaSelo(arg); break;
    case 'carta': html = telaCarta(arg); break;
    case 'linha': html = telaLinha(); break;
    case 'amigos': html = telaAmigos(); break;
    case 'perfil': html = telaPerfil(); break;
    default: html = telaHoje();
  }
  $app.innerHTML = html;
  const dTema = ['desafio', 'dsessao'].includes(rota) ? J.desafioPorId(String(arg).split('.')[0])?.tema : null;
  document.body.classList.toggle('tema-natal', dTema === 'natal');
  document.body.classList.toggle('sem-nav', !P() || ['novo-perfil', 'editar', 'sessao', 'dsessao', 'resultado', 'revisao', 'aplicacao'].includes(rota));
  document.querySelectorAll('nav a').forEach((a) => a.classList.toggle('on', a.dataset.r === NAV[rota]));
  if (rota === 'jornada') { desenharCaminhos(); document.querySelector('.no.atual')?.scrollIntoView({ block: 'center' }); }
  else window.scrollTo(0, 0);
  const leitor = document.getElementById('leitor');
  if (leitor) carregarLeitor(leitor);
  if (rota === 'dsessao') carregarTrechos();
}

async function carregarLeitor(el) {
  const livro = LIVROS[el.dataset.livro]; const cap = el.dataset.cap;
  try {
    const t = await textoLivro(livro);
    const versos = t[cap] || {};
    el.querySelector('.versos').innerHTML = Object.entries(versos).map(([v, txt]) => `<span class="v"><sup>${v}</sup>${esc(txt)} </span>`).join('');
  } catch {
    el.querySelector('.versos').innerHTML = '<p class="dica">Não consegui carregar o texto agora. Use o botão da NAA abaixo.</p>';
  }
}

window.addEventListener('hashchange', () => {
  if (!location.hash.startsWith('#/sessao') && !location.hash.startsWith('#/dsessao')) { passoAtual = {}; Object.keys(EDITANDO).forEach((k) => delete EDITANDO[k]); }
  if (!location.hash.startsWith('#/novo-perfil') && !location.hash.startsWith('#/editar')) FORM = null;
  render();
});

$app.addEventListener('input', (ev) => {
  if (ev.target.id === 'nome' && FORM) { FORM.nome = ev.target.value; return; }
  if (!location.hash.startsWith('#/sessao') && !location.hash.startsWith('#/dsessao')) return;
  const r = capturar(location.hash.split('/')[2]);
  const b1 = document.getElementById('btn-li'); if (b1) b1.disabled = !r.li;
  const b2 = document.getElementById('btn-entendi'); if (b2) b2.disabled = !r.entendi?.trim();
});

$app.addEventListener('change', async (ev) => {
  if (ev.target.id === 'li') { const r = capturar(location.hash.split('/')[2]); document.getElementById('btn-li').disabled = !r.li; }
  if (ev.target.id === 'importar' && ev.target.files[0]) {
    try {
      const nova = store.importar(await ev.target.files[0].text());
      if (!confirm('Substituir os dados deste aparelho pelo backup?')) return;
      RAIZ = nova; salvar(); toast('Backup restaurado'); render();
    } catch (e) { toast(esc(e.message)); }
  }
});

document.body.addEventListener('click', (ev) => {
  const b = ev.target.closest('[data-acao]'); if (!b) return;
  const acao = b.dataset.acao;
  const id = b.dataset.id || location.hash.split('/')[2];

  if (acao === 'ver-xp' && !document.querySelector('.overlay')) { abrirXP(); return; }
  if (acao === 'f-tipo') { FORM.tipo = b.dataset.v; render(); }
  if (acao === 'f-av') { FORM.avatar[b.dataset.k] = Number(b.dataset.v); render(); }
  if (acao === 'f-personagem') { FORM.nome = document.getElementById('nome')?.value ?? FORM.nome; FORM.avatar = { personagem: b.dataset.v }; render(); }
  if (acao === 'escolher-personagem') folegoDeVida(P().id);
  if (acao === 'f-salvar') {
    const nome = (document.getElementById('nome').value || '').trim();
    if (!nome) { toast('Dê um nome ao viajante'); return; }
    const editado = new Date().toISOString();
    if (b.dataset.id) Object.assign(RAIZ.perfis[b.dataset.id], { nome, tipo: FORM.tipo, avatar: FORM.avatar, editado });
    else { const np = { ...store.novoPerfil(nome, FORM.tipo, FORM.avatar), editado }; RAIZ.perfis[np.id] = np; RAIZ.ativo = np.id; }
    salvar(); FORM = null; ir(b.dataset.id ? '#/perfil' : '#/hoje');
  }
  if (acao === 'f-remover') {
    const alvo = RAIZ.perfis[b.dataset.id];
    confirmar(`Remover <b>${esc(alvo.nome)}</b> e todo o progresso dele${RAIZ.nuvem ? ' em todos os celulares da família' : ''}? Não dá para desfazer.`, 'Remover', () => {
      delete RAIZ.perfis[alvo.id]; RAIZ.removidos = [...(RAIZ.removidos || []), alvo.id];
      if (RAIZ.ativo === alvo.id) RAIZ.ativo = Object.keys(RAIZ.perfis)[0];
      salvar(); FORM = null; ir('#/perfil');
    });
  }
  if (acao === 'instalar') instalar();
  if (acao === 'fechar-instalar') { sessionStorage.setItem('ajornada-instalar-fechado', '1'); render(); }
  if (acao === 'cap') { const r = rascunho(id); r.cap = Number(b.dataset.c); render(); }
  if (acao === 'criar-familia' || acao === 'entrar-familia') {
    b.disabled = true;
    const fn = acao === 'criar-familia' ? N.criarFamilia(document.getElementById('fam-nome').value) : N.entrarFamilia(document.getElementById('convite').value);
    fn.then((info) => { RAIZ.nuvem = info; store.salvar(RAIZ); toast(acao === 'criar-familia' ? 'Família criada' : 'Você entrou na família'); return sincronizar(); })
      .catch((e) => { toast(esc(e.message)); b.disabled = false; }).finally(render);
  }
  if (acao === 'sync') sincronizar().then(render);
  if (acao === 'add-amigo') {
    const cod = document.getElementById('cod-amigo').value; if (!cod.trim()) return;
    N.adicionarAmigo(cod).then((nome) => { toast(`Agora vocês são amigos: ${esc(nome)}`); return sincronizar(); }).catch((e) => toast(esc(e.message))).finally(render);
  }
  if (acao === 'rem-amigo') confirmar(`Deixar de ser amigo de <b>${esc(b.dataset.n)}</b>?`, 'Remover', () => N.removerAmigo(b.dataset.f).then(sincronizar).catch((e) => toast(esc(e.message))).finally(render));
  if (acao === 'ver-convite') { const el = document.getElementById('convite-val'); el.textContent = el.dataset.v; }
  if (acao === 'compartilhar') {
    const txt = `Vamos estudar a Bíblia juntos n'A Jornada! Meu código de amigo: ${RAIZ.nuvem.codigoAmigo}
${location.origin}${location.pathname}`;
    if (navigator.share) navigator.share({ text: txt }).catch(() => {}); else navigator.clipboard?.writeText(txt).then(() => toast('Copiado'));
  }
  if (acao === 'trocar') { RAIZ.ativo = b.dataset.p; salvar(); toast(`Agora: ${esc(P().nome)}`); ir('#/hoje'); render(); }

  if (acao === 'passo') { capturar(id); passoAtual[id] = Number(b.dataset.passo); render(); }
  if (acao === 'junto') { const r = rascunho(id); const pid = b.dataset.p; r.juntos = r.juntos.includes(pid) ? r.juntos.filter((x) => x !== pid) : [...r.juntos, pid]; b.classList.toggle('on'); }
  if (acao === 'editar') { EDITANDO[id] = true; passoAtual[id] = 2; render(); }

  if (acao === 'concluir') {
    const r = capturar(id); const s = J.sessaoPorId(id); const p = P();
    const dados = { entendi: r.entendi?.trim() || '', estudo: r.estudo?.trim() || '', aplicacao: r.aplicacao?.trim() || '' };
    if (J.concluida(p, id)) { Object.assign(p.sessoes[id], dados); salvar(); delete RASC[id]; delete EDITANDO[id]; passoAtual = {}; toast('Anotações atualizadas'); render(); return; }
    ultimoResultado = J.concluirSessao(p, s, dados);
    const juntos = [];
    for (const pid of r.juntos || []) {
      const o = RAIZ.perfis[pid];
      if (o && !J.concluida(o, id)) { J.concluirSessao(o, s, { entendi: dados.entendi, aplicacao: dados.aplicacao, familia: true }); juntos.push(o.nome); }
    }
    ultimoResultado.juntos = juntos;
    salvar(); delete RASC[id]; passoAtual = {};
    ir('#/resultado');
    confete(40);
    const semPersonagem = !p.avatar?.personagem;
    if (semPersonagem) setTimeout(() => folegoDeVida(p.id, () => ultimoResultado.subiu && subiuNivel(ultimoResultado.subiu)), 900);
    else if (ultimoResultado.subiu) setTimeout(() => subiuNivel(ultimoResultado.subiu), 700);
  }
  if (acao === 'dconcluir') {
    const r = capturar(id); const [did, si] = id.split('.'); const d = J.desafioPorId(did); const i = Number(si); const p = P();
    if (!d || p.desafios?.[did]?.[i] || !r.entendi?.trim()) return;
    const dados = { entendi: r.entendi.trim(), aplicacao: r.aplicacao?.trim() || '' };
    ultimoResultado = J.concluirDesafio(p, d, i, dados);
    const juntos = [];
    for (const pid of r.juntos || []) { const o = RAIZ.perfis[pid]; if (o && !o.desafios?.[did]?.[i]) { J.concluirDesafio(o, d, i, { ...dados, familia: true }); juntos.push(o.nome); } }
    ultimoResultado.juntos = juntos;
    salvar(); delete RASC[id]; passoAtual = {};
    ir('#/resultado'); confete(ultimoResultado.novosS.length ? 90 : 40);
    if (ultimoResultado.subiu) setTimeout(() => subiuNivel(ultimoResultado.subiu), 700);
  }
  if (acao === 'ver-conquistas' && !ultimoResultado.conqVistas && !document.querySelector('.overlay')) animarConquistas(ultimoResultado.novasC, () => { ultimoResultado.conqVistas = true; render(); });
  if (acao === 'abrir-cartas' && !ultimoResultado.abertas && !document.querySelector('.overlay')) abrirCartas([...ultimoResultado.novosP, ...(ultimoResultado.novosS || []).map((x) => 'selo:' + x)]);

  if (acao === 'revisar') {
    const t = document.getElementById('como').value.trim();
    if (!t) { toast('Escreva como foi, mesmo que em uma frase.'); return; }
    const antes = J.nivel(P().xp).n;
    J.revisarAplicacao(P(), J.sessaoPorId(id), t); salvar();
    toast(`+${J.XP.revisao} XP · aplicação registrada`); ir('#/hoje');
    const depois = J.nivel(P().xp).n; if (depois > antes) setTimeout(() => subiuNivel(depois), 500);
  }

  if (acao === 'responder') {
    const item = filaQuiz[0]; const i = Number(b.dataset.i); const certo = i === item.q.a;
    const antes = J.nivel(P().xp).n;
    J.responderQuiz(P(), item.id, certo); J.verificarConquistas(P()); salvar();
    document.querySelectorAll('.opcao').forEach((o, k) => { o.disabled = true; if (k === item.q.a) o.classList.add('certa'); else if (k === i) o.classList.add('errada'); });
    document.getElementById('feedback').innerHTML = `<p class="${certo ? 'ok' : 'erro'}">${certo ? `${ico('circle-check')} Certo! +${J.XP.acerto} XP` : `${ico('x')} Não foi dessa vez — ela volta amanhã.`} <small>${esc(item.q.ref)}</small></p>
      <button class="btn grande" data-acao="proxima-q">${filaQuiz.length > 1 ? 'Próxima' : 'Terminar'}</button>`;
    if (certo) confete(15);
    const depois = J.nivel(P().xp).n; if (depois > antes) setTimeout(() => subiuNivel(depois), 600);
  }
  if (acao === 'proxima-q') { filaQuiz.shift(); if (!filaQuiz.length) { toast('Revisão concluída'); ir('#/hoje'); } else render(); }

  if (acao === 'exportar') {
    const blob = new Blob([store.exportar(RAIZ)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = `a-jornada-backup-${store.hoje()}.json`; a.click(); URL.revokeObjectURL(a.href);
  }
});

document.querySelector('nav').innerHTML = [
  ['hoje', 'house', 'Hoje'], ['jornada', 'map', 'Jornada'], ['cartas', 'layers', 'Álbum'], ['amigos', 'users-round', 'Amigos'], ['perfil', 'user-round', 'Perfil'],
].map(([r, i, t]) => `<a href="#/${r}" data-r="${r}">${ico(i)}<span>${t}</span></a>`).join('');

render();
if (RAIZ.nuvem) agendarSync(200);
if ('serviceWorker' in navigator) {
  const tinhaControle = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.register('./sw.js').then((reg) => {
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') reg.update().catch(() => {}); });
  }).catch(() => {});
  // Versão nova instalada: recarrega uma vez (fora de uma sessão em andamento) para não ficar com código velho.
  let recarregou = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!tinhaControle || recarregou) return;
    const recarregar = () => { if (!recarregou) { recarregou = true; location.reload(); } };
    if (location.hash.startsWith('#/sessao')) window.addEventListener('hashchange', recarregar, { once: true }); else recarregar();
  });
}
