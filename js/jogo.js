// Regras de progresso e gamificação (sem interface).
import { ERAS, LIVROS } from '../data/plano.js';
import * as E1 from '../data/era-principio.js';
import * as E2 from '../data/era-moises.js';
import * as E3 from '../data/era-juizes.js';
import { DESAFIOS } from '../data/desafios.js';
import { QUIZ_CARTAS as QC1 } from '../data/quiz-cartas-principio.js';
import { QUIZ_CARTAS as QC2 } from '../data/quiz-cartas-moises.js';
import { QUIZ_CARTAS as QC3 } from '../data/quiz-cartas-juizes.js';
import { hoje, somarDias, diasEntre } from './store.js';

// Quando escrever novas eras, importar aqui e somar nas listas.
export const SESSOES = [...E1.SESSOES, ...E2.SESSOES, ...E3.SESSOES];
export const PERSONAGENS = { ...E1.PERSONAGENS, ...E2.PERSONAGENS, ...E3.PERSONAGENS };
export const MARCOS = [...E1.MARCOS.map((m) => ({ ...m, era: 'principio' })), ...E2.MARCOS.map((m) => ({ ...m, era: 'moises' })), ...E3.MARCOS.map((m) => ({ ...m, era: 'juizes' }))];
export const INTRODUCOES = { ...E1.INTRODUCOES, ...E2.INTRODUCOES, ...E3.INTRODUCOES };
export const CARTAS = { ...E1.CARTAS, ...E2.CARTAS, ...E3.CARTAS };
export const CRIANCAS = { ...E1.CRIANCAS, ...E2.CRIANCAS, ...E3.CRIANCAS };
// Atitude concreta para as crianças na Aplicação (sem ela, a Aplicação usa CRIANCAS como antes).
export const CRIANCAS_FAZER = { ...(E1.CRIANCAS_FAZER || {}), ...(E2.CRIANCAS_FAZER || {}), ...(E3.CRIANCAS_FAZER || {}) };
export const SELOS = { ...E1.SELOS, ...E2.SELOS, ...E3.SELOS };
// Banco de perguntas das cartas: { personagem: [{ q, op, a, ref }] }. Ver "Cartas por questionário" abaixo.
export const QUIZ_CARTAS = { ...QC1, ...QC2, ...QC3 };
export const selosDaSessao = (id) => Object.keys(SELOS).filter((k) => SELOS[k].sessao === id);

export const XP = { sessao: 10, aplicacao: 4, revisao: 8, acerto: 3, carta: 5, livro: 40, era: 100, semana: 25 };

// Bônus da semana (segunda a domingo), por dias com sessão concluída.
export const FAIXAS_SEMANA = [
  { dias: 5, xp: 25, nome: 'Meta da semana' },
  { dias: 6, xp: 15, nome: '6 dias na semana' },
  { dias: 7, xp: 30, nome: 'Semana fechada' },
];
// Sequências: semanas seguidas batendo a meta (5+) e semanas fechadas (7/7) seguidas.
export const SEQ = { meta: { porSemana: 10, teto: 50 }, fechada: { porSemana: 20, teto: 80 } };

const chaveFaixa = (seg, dias) => `semana-${seg}-${dias}`;
export const bateuFaixa = (e, seg, dias) => !!e.conquistas[chaveFaixa(seg, dias)] || (dias === 5 && !!e.conquistas[`semana-${seg}`]);

// Quantas semanas seguidas (terminando em `seg`, inclusive) bateram a faixa.
export function sequencia(e, seg, dias) {
  let n = 0, d = seg;
  while (bateuFaixa(e, d, dias)) { n++; d = somarDias(d, -7); }
  return n;
}

function bonusSemana(e) {
  const sem = semanaAtual(e); const seg = sem.dias[0]; const out = [];
  for (const f of FAIXAS_SEMANA) {
    if (sem.feitos < f.dias || bateuFaixa(e, seg, f.dias)) continue;
    e.conquistas[chaveFaixa(seg, f.dias)] = hoje();
    out.push([f.nome, f.xp, chaveFaixa(seg, f.dias)]);
    const tipo = f.dias === 5 ? 'meta' : f.dias === 7 ? 'fechada' : null;
    if (tipo) {
      const n = sequencia(e, seg, f.dias);
      if (n >= 2) {
        const xp = Math.min(SEQ[tipo].porSemana * (n - 1), SEQ[tipo].teto);
        out.push([`${n} semanas seguidas ${tipo === 'meta' ? 'batendo a meta' : 'fechadas'}`, xp, `seq-${tipo}-${seg}`]);
      }
    }
  }
  return out;
}

