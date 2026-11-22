// Sincronização com o Supabase. Tudo aqui é opcional: sem config, o app funciona só no aparelho.
// Fluxo: login anônimo do aparelho → família (criar ou entrar com convite) → perfis sincronizados.
import { SUPABASE_URL, SUPABASE_KEY, NUVEM_LIGADA } from './config.js';
import { mesclarPerfil, hoje } from './store.js';

let sb = null;
let carregando = null;

export const ligada = () => NUVEM_LIGADA;

async function cliente() {
  if (!NUVEM_LIGADA) return null;
  if (sb) return sb;
  carregando ||= new Promise((ok, erro) => {
    if (window.supabase) return ok();
    const s = document.createElement('script');
    s.src = new URL('../vendor/supabase.js', import.meta.url).href;
    s.onload = ok; s.onerror = () => erro(new Error('Não consegui carregar o cliente do banco.'));
    document.head.appendChild(s);
  });
  await carregando;
  sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: true, storageKey: 'ajornada-auth' } });
  const { data } = await sb.auth.getSession();
  if (!data.session) {
    const { error } = await sb.auth.signInAnonymously();
    if (error) throw new Error('Login anônimo falhou. Ele está ligado no Supabase? ' + error.message);
  }
  return sb;
}

const erroLegivel = (e) => (e?.message || String(e)).replace(/^.*?:\s*/, '');

export async function criarFamilia(nome) {
  const c = await cliente();
  const { data, error } = await c.rpc('criar_familia', { p_nome: nome });
  if (error) throw new Error(erroLegivel(error));
  return infoFamilia(data);
}

// Código de amigo = 6 caracteres sem hífen; convite = abc123-def456.
export const pareceCodigoAmigo = (txt) => /^[a-z0-9]{6}$/i.test((txt || '').trim());

export async function entrarFamilia(convite) {
  if (pareceCodigoAmigo(convite)) throw Object.assign(new Error('codigo-amigo'), { codigoAmigo: true });
  const c = await cliente();
  const { data, error } = await c.rpc('entrar_familia', { p_convite: convite });
  if (error) throw new Error(erroLegivel(error));
  return infoFamilia(data);
}

const infoFamilia = (f) => ({ familiaId: f.id, familiaNome: f.nome, codigoAmigo: f.codigo_amigo, convite: f.convite });

// Resumo público do perfil (o que amigos veem) + dados completos (só a família vê).
function linha(p, familiaId, resumo) {
  return {
    id: p.id, familia_id: familiaId, nome: p.nome, tipo: p.tipo, avatar: p.avatar,
    dados: p, xp: p.xp, xp_semana: resumo.xpSemana, semana: resumo.semana,
    sessao_atual: resumo.sessaoAtual, era: resumo.era, atualizado: new Date().toISOString(),
    apelido: (p.apelido || '').trim().slice(0, 20) || null, xp_mes: resumo.xpMes, mes: resumo.mes, capitulos: resumo.capitulos,
  };
}

// Envia os perfis locais e traz os da família; devolve a raiz mesclada.
export async function sincronizar(raiz, resumir) {
  if (!raiz.nuvem) return raiz;
  const c = await cliente();
  const fid = raiz.nuvem.familiaId;

  const { data: remotos, error } = await c.from('perfis').select('id, dados');
  if (error) throw new Error(erroLegivel(error));

  const r = { ...raiz, perfis: { ...raiz.perfis } };
  for (const row of remotos || []) {
    if ((r.removidos || []).includes(row.id)) continue;
    r.perfis[row.id] = mesclarPerfil(r.perfis[row.id], row.dados);
  }
  if (!r.ativo || !r.perfis[r.ativo]) r.ativo = Object.keys(r.perfis)[0] || null;

  const linhas = Object.values(r.perfis).map((p) => linha(p, fid, resumir(p)));
  if (linhas.length) {
    const { error: e2 } = await c.from('perfis').upsert(linhas);
    if (e2) throw new Error(erroLegivel(e2));
  }
  if (r.removidos?.length) {
    const { error: e3 } = await c.from('perfis').delete().in('id', r.removidos);
    if (!e3) r.removidos = [];
  }
  r.nuvem = { ...r.nuvem, sincronizadoEm: new Date().toISOString() };
  return r;
}

// ─── Família (grupo de casas) e ranking geral ───
async function rpc(nome, args) {
  const c = await cliente();
  const { data, error } = await c.rpc(nome, args);
  if (error) throw new Error(erroLegivel(error));
  return data;
}
export const criarFamiliaGrupo = (nome) => rpc('criar_grupo', { p_nome: nome });
export const entrarFamiliaGrupo = (codigo) => rpc('entrar_grupo', { p_codigo: codigo });
export const sairFamiliaGrupo = (id) => rpc('sair_grupo', { p_grupo: id });
export const minhasFamilias = async () => (await rpc('minhas_familias')) || [];
export const rankingFamilia = async () => (await rpc('ranking_familia')) || [];
export const rankingGeral = async (mes, ordem) => (await rpc('ranking_geral', { p_mes: mes, p_ordem: ordem })) || [];

export { hoje };
