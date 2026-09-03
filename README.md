# GoldSilverHQ

Repo: [`GoldSilverHQ/goldsilverhq-web`](https://github.com/GoldSilverHQ/goldsilverhq-web)

**goldsilverhq.com** — sound money, monetary history, gold and silver.

This commit is the topical-map skeleton: pillar → cluster → episode, internal links, and the black / gold / silver design. Copy is outline-level on purpose. First live episode: Weimar 1923.

Media only. Not investment advice. Checkout: [@GoldSilverHQ](https://x.com/GoldSilverHQ).

## Map

| Pillar | Path |
| --- | --- |
| Sound money | `/sound-money` |
| History of money | `/history` |
| Gold & silver in practice | `/gold-silver` |
| Desk | `/desk` |
| Quiz | `/quiz` |
| Kit | `/kit` |

Phase 1 cluster: `/history/20th-century` → `/history/20th-century/weimar-1923`.

See [`topical-map.md`](./topical-map.md).

## Stack

TanStack Start (Vite) + React. Grok preview is the working copy; this repo is the backup. Domain `goldsilverhq.com` (CNAME kept). GitHub Pages is **not** auto-deploying this source tree — it needs a Node server (Vercel), not a static folder upload.

## Run

```bash
npm ci
npm run dev      # http://127.0.0.1:8080
npm run typecheck
npm run build
```

## Convert

Newsletter + *Sound Money Survival Kit* ebook sit on every cluster and episode. Wire the form to your list when you are ready. The kit landing is `/kit`. The quiz is `/quiz`.
