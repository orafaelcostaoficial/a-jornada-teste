-- A Jornada — banco no Supabase (sincronização da família + amigos)
-- Rodar inteiro no SQL Editor do projeto. Pode rodar de novo sem quebrar (idempotente).
--
-- Modelo:
--   familia  = uma casa. Tem um código de AMIGO (público, para trocar com amigos)
--              e um CONVITE (secreto, para entrar com outro celular na mesma família).
--   membros  = cada aparelho logado (login anônimo do Supabase) pertence a uma família.
--   perfis   = os viajantes (adulto/criança) com todo o progresso em `dados`.
--   amizades = famílias amigas veem apelido, avatar, nível, XP da semana e onde estão no mapa.
--   v58: o banco não guarda nome de viajante, só o apelido (ver o fim do arquivo).
--
-- Pré-requisito no painel: Authentication → Sign In / Providers → "Allow anonymous sign-ins" ligado.

create extension if not exists pgcrypto;

create table if not exists public.familias (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  codigo_amigo text unique not null,
  convite text unique not null,
  criado_em timestamptz not null default now()
);

create table if not exists public.membros (
  user_id uuid primary key references auth.users on delete cascade,
  familia_id uuid not null references public.familias on delete cascade,
  criado_em timestamptz not null default now()
);

create table if not exists public.perfis (
  id text primary key,
  familia_id uuid not null references public.familias on delete cascade,
  nome text not null,
  tipo text not null default 'adulto',
  avatar jsonb not null default '{}',
  dados jsonb not null,
  xp int not null default 0,
  xp_semana int not null default 0,
  semana text,
  sessao_atual text,
  era text,
  atualizado timestamptz not null default now()
);

create table if not exists public.amizades (
  familia_id uuid not null references public.familias on delete cascade,
  amigo_id uuid not null references public.familias on delete cascade,
  criado_em timestamptz not null default now(),
  primary key (familia_id, amigo_id)
);

alter table public.familias enable row level security;
alter table public.membros enable row level security;
alter table public.perfis enable row level security;
alter table public.amizades enable row level security;

create or replace function public.minha_familia() returns uuid
language sql stable security definer set search_path = public as $$
  select familia_id from membros where user_id = auth.uid()
$$;

drop policy if exists familia_ler on public.familias;
create policy familia_ler on public.familias for select using (id = public.minha_familia());

drop policy if exists membros_ler on public.membros;
create policy membros_ler on public.membros for select using (familia_id = public.minha_familia());

drop policy if exists perfis_tudo on public.perfis;
create policy perfis_tudo on public.perfis for all
  using (familia_id = public.minha_familia())
  with check (familia_id = public.minha_familia());

drop policy if exists amizades_ler on public.amizades;
create policy amizades_ler on public.amizades for select using (familia_id = public.minha_familia());

-- Cria a família do aparelho atual.
create or replace function public.criar_familia(p_nome text) returns public.familias
language plpgsql security definer set search_path = public as $$
declare f familias;
begin
  if auth.uid() is null then raise exception 'sem login'; end if;
  if exists (select 1 from membros where user_id = auth.uid()) then
    select * into f from familias where id = minha_familia(); return f;
  end if;
  insert into familias (nome, codigo_amigo, convite)
  values (coalesce(nullif(trim(p_nome), ''), 'Família'),
          upper(substr(md5(gen_random_uuid()::text), 1, 6)),
          substr(md5(gen_random_uuid()::text), 1, 6) || '-' || substr(md5(gen_random_uuid()::text), 1, 6))
  returning * into f;
  insert into membros (user_id, familia_id) values (auth.uid(), f.id);
  return f;
end $$;

-- Entra numa família existente usando o convite secreto (outro celular da casa).
create or replace function public.entrar_familia(p_convite text) returns public.familias
language plpgsql security definer set search_path = public as $$
declare f familias;
begin
  if auth.uid() is null then raise exception 'sem login'; end if;
  select * into f from familias where convite = lower(trim(p_convite));
  if f.id is null then raise exception 'convite inválido'; end if;
  insert into membros (user_id, familia_id) values (auth.uid(), f.id)
  on conflict (user_id) do update set familia_id = excluded.familia_id;
  return f;