// Evolução do personagem do jogador.
export const ESTAGIOS = [
  { nivel: 1, nome: 'Peregrino', item: null },
  { nivel: 3, nome: 'Andarilho', item: 'cajado' },
  { nivel: 5, nome: 'Viajante', item: 'alforje' },
  { nivel: 8, nome: 'Pastor', item: 'manto' },
  { nivel: 12, nome: 'Guardião', item: 'lamparina' },
  { nivel: 16, nome: 'Sábio', item: 'pergaminho' },
  { nivel: 20, nome: 'Ancião', item: 'aura' },
];
export const estagio = (n) => [...ESTAGIOS].reverse().find((e) => n >= e.nivel);
export const itensAte = (n) => ESTAGIOS.filter((e) => e.item && n >= e.nivel).map((e) => e.item);
export const META_SEMANA = 5;
export const DIAS_PARA_REVISAR_APLICACAO = 3;
const INTERVALOS = [0, 1, 3, 7, 14, 30]; // dias por caixa (Leitner)

export const sessaoPorId = (id) => SESSOES.find((s) => s.id === id);
export const qid = (s, i) => `${s.id}#${i}`;

export const refSessao = (s) => {
  const l = LIVROS[s.livro];
  const [a, b] = s.caps;
  return a === b ? `${l.nome} ${a}` : `${l.nome} ${a}–${b}`;
};

export const concluida = (e, id) => !!e.sessoes[id]?.data;
export const concluidas = (e) => SESSOES.filter((s) => concluida(e, s.id));
export const proxima = (e) => SESSOES.find((s) => !concluida(e, s.id)) || null;
export const liberada = (e, s) => concluida(e, s.id) || proxima(e)?.id === s.id;

