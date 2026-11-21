-- A Jornada — banco no Supabase (sincronização da família + amigos)
-- Rodar inteiro no SQL Editor do projeto. Pode rodar de novo sem quebrar (idempotente).
--
-- Modelo:
--   familia  = uma casa. Tem um código de AMIGO (público, para trocar com amigos)
--              e um CONVITE (secreto, para entrar com outro celular na mesma família).
--   membros  = cada aparelho logado (login anônimo do Supabase) pertence a uma família.
--   perfis   = os viajantes (adulto/criança) com todo o progresso em `dados`.
--   amizades = famílias amigas veem nome, avatar, nível, XP da semana e onde estão no mapa.
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
