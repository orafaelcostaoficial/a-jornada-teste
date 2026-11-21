// Configuração do banco (Supabase). Preencha com os dados do projeto:
// Painel do Supabase → Project Settings → API (ou "Connect"): Project URL e a chave pública
// (anon / publishable). Essa chave é feita para ficar no app; quem protege os dados são as
// regras (RLS) do supabase/schema.sql. NUNCA coloque aqui a chave service_role/secret.
export const SUPABASE_URL = 'https://ozxkmggizdomfwavujxc.supabase.co';
export const SUPABASE_KEY = 'sb_publishable_2kmwwgU5AeY6Vnp87RK8zQ_M3M051Pg';

// Canal de teste (app separado em /a-jornada-teste/): usa dados separados no aparelho e não sincroniza,
// para não misturar com o app de verdade. Para testar a nuvem no canal de teste, abra com ?nuvem=1.
// Canal de teste: o app separado em /a-jornada-teste/ (e o endereço antigo /teste/).
export const CANAL_TESTE = /\/(a-jornada-)?teste\//.test(location.pathname);
export const NUVEM_LIGADA = !!(SUPABASE_URL && SUPABASE_KEY) && (!CANAL_TESTE || new URLSearchParams(location.search).has('nuvem'));
