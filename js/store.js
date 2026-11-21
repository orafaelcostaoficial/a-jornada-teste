// Camada de dados ISOLADA. Hoje: localStorage no aparelho + backup em arquivo.
// Para crescer (login, sincronização), troque só este arquivo mantendo a interface:
// carregar(), salvar(raiz), exportar(raiz), importar(texto).
//
// Raiz: { v: 2, ativo: <idPerfil>, perfis: { [id]: Perfil } }
// Perfil: { id, nome, tipo: 'adulto'|'crianca', avatar: {pele, cabelo, manto}, ...progresso }

import { CANAL_TESTE } from './config.js';

const CHAVE = CANAL_TESTE ? 'ajornada.teste.v2' : 'ajornada.v2';
const CHAVE_V1 = CANAL_TESTE ? '-' : 'jornada.v1';

export function progressoVazio() {
  return {
    criadoEm: hoje(),
    sessoes: {},     // id -> { data, entendi, estudo, aplicacao, criancas, familia, revisao: {data, texto} | null }
    quiz: {},        // qid -> { caixa, proxima, acertos, erros }
    xp: 0,
    log: [],         // { data, tipo, xp, ref }
    conquistas: {},  // id -> data
    cartas: {},      // personagem -> { data, modo: 'quiz' | 'leitura' }
    cartaQuiz: {},   // personagem -> { tentativas, usadas, atual: { q, r }, volta }
    vistas: {},      // cartas já reveladas (animação de abertura)
  };
}

export function novoPerfil(nome, tipo = 'adulto', avatar = {}) {
  const id = 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  return { id, nome, tipo, avatar: { pele: 1, cabelo: 0, manto: 0, ...avatar }, ...progressoVazio() };
}

export function raizVazia() {
  // nuvem: { familiaId, familiaNome, codigoAmigo, convite } quando a família está ligada ao banco.
  // removidos: ids de perfis apagados neste aparelho (para apagar também na nuvem).
  return { v: 2, ativo: null, perfis: {}, nuvem: null, removidos: [] };
}

// Junta duas versões do mesmo perfil (aparelhos diferentes) sem perder progresso.
export function mesclarPerfil(a, b) {
  if (!a) return b; if (!b) return a;
  const novo = (a.editado || '') >= (b.editado || '') ? a : b;
  const r = { ...novo };
  r.sessoes = { ...a.sessoes };
  for (const [id, sb] of Object.entries(b.sessoes || {})) {
    const sa = r.sessoes[id];
    if (!sa) { r.sessoes[id] = sb; continue; }
    const base = sa.data <= sb.data ? sa : sb;
    const outra = base === sa ? sb : sa;
    const m = { ...outra, ...base };
    for (const k of ['entendi', 'estudo', 'aplicacao']) m[k] = base[k] || outra[k] || '';
    m.revisao = sa.revisao || sb.revisao || null;
    r.sessoes[id] = m;
  }
  r.desafios = { ...(a.desafios || {}) };
  for (const [d, sb] of Object.entries(b.desafios || {})) {
    r.desafios[d] = { ...(r.desafios[d] || {}) };
    for (const [i, x] of Object.entries(sb)) if (!r.desafios[d][i] || x.data < r.desafios[d][i].data) r.desafios[d][i] = x;
  }
  r.quiz = { ...a.quiz };
  for (const [k, qb] of Object.entries(b.quiz || {})) {
    const qa = r.quiz[k];
    const peso = (q) => (q.acertos + q.erros) * 1000 + (q.proxima > '' ? 1 : 0);
    if (!qa || peso(qb) > peso(qa) || (peso(qb) === peso(qa) && qb.proxima > qa.proxima)) r.quiz[k] = qb;
  }
  const chave = (l) => `${l.data}|${l.tipo}|${l.ref}|${l.xp}`;
  const vistos = new Set(); r.log = [];
  for (const l of [...(a.log || []), ...(b.log || [])]) { const c = chave(l); if (!vistos.has(c)) { vistos.add(c); r.log.push(l); } }
  r.log.sort((x, y) => (x.data < y.data ? -1 : x.data > y.data ? 1 : 0));
  r.xp = r.log.reduce((t, l) => t + l.xp, 0);
  r.conquistas = { ...b.conquistas, ...a.conquistas };
  if (a.cartas || b.cartas) r.cartas = { ...(b.cartas || {}), ...(a.cartas || {}) };
  r.cartaQuiz = { ...((novo === a ? b : a).cartaQuiz || {}), ...(novo.cartaQuiz || {}) };
  for (const k of Object.keys(r.cartas || {})) delete r.cartaQuiz[k];
  r.vistas = { ...b.vistas, ...a.vistas };
  return r;
}

export function carregar() {
  try {
    const bruto = localStorage.getItem(CHAVE);
    if (bruto) return { ...raizVazia(), ...JSON.parse(bruto) };
    // Migração da v1 (um único usuário) para um perfil.
    const v1 = localStorage.getItem(CHAVE_V1);
    if (v1) {
      const e = JSON.parse(v1);
      const p = { ...novoPerfil('Rafael'), ...e };
      delete p.v;
      return { v: 2, ativo: p.id, perfis: { [p.id]: p } };
    }
  } catch { /* cai no vazio */ }
  return raizVazia();
}

export function salvar(raiz) {
  try { localStorage.setItem(CHAVE, JSON.stringify(raiz)); return true; } catch { return false; }
}

export function exportar(raiz) {
  return JSON.stringify({ app: 'a-jornada', exportadoEm: new Date().toISOString(), raiz }, null, 2);
}

export function importar(texto) {
  const obj = JSON.parse(texto);
  if (obj?.app === 'a-jornada' && obj.raiz?.perfis) return { ...raizVazia(), ...obj.raiz };
  if (obj?.app === 'jornada' && obj.estado?.sessoes) { // backup da v1
    const p = { ...novoPerfil('Rafael'), ...obj.estado }; delete p.v;
    return { v: 2, ativo: p.id, perfis: { [p.id]: p } };
  }
  throw new Error('Arquivo não é um backup d\'A Jornada.');
}

export function hoje(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

export function somarDias(dataISO, dias) {
  const [a, m, d] = dataISO.split('-').map(Number);
  return hoje(new Date(a, m - 1, d + dias));
}

export function diasEntre(a, b) {
  const t = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d).getTime(); };
  return Math.round((t(b) - t(a)) / 86400000);
}
