-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor) to create tables.

-- Projects (portfolio projects + past commission work)
-- image: full URL (https://...) or path in Storage bucket; used in <img src>. Nullable = optional image.
create table if not exists public.projects (
  id text primary key,
  title text not null,
  image text,
  link text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Work experience (jobs / roles)
-- logo: full URL or path; used in <img src> on Home and Experience detail.
create table if not exists public.work_experience (
  id text primary key,
  org text not null,
  logo text not null,
  position text not null,
  description text not null,
  details text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Education (schools / degrees)
-- logo: full URL or path; used in <img src> on Home.
create table if not exists public.education (
  id text primary key,
  name text not null,
  logo text not null,
  link text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Allow public read access (no auth required for portfolio content)
alter table public.projects enable row level security;
alter table public.work_experience enable row level security;
alter table public.education enable row level security;

create policy "Allow public read access on projects"
  on public.projects for select
  using (true);

create policy "Allow public read access on work_experience"
  on public.work_experience for select
  using (true);

create policy "Allow public read access on education"
  on public.education for select
  using (true);