// ─── Cartas por questionário ───
// O personagem é "apresentado" quando a sessão em que ele aparece é concluída. A carta, porém, só é ganha
// respondendo 3 perguntas sobre ele (sorteadas do banco): criança precisa acertar 2, adulto 3.
// São 3 tentativas; errando as 3, o questionário volta em 7 dias, com perguntas ainda não usadas.
// Personagem sem banco de perguntas (eras futuras) entra direto, como antes.
export const TENTATIVAS_CARTA = 3;
export const ESPERA_CARTA = 7;
export function apresentados(e) {
  const set = new Set();
  for (const s of concluidas(e)) s.personagens.forEach((p) => set.add(p));
  return set;
}
// Quem já tinha cartas pelo sistema antigo (só por ler) fica com todas.
export function migrarCartas(e) {
  if (e.cartas) return false;
  e.cartas = {}; e.cartaQuiz = {};
  for (const id of apresentados(e)) e.cartas[id] = { data: hoje(), modo: 'leitura' };
  return true;
}
// Canal de teste: conclui as sessões até a última carta que já tem imagem e entrega essas cartas,
// para o Rafael conferir cada imagem nova no app sem precisar jogar até lá. Nunca roda no oficial.
export function avancarTeste(e, ids) {
  let ultima = -1;
  for (const id of ids) { const i = SESSOES.findIndex((s) => s.personagens.includes(id)); if (i > ultima) ultima = i; }
  let mudou = false;
  SESSOES.slice(0, ultima + 1).forEach((s) => { if (!concluida(e, s.id)) { e.sessoes[s.id] = { data: hoje(), teste: true }; mudou = true; } });
  e.cartas ||= {};
  for (const id of ids) if (!e.cartas[id]) { e.cartas[id] = { data: hoje(), modo: 'teste' }; mudou = true; }
  return mudou;
}
export const temBancoCarta = (id) => (QUIZ_CARTAS[id]?.length || 0) >= 3;
export function personagensLiberados(e) {
  const set = new Set(Object.keys(e.cartas || {}));
  for (const id of apresentados(e)) if (!e.cartas || !temBancoCarta(id)) set.add(id);
  return set;
}
// Cartas por sessão (decidido em 22/11/2026): ao concluir uma sessão, fica disponível para conquistar o primeiro
// personagem novo dela ("o da vez") + 1 da fila; os outros novos entram na fila. Sessão sem personagem novo solta 1 da fila.
// A fila não aparece para o usuário.
// Calculado a partir das sessões concluídas (em ordem), sem estado guardado. Quem já começou o questionário continua.
export function fila(e) {
  const soltas = new Set(); const espera = []; const vistos = new Set();
  for (const s of concluidas(e)) {
    const novos = s.personagens.filter((p) => !vistos.has(p));
    novos.forEach((p) => vistos.add(p));
    if (novos.length) {
      soltas.add(novos[0]);
      if (espera.length) soltas.add(espera.shift()); // + 1 da fila (o mais antigo)
      espera.push(...novos.slice(1));
    } else if (espera.length) soltas.add(espera.shift());
  }
  return { soltas, espera };
}
export const cartasAConquistar = (e) => {
  const lib = personagensLiberados(e); const { soltas } = fila(e);
  return [...apresentados(e)].filter((id) => !lib.has(id) && (soltas.has(id) || e.cartaQuiz?.[id]));
};
// Personagens já apresentados que esperam a vez (na ordem em que vão sair).
export const cartasNaFila = (e) => { const lib = personagensLiberados(e); const aq = new Set(cartasAConquistar(e)); return fila(e).espera.filter((id) => !lib.has(id) && !aq.has(id)); };
export const acertosParaCarta = (e) => (e.tipo === 'crianca' ? 2 : 3);
export function estadoCarta(e, id) {
  const st = e.cartaQuiz?.[id] || {};
  return { tentativas: st.tentativas || 0, restantes: TENTATIVAS_CARTA - (st.tentativas || 0), volta: st.volta && st.volta > hoje() ? st.volta : null, emCurso: !!st.atual };
}
export const cartasDisponiveis = (e) => cartasAConquistar(e).filter((id) => !estadoCarta(e, id).volta);
// Começa (ou retoma) uma tentativa. As respostas ficam gravadas uma a uma: sair no meio não dá uma tentativa nova.
export function tentativaCarta(e, id) {
  if (!temBancoCarta(id) || personagensLiberados(e).has(id) || estadoCarta(e, id).volta) return null;
  e.cartaQuiz ||= {};
  const st = (e.cartaQuiz[id] ||= { tentativas: 0, usadas: [] });
  if (!st.atual) {
    const banco = QUIZ_CARTAS[id]; const usadas = new Set(st.usadas || []);
    let pool = banco.map((_, i) => i).filter((i) => !usadas.has(i));
    if (pool.length < 3) pool = banco.map((_, i) => i);
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
    const q = pool.slice(0, 3);
    st.usadas = [...new Set([...(st.usadas || []), ...q])];
    st.atual = { q, r: [] };
  }
  return { perguntas: st.atual.q.map((i) => QUIZ_CARTAS[id][i]), respostas: st.atual.r, tentativa: st.tentativas + 1 };
}
export function responderCarta(e, id, opcao) {
  const st = e.cartaQuiz?.[id]; if (!st?.atual) return null;
  const q = QUIZ_CARTAS[id][st.atual.q[st.atual.r.length]];
  const certo = opcao === q.a; st.atual.r.push(certo);
  if (st.atual.r.length < 3) return { certo, ref: q.ref, fim: false };
  const acertos = st.atual.r.filter(Boolean).length; const precisa = acertosParaCarta(e);
  if (acertos >= precisa) {
    e.cartas ||= {}; e.cartas[id] = { data: hoje(), modo: 'quiz' }; delete e.cartaQuiz[id];
    ganhar(e, 'carta', XP.carta, id);
    return { certo, ref: q.ref, fim: true, ganhou: true, acertos, precisa, novasC: verificarConquistas(e) };
  }
  st.atual = null; st.tentativas = (st.tentativas || 0) + 1;
  if (st.tentativas >= TENTATIVAS_CARTA) { st.tentativas = 0; st.usadas = []; st.volta = somarDias(hoje(), ESPERA_CARTA); }
  return { certo, ref: q.ref, fim: true, ganhou: false, acertos, precisa, restantes: st.volta ? 0 : TENTATIVAS_CARTA - st.tentativas, volta: st.volta || null };
}