end $$;

-- Liga duas famílias como amigas (nos dois sentidos).
create or replace function public.adicionar_amigo(p_codigo text) returns text
language plpgsql security definer set search_path = public as $$
declare minha uuid := minha_familia(); outra familias;
begin
  if minha is null then raise exception 'sem família'; end if;
  select * into outra from familias where codigo_amigo = upper(trim(p_codigo));
  if outra.id is null then raise exception 'código não encontrado'; end if;
  if outra.id = minha then raise exception 'esse é o seu próprio código'; end if;
  insert into amizades values (minha, outra.id, now()) on conflict do nothing;
  insert into amizades values (outra.id, minha, now()) on conflict do nothing;
  return outra.nome;
end $$;

create or replace function public.remover_amigo(p_familia uuid) returns void
language plpgsql security definer set search_path = public as $$
declare minha uuid := minha_familia();
begin
  delete from amizades where (familia_id = minha and amigo_id = p_familia) or (familia_id = p_familia and amigo_id = minha);
end $$;

-- O que os amigos podem ver: só dados públicos do jogo (nunca as anotações).
create or replace function public.amigos()
returns table (familia_id uuid, familia text, perfil_id text, nome text, tipo text, avatar jsonb,
               xp int, xp_semana int, semana text, sessao_atual text, era text, atualizado timestamptz)
language sql stable security definer set search_path = public as $$
  select f.id, f.nome, p.id, p.nome, p.tipo, p.avatar, p.xp, p.xp_semana, p.semana, p.sessao_atual, p.era, p.atualizado
  from amizades a
  join familias f on f.id = a.amigo_id
  join perfis p on p.familia_id = f.id
  where a.familia_id = minha_familia()
$$;

revoke all on function public.criar_familia(text), public.entrar_familia(text), public.adicionar_amigo(text),
  public.remover_amigo(uuid), public.amigos(), public.minha_familia() from public, anon;
grant execute on function public.criar_familia(text), public.entrar_familia(text), public.adicionar_amigo(text),
  public.remover_amigo(uuid), public.amigos(), public.minha_familia() to authenticated;
grant select, insert, update, delete on public.perfis to authenticated;
grant select on public.familias, public.membros, public.amizades to authenticated;

-- ════════════════════════════════════════════════════════════════════════════
-- v38 — CASA e FAMÍLIA + ranking geral
--   casa    = a tabela `familias` acima (quem entra pelo convite secreto; dados e anotações).
--   família = grupo de casas (`grupos`), entrando com o código da família. Por enquanto cada casa
--             fica em uma família só (regra nas funções, não na tabela, para abrir depois).
--   Ranking da família: semanal, apelidos e casas. Ranking geral: mensal, todos os viajantes do app,
--   só apelido + personagem (nunca a casa).
-- ════════════════════════════════════════════════════════════════════════════

create table if not exists public.grupos (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  codigo text unique not null,
  criado_em timestamptz not null default now()
);

create table if not exists public.grupo_casas (
  grupo_id uuid not null references public.grupos on delete cascade,
  casa_id uuid not null references public.familias on delete cascade,
  criado_em timestamptz not null default now(),
  primary key (grupo_id, casa_id)
);

alter table public.grupos enable row level security;
alter table public.grupo_casas enable row level security;

alter table public.perfis add column if not exists apelido text;
alter table public.perfis add column if not exists xp_mes int not null default 0;
alter table public.perfis add column if not exists mes text;
alter table public.perfis add column if not exists capitulos int not null default 0;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'perfis_apelido_tam') then
    alter table public.perfis add constraint perfis_apelido_tam check (apelido is null or char_length(apelido) <= 20);
  end if;
end $$;

create or replace function public.meus_grupos() returns setof uuid
language sql stable security definer set search_path = public as $$
  select grupo_id from grupo_casas where casa_id = minha_familia()
$$;

drop policy if exists grupos_ler on public.grupos;
create policy grupos_ler on public.grupos for select using (id in (select public.meus_grupos()));
drop policy if exists grupo_casas_ler on public.grupo_casas;
create policy grupo_casas_ler on public.grupo_casas for select using (grupo_id in (select public.meus_grupos()));

