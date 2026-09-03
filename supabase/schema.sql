-- GoldSilverHQ central-bank gold
-- Paste into the GSHQ project SQL editor (https://wixwyxahyutsimxsaqgx.supabase.co)
-- and run once. Anon can SELECT; only service_role can write.
--
-- TWO METRICS — do not mix:
--   reported_delta  NET change in publicly reported official holdings
--                   (IMF IFS year-end / WGC monthly blogs). Includes swaps.
--                   Does NOT include unreported buying.
--   wgc_net         World Gold Council Gold Demand Trends official-sector demand.
--                   NET. WORLD includes Metals Focus' estimate of unreported buying
--                   (57% of 2025 GDT total). Named-country GDT figures are sparse.
-- There is no reliable GROSS-purchases series for all countries. WGC monthly charts
-- plot gross purchases vs gross sales vs net, but they do not publish the gross
-- country table. Do not label reported_delta or wgc_net as "gross buys".
--
-- 2026 months are reported_delta (WGC monthly). 2026 GDT quarters are wgc_net WORLD.
-- window='ytd' rows are cumulative, not that month's flow — filter scope='period'
-- for charts.



drop table if exists public.cb_flows cascade;
drop table if exists public.cb_holdings cascade;
drop table if exists public.cb_entities cascade;
drop table if exists public.cb_metrics cascade;
drop table if exists public.cb_purchases cascade;
drop table if exists public.cb_world cascade;
drop table if exists public.cb_countries cascade;

create table public.cb_metrics (
  id text primary key,
  definition text not null
);

insert into public.cb_metrics (id, definition) values
  ('reported_delta', 'Net change in publicly reported official gold holdings (IMF IFS / WGC monthly). Signed tonnes. Includes swaps and reclassifications. Does NOT include unreported buying. Not gross purchases.'),
  ('wgc_net', 'World Gold Council Gold Demand Trends official-sector demand. Net tonnes. WORLD total includes an estimate of unreported buying and must not be compared to the sum of reported_delta.');

create table public.cb_entities (
  id text primary key,
  name text not null,
  iso3 text,
  kind text not null check (kind in ('country', 'institution', 'aggregate')),
  stock_tonnes numeric,
  stock_as_of date,
  updated_at timestamptz not null default now()
);

create table public.cb_holdings (
  entity_id text not null references public.cb_entities(id) on delete cascade,
  freq text not null check (freq in ('year', 'month')),
  period date not null,
  tonnes numeric not null check (tonnes >= 0),
  source text not null,
  primary key (entity_id, freq, period)
);

create table public.cb_flows (
  entity_id text not null references public.cb_entities(id) on delete cascade,
  freq text not null check (freq in ('year', 'month', 'quarter')),
  period date not null,
  metric text not null references public.cb_metrics(id),
  tonnes numeric not null,
  scope text not null default 'period' check (scope in ('period', 'ytd')),
  source text not null,
  note text,
  primary key (entity_id, freq, period, metric, scope)
);

alter table public.cb_metrics enable row level security;
alter table public.cb_entities enable row level security;
alter table public.cb_holdings enable row level security;
alter table public.cb_flows enable row level security;

drop policy if exists "public read cb_metrics" on public.cb_metrics;
create policy "public read cb_metrics" on public.cb_metrics for select using (true);
drop policy if exists "public read cb_entities" on public.cb_entities;
create policy "public read cb_entities" on public.cb_entities for select using (true);
drop policy if exists "public read cb_holdings" on public.cb_holdings;
create policy "public read cb_holdings" on public.cb_holdings for select using (true);
drop policy if exists "public read cb_flows" on public.cb_flows;
create policy "public read cb_flows" on public.cb_flows for select using (true);

grant select on public.cb_metrics, public.cb_entities, public.cb_holdings, public.cb_flows to anon, authenticated;
grant all on public.cb_metrics, public.cb_entities, public.cb_holdings, public.cb_flows to service_role;

create index if not exists cb_holdings_period_idx on public.cb_holdings (freq, period);
create index if not exists cb_flows_metric_idx on public.cb_flows (metric, freq, period);