export function selosLiberados(e) {
  return new Set(Object.keys(SELOS).filter((k) => concluida(e, SELOS[k].sessao)));
}

export function marcosLiberados(e) {
  return new Set(concluidas(e).map((s) => s.marco).filter(Boolean));
}

export function progressoLivro(e, livroId) {
  const lista = SESSOES.filter((s) => s.livro === livroId);
  const feitas = lista.filter((s) => concluida(e, s.id)).length;
  return { feitas, total: lista.length, completo: lista.length > 0 && feitas === lista.length };
}

export function progressoEra(e, eraId) {
  const era = ERAS.find((x) => x.id === eraId);
  const lista = SESSOES.filter((s) => LIVROS[s.livro].era === eraId);
  const feitas = lista.filter((s) => concluida(e, s.id)).length;
  return { feitas, total: lista.length, completo: !!era.conteudo && lista.length > 0 && feitas === lista.length };
}

// Curva de jogo: fácil no começo, pesada depois.
// XP para passar do nível n ao n+1 = 40 + 10·n^1,5 → 50, 68, 92, 120, 152 … 356 (nível 10) … 934 (nível 20).
export const xpParaSubir = (n) => Math.round(40 + 10 * n ** 1.5);
export function nivel(xp) {
  let n = 1, ini = 0;
  while (xp >= ini + xpParaSubir(n)) { ini += xpParaSubir(n); n++; }
  const fim = ini + xpParaSubir(n);
  return { n, ini, fim, pct: Math.round(((xp - ini) / (fim - ini)) * 100) };
}

export function semanaAtual(e) {
  // segunda a domingo
  const d = new Date();
  const dow = (d.getDay() + 6) % 7;
  const seg = somarDias(hoje(), -dow);
  const dias = Array.from({ length: 7 }, (_, i) => somarDias(seg, i));
  const ativos = new Set(e.log.filter((l) => l.tipo === 'sessao' || l.tipo === 'desafio').map((l) => l.data));
  return { dias, ativos, feitos: dias.filter((x) => ativos.has(x)).length };
}

export function aplicacoesParaRevisar(e) {
  const h = hoje();
  return SESSOES.filter((s) => {
    const r = e.sessoes[s.id];
    return r?.aplicacao?.trim() && !r.revisao && diasEntre(r.data, h) >= DIAS_PARA_REVISAR_APLICACAO;
  });
}

export function quizPendente(e) {
  const h = hoje();
  const lista = [];
  for (const s of SESSOES) {
    s.quiz.forEach((q, i) => {
      const st = e.quiz[qid(s, i)];
      if (st && st.proxima <= h) lista.push({ s, q, id: qid(s, i) });
    });
  }
  return lista;
}

function ganhar(e, tipo, xp, ref) {
  e.xp += xp;
  e.log.push({ data: hoje(), tipo, xp, ref });
}

// Conclui a sessão e devolve o que foi desbloqueado (para a tela de resultado).
export function concluirSessao(e, s, dados) {
  const antesP = personagensLiberados(e);
  const antesQ = new Set(cartasAConquistar(e));
  const antesM = marcosLiberados(e);
  const ganhos = [];
  const nivelAntes = nivel(e.xp).n;
  e.sessoes[s.id] = { data: hoje(), revisao: null, ...dados };
  ganhar(e, 'sessao', XP.sessao, s.id); ganhos.push(['Sessão concluída', XP.sessao]);
  if (dados.aplicacao) { ganhar(e, 'bonus', XP.aplicacao, s.id); ganhos.push(['Aplicação escrita', XP.aplicacao]); }
  for (const g of bonusSemana(e)) { ganhar(e, 'bonus', g[1], g[2]); ganhos.push([g[0], g[1]]); }
  if (progressoLivro(e, s.livro).completo) {
    ganhar(e, 'livro', XP.livro, s.livro); ganhos.push([`${LIVROS[s.livro].nome} concluído`, XP.livro]);
  }
  const era = LIVROS[s.livro].era;
  if (progressoEra(e, era).completo) {
    ganhar(e, 'era', XP.era, era); ganhos.push(['Era concluída', XP.era]);
  }
  const novosP = [...personagensLiberados(e)].filter((p) => !antesP.has(p));
  const novosQ = cartasAConquistar(e).filter((p) => !antesQ.has(p));
  const naFila = cartasNaFila(e).length;
  const novosS = selosDaSessao(s.id);
  const novosM = [...marcosLiberados(e)].filter((m) => !antesM.has(m));
  const novasC = verificarConquistas(e);
  const nivelDepois = nivel(e.xp).n;
  return { ganhos, novosP, novosQ, naFila, novosS, novosM, novasC, subiu: nivelDepois > nivelAntes ? nivelDepois : null };
}