-- Cria uma família e coloca a minha casa nela.
create or replace function public.criar_grupo(p_nome text) returns public.grupos
language plpgsql security definer set search_path = public as $$
declare minha uuid := minha_familia(); g grupos;
begin
  if minha is null then raise exception 'ligue a sua casa à nuvem primeiro'; end if;
  if exists (select 1 from grupo_casas where casa_id = minha) then raise exception 'sua casa já está numa família'; end if;
  loop
    begin
      insert into grupos (nome, codigo) values (coalesce(nullif(trim(p_nome), ''), 'Família'), upper(substr(md5(gen_random_uuid()::text), 1, 6)))
      returning * into g;
      exit;
    exception when unique_violation then null; -- código repetido: sorteia outro
    end;
  end loop;
  insert into grupo_casas (grupo_id, casa_id) values (g.id, minha);
  return g;
end $$;

-- Entra com a minha casa numa família existente, pelo código.
create or replace function public.entrar_grupo(p_codigo text) returns public.grupos
language plpgsql security definer set search_path = public as $$
declare minha uuid := minha_familia(); g grupos; outra familias;
begin
  if minha is null then raise exception 'ligue a sua casa à nuvem primeiro'; end if;
  select * into g from grupos where codigo = upper(trim(p_codigo));
  if g.id is null then
    -- Compatibilidade: código de amigo antigo de uma casa (v37). Entra na família dela; se ela não tem, cria.
    select * into outra from familias where codigo_amigo = upper(trim(p_codigo));
    if outra.id is null then raise exception 'código de família não encontrado'; end if;
    if outra.id = minha then raise exception 'esse é o código da sua própria casa'; end if;
    select gr.* into g from grupos gr join grupo_casas c on c.grupo_id = gr.id where c.casa_id = outra.id order by c.criado_em limit 1;
    if g.id is null then
      if exists (select 1 from grupo_casas where casa_id = minha) then raise exception 'sua casa já está em outra família: saia dela primeiro'; end if;
      insert into grupos (nome, codigo) values (outra.nome, upper(substr(md5(gen_random_uuid()::text), 1, 6))) returning * into g;
      insert into grupo_casas (grupo_id, casa_id) values (g.id, outra.id);
    end if;
  end if;
  if exists (select 1 from grupo_casas where casa_id = minha and grupo_id = g.id) then return g; end if;
  if exists (select 1 from grupo_casas where casa_id = minha) then raise exception 'sua casa já está em outra família: saia dela primeiro'; end if;
  insert into grupo_casas (grupo_id, casa_id) values (g.id, minha);
  return g;
end $$;

-- Tira a minha casa da família; família sem casas é apagada.
create or replace function public.sair_grupo(p_grupo uuid) returns void
language plpgsql security definer set search_path = public as $$
declare minha uuid := minha_familia();
begin
  delete from grupo_casas where casa_id = minha and grupo_id = p_grupo;
  delete from grupos g where g.id = p_grupo and not exists (select 1 from grupo_casas c where c.grupo_id = g.id);
end $$;

-- As famílias da minha casa, com as casas de cada uma.
create or replace function public.minhas_familias()
returns table (id uuid, nome text, codigo text, casas text[])
language sql stable security definer set search_path = public as $$
  select g.id, g.nome, g.codigo,
         array(select f.nome from grupo_casas c join familias f on f.id = c.casa_id where c.grupo_id = g.id order by c.criado_em)
  from grupos g where g.id in (select meus_grupos())
  order by g.criado_em
$$;

-- Ranking da família: viajantes das OUTRAS casas das minhas famílias (os da minha casa o app já tem).
-- Só dados do jogo, nunca as anotações.
create or replace function public.ranking_familia()
returns table (grupo_id uuid, casa_id uuid, casa text, perfil_id text, nome text, tipo text, avatar jsonb,
               xp int, xp_semana int, semana text, sessao_atual text, era text, atualizado timestamptz)
language sql stable security definer set search_path = public as $$
  select c.grupo_id, f.id, f.nome, p.id, nullif(trim(p.apelido), ''), p.tipo, p.avatar, p.xp, p.xp_semana, p.semana, p.sessao_atual, p.era, p.atualizado
  from grupo_casas c
  join familias f on f.id = c.casa_id
  join perfis p on p.familia_id = f.id
  where c.grupo_id in (select meus_grupos()) and f.id <> minha_familia()
