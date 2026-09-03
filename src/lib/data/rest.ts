/** Server-only REST to GSHQ + goldenagestocks. Do not import from client components.
 *  GSHQ tables after supabase/gshq.sql: cb_metrics, cb_entities, cb_holdings, cb_flows. */

const GAS_URL = "https://cjedzfppjimygqzeqpxb.supabase.co";
const GSHQ_URL = "https://wixwyxahyutsimxsaqgx.supabase.co";
const GAS_ANON =
  (typeof process !== "undefined" && process.env.GAS_SUPABASE_ANON) ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqZWR6ZnBwamlteWdxemVxcHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3OTEyMDYsImV4cCI6MjEwMjM2NzIwNn0.yzzlq0dSspvl0jL8T4udVk5w34jmIFjOzOjDOfNJoYQ";

const GSHQ_ANON =
  (typeof process !== "undefined" && process.env.GSHQ_SUPABASE_ANON) ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpeHd5eGFoeXV0c2lteHNhcWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwNTM0OTMsImV4cCI6MjEwMzYyOTQ5M30.AA6J7G_X-MpjpVEA4sohjQmBU2wKdGcEGnKGeloYLOQ";

function env(name: string) {
  const v = typeof process !== "undefined" ? process.env[name] : undefined;
  return v && v.trim() ? v.trim() : "";
}

export function gshqConfigured() {
  return Boolean(GSHQ_ANON);
}

export function gasConfigured() {
  return Boolean(GAS_ANON);
}

async function rest<T>(base: string, key: string, path: string): Promise<T> {
  const res = await fetch(`${base.replace(/\/$/, "")}/rest/v1/${path}`, {
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      Accept: "application/json",
    },
  });
  if (!res.ok) throw new Error(`supabase ${path} ${res.status}`);
  return res.json() as Promise<T>;
}

export function gshq<T>(path: string) {
  return rest<T>(env("GSHQ_SUPABASE_URL") || GSHQ_URL, GSHQ_ANON, path);
}

export function gas<T>(path: string) {
  return rest<T>(env("GAS_SUPABASE_URL") || GAS_URL, GAS_ANON, path);
}