// ─── Desafios sazonais (em paralelo à jornada) ───
export { DESAFIOS };
export const desafioPorId = (id) => DESAFIOS.find((d) => d.id === id);
// Visíveis na data; no canal de teste, também antes de começar (para conferir o conteúdo).
export const desafiosVisiveis = (teste = false) => DESAFIOS.filter((d) => (teste || d.inicio <= hoje()) && hoje() <= d.fim).sort((a, b) => a.inicio.localeCompare(b.inicio));
export const SELOS_ESPECIAIS = Object.fromEntries(DESAFIOS.map((d) => [d.selo.id, d.selo]));
export function progressoDesafio(e, d) {
  const feitos = e.desafios?.[d.id] || {};
  const n = d.sessoes.filter((_, i) => feitos[i]).length;
  return { feitos: n, total: d.sessoes.length, completo: n === d.sessoes.length, proxima: d.sessoes.findIndex((_, i) => !feitos[i]) };
}
export const selosEspeciaisDe = (e) => DESAFIOS.filter((d) => progressoDesafio(e, d).completo).map((d) => d.selo.id);
export function concluirDesafio(e, d, i, dados) {
  e.desafios ||= {}; e.desafios[d.id] ||= {};
  const ganhos = []; const nivelAntes = nivel(e.xp).n;
  e.desafios[d.id][i] = { data: hoje(), ...dados };
  ganhar(e, 'desafio', XP.sessao, `${d.id}:${i}`); ganhos.push([`${d.tipo}: dia ${i + 1}`, XP.sessao]);
  if (dados.aplicacao) { ganhar(e, 'bonus', XP.aplicacao, `${d.id}:${i}`); ganhos.push(['Aplicação escrita', XP.aplicacao]); }
  for (const g of bonusSemana(e)) { ganhar(e, 'bonus', g[1], g[2]); ganhos.push([g[0], g[1]]); }
  const fim = progressoDesafio(e, d).completo;
  if (fim) { ganhar(e, 'desafio-fim', XP.livro, d.id); ganhos.push([`Desafio "${d.nome}" completo`, XP.livro]); }
  return { ganhos, novosP: [], novosS: fim ? [d.selo.id] : [], novosM: [], novasC: verificarConquistas(e), subiu: nivel(e.xp).n > nivelAntes ? nivel(e.xp).n : null, desafio: d.id };
}

export function revisarAplicacao(e, s, texto) {
  e.sessoes[s.id].revisao = { data: hoje(), texto };
  ganhar(e, 'revisao', XP.revisao, s.id);
  return verificarConquistas(e);
}

export function responderQuiz(e, id, acertou) {
  const st = e.quiz[id];
  if (acertou) {
    st.acertos++; st.caixa = Math.min(5, st.caixa + 1);
    st.proxima = somarDias(hoje(), INTERVALOS[st.caixa]);
    ganhar(e, 'acerto', XP.acerto, id);
  } else {
    st.erros++; st.caixa = 1; st.proxima = somarDias(hoje(), 1);
  }
}