$$;

-- Ranking geral: todos os viajantes do app. p_ordem = 'xp' (XP do mês p_mes, 'AAAA-MM') ou 'progresso'
-- (capítulos lidos). Devolve o top 50 e, fora dele, os viajantes da minha casa (meu = true).
-- Nunca devolve nome real, casa ou id de quem não é da minha casa.
create or replace function public.ranking_geral(p_mes text, p_ordem text default 'xp')
returns table (pos bigint, meu boolean, perfil_id text, apelido text, avatar jsonb, xp int, xp_mes int,
               era text, sessao_atual text, capitulos int)
language sql stable security definer set search_path = public as $$
  with base as (
    select p.*, (p.familia_id = minha_familia()) as eh_meu,
           case when p.mes = p_mes then p.xp_mes else 0 end as xm
    from perfis p
  ), r as (
    select b.*, rank() over (order by
             case when p_ordem = 'progresso' then b.capitulos else b.xm end desc,
             case when p_ordem = 'progresso' then b.xp else b.capitulos end desc) as posicao
    from base b
    where case when p_ordem = 'progresso' then b.capitulos > 0 else b.xm > 0 end or b.eh_meu
  )
  select r.posicao, r.eh_meu, case when r.eh_meu then r.id end, nullif(trim(r.apelido), ''), r.avatar, r.xp, r.xm,
         r.era, r.sessao_atual, r.capitulos
  from r
  where r.posicao <= 50 or r.eh_meu
  order by r.posicao
$$;

-- Migração: famílias amigas (amizades) viram uma família só, por grupo ligado. Roda uma vez por casa.
do $$
declare semente uuid; g uuid;
begin
  loop
    select a.familia_id into semente from amizades a
    where not exists (select 1 from grupo_casas c where c.casa_id = a.familia_id) limit 1;
    exit when semente is null;
    insert into grupos (nome, codigo)
    values ((select nome from familias where id = semente), upper(substr(md5(gen_random_uuid()::text), 1, 6)))
    returning id into g;
    insert into grupo_casas (grupo_id, casa_id)
    with recursive comp(id) as (
      select semente
      union
      select a.amigo_id from amizades a join comp on a.familia_id = comp.id
    )
    select g, id from comp where not exists (select 1 from grupo_casas c where c.casa_id = comp.id);
  end loop;
end $$;

revoke all on function public.meus_grupos(), public.criar_grupo(text), public.entrar_grupo(text), public.sair_grupo(uuid),
  public.minhas_familias(), public.ranking_familia(), public.ranking_geral(text, text) from public, anon;
grant execute on function public.meus_grupos(), public.criar_grupo(text), public.entrar_grupo(text), public.sair_grupo(uuid),
  public.minhas_familias(), public.ranking_familia(), public.ranking_geral(text, text) to authenticated;
grant select on public.grupos, public.grupo_casas to authenticated;

-- ════════════════════════════════════════════════════════════════════════════
-- v58 — SÓ APELIDO, APAGAR DA NUVEM e RESPONSÁVEL PELA CASA
--   O viajante tem um campo só, o apelido. A coluna `perfis.nome` fica vazia para sempre e o
--   gatilho abaixo tira o nome também de `dados`, mesmo que um app antigo ainda mande.
alter table public.perfis alter column nome drop not null;

create or replace function public.perfis_sem_nome() returns trigger
language plpgsql set search_path = public as $$
begin
  new.nome := null;
  new.dados := coalesce(new.dados, '{}'::jsonb) - 'nome';
  return new;
end $$;
drop trigger if exists perfis_sem_nome on public.perfis;
create trigger perfis_sem_nome before insert or update on public.perfis
  for each row execute function public.perfis_sem_nome();
update public.perfis set nome = null where nome is not null or dados ? 'nome';

-- Apps v37 (amigos): também só o apelido.
create or replace function public.amigos()
returns table (familia_id uuid, familia text, perfil_id text, nome text, tipo text, avatar jsonb,
               xp int, xp_semana int, semana text, sessao_atual text, era text, atualizado timestamptz)
language sql stable security definer set search_path = public as $$
  select f.id, f.nome, p.id, nullif(trim(p.apelido), ''), p.tipo, p.avatar, p.xp, p.xp_semana, p.semana, p.sessao_atual, p.era, p.atualizado
  from amizades a
  join familias f on f.id = a.amigo_id
  join perfis p on p.familia_id = f.id
  where a.familia_id = minha_familia()
$$;

-- Responsável pela casa: o celular que criou a casa (gravado no primeiro membro). Se ele não estiver
-- mais na casa (trocou de celular, saiu), o responsável passa a ser o celular mais antigo da casa.
-- Casas criadas antes da v58 não têm o campo: vale o celular mais antigo.
alter table public.familias add column if not exists responsavel uuid;

create or replace function public.membros_entrada() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'UPDATE' and new.familia_id is distinct from old.familia_id then
    new.criado_em := now();  -- mudou de casa: conta como recém-chegado na nova
  end if;
  return new;
end $$;
drop trigger if exists membros_entrada on public.membros;
create trigger membros_entrada before update on public.membros
  for each row execute function public.membros_entrada();

create or replace function public.membros_primeiro() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  update familias set responsavel = new.user_id where id = new.familia_id and responsavel is null;
  return null;
end $$;
drop trigger if exists membros_primeiro on public.membros;
create trigger membros_primeiro after insert or update of familia_id on public.membros
  for each row execute function public.membros_primeiro();

create or replace function public.responsavel_da_casa(p_casa uuid) returns uuid
language sql stable security definer set search_path = public as $$
  select coalesce(
    (select f.responsavel from familias f join membros m on m.user_id = f.responsavel and m.familia_id = f.id where f.id = p_casa),
    (select m.user_id from membros m where m.familia_id = p_casa order by m.criado_em, m.user_id limit 1))
$$;

create or replace function public.sou_responsavel() returns boolean
language sql stable security definer set search_path = public as $$
  select minha_familia() is not null and responsavel_da_casa(minha_familia()) = auth.uid()
$$;

-- Apaga do servidor a minha casa inteira: perfis e anotações, membros (todos os celulares),
-- amizades e participação nas famílias (as famílias que ficarem sem casa somem).
-- Só o celular responsável pela casa pode.
create or replace function public.apagar_minha_casa() returns void
language plpgsql security definer set search_path = public as $$
declare minha uuid := minha_familia(); gs uuid[];
begin
  if minha is null then return; end if;
  if responsavel_da_casa(minha) is distinct from auth.uid() then
    raise exception 'Só o celular responsável pela casa pode apagar a casa.';
  end if;
  select array_agg(grupo_id) into gs from grupo_casas where casa_id = minha;
  delete from familias where id = minha;
  delete from grupos g where g.id = any(coalesce(gs, '{}'))
    and not exists (select 1 from grupo_casas c where c.grupo_id = g.id);
end $$;

-- Tira só este celular da casa. Os viajantes continuam na casa para os outros celulares.
-- Se era o último celular da casa, a casa é apagada (não fica dado sem dono no servidor).
create or replace function public.sair_da_casa() returns void
language plpgsql security definer set search_path = public as $$
declare minha uuid := minha_familia(); gs uuid[];
begin
  if minha is null then return; end if;
  delete from membros where user_id = auth.uid();
  if not exists (select 1 from membros where familia_id = minha) then
    select array_agg(grupo_id) into gs from grupo_casas where casa_id = minha;
    delete from familias where id = minha;
    delete from grupos g where g.id = any(coalesce(gs, '{}'))
      and not exists (select 1 from grupo_casas c where c.grupo_id = g.id);
  end if;
end $$;

revoke all on function public.apagar_minha_casa(), public.sair_da_casa(), public.sou_responsavel(),
  public.responsavel_da_casa(uuid) from public, anon;
grant execute on function public.apagar_minha_casa(), public.sair_da_casa(), public.sou_responsavel() to authenticated;

-- Avisa a API do Supabase (PostgREST) para enxergar as tabelas e funções novas.
notify pgrst, 'reload schema';