// Medalhas: nível bronze/prata/ouro e ícone. Eras e livros são gerados de plano.js (abaixo).
export const CONQUISTAS = [
  { id: 'primeira', grupo: 'ritmo', nivel: 'bronze', icone: 'footprints', nome: 'Primeiro passo', desc: 'Concluir a primeira sessão', ok: (e) => concluidas(e).length >= 1 },
  { id: 'cinco', grupo: 'ritmo', nivel: 'prata', icone: 'footprints', nome: 'Pegando o ritmo', desc: 'Concluir 5 sessões', ok: (e) => concluidas(e).length >= 5 },
  { id: 'quinze', grupo: 'ritmo', nivel: 'ouro', icone: 'footprints', nome: 'Caminhante', desc: 'Concluir 15 sessões', ok: (e) => concluidas(e).length >= 15 },
  { id: 'semana', grupo: 'ritmo', nivel: 'prata', icone: 'target', nome: 'Semana firme', desc: `Estudar ${META_SEMANA} dias numa mesma semana`, ok: (e) => semanaAtual(e).feitos >= META_SEMANA },
  { id: 'pers10', grupo: 'colecao', nivel: 'prata', icone: 'users-round', nome: 'Rostos conhecidos', desc: 'Desbloquear 10 personagens', ok: (e) => personagensLiberados(e).size >= 10 },
  { id: 'pers25', grupo: 'colecao', nivel: 'ouro', icone: 'users-round', nome: 'Árvore da família', desc: 'Desbloquear 25 personagens', ok: (e) => personagensLiberados(e).size >= 25 },
  { id: 'selos6', grupo: 'colecao', nivel: 'prata', icone: 'stamp', nome: 'Guardador de selos', desc: 'Reunir 6 Selos da Palavra', ok: (e) => selosLiberados(e).size >= 6 },
  { id: 'aplic1', grupo: 'pratica', nivel: 'bronze', icone: 'hand-helping', nome: 'Da página para a vida', desc: 'Contar como foi uma aplicação', ok: (e) => Object.values(e.sessoes).some((s) => s.revisao) },
  { id: 'aplic5', grupo: 'pratica', nivel: 'prata', icone: 'hand-helping', nome: 'Praticante', desc: 'Contar como foram 5 aplicações', ok: (e) => Object.values(e.sessoes).filter((s) => s.revisao).length >= 5 },
  { id: 'quiz25', grupo: 'pratica', nivel: 'prata', icone: 'circle-check', nome: 'Memória firme', desc: 'Acertar 25 perguntas de revisão', ok: (e) => e.log.filter((l) => l.tipo === 'acerto').length >= 25 },
];

// Uma conquista por era e por livro. Os ids antigos (era1, era2, gn, jo) ficam iguais para não perder o que já foi ganho.
const ID_ERA = { principio: 'era1', moises: 'era2' };
const NOME_ERA = { principio: 'Era dos Patriarcas', moises: 'Pelo deserto', juizes: 'Na terra prometida' };
// Ícone próprio de cada era (desenhado em js/icones.js, ligado ao texto bíblico do emblema).
export const ICONE_ERA = Object.fromEntries(['principio', 'moises', 'juizes', 'reino-unido', 'reino-dividido', 'exilio', 'pos-exilio', 'jesus', 'igreja', 'fim-seculo'].map((id) => [id, `era-${id}`]));
const NOME_LIVRO = { gn: 'No princípio', jo: 'Meus olhos te veem' };
for (const era of ERAS) {
  CONQUISTAS.push({ id: ID_ERA[era.id] || `era-${era.id}`, grupo: 'era', era: era.id, nome: NOME_ERA[era.id] || era.nome, desc: `Concluir a era ${era.nome}`, ok: (e) => progressoEra(e, era.id).completo });
  for (const l of era.livros) {
    CONQUISTAS.push({ id: NOME_LIVRO[l.id] ? l.id : `livro-${l.id}`, grupo: 'livro', livro: l.id, nome: NOME_LIVRO[l.id] || l.nome, desc: `Concluir ${l.nome}`, ok: (e) => progressoLivro(e, l.id).completo });
  }
}

export function verificarConquistas(e) {
  const novas = [];
  for (const c of CONQUISTAS) {
    if (!e.conquistas[c.id] && c.ok(e)) { e.conquistas[c.id] = hoje(); novas.push(c); }
  }
  return novas;
}
