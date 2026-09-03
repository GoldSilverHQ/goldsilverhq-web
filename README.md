# GoldSilverHQ

Repo: [`GoldSilverHQ/goldsilverhq-web`](https://github.com/GoldSilverHQ/goldsilverhq-web)

**goldsilverhq.com** — a topical map of sound money and monetary history.

Media only. Not investment advice.

## Map

| Pillar | Path | Reader question |
| --- | --- | --- |
| Sound money | `/sound-money` | What does it mean? |
| History of money | `/history` | What happened? |
| Gold & silver in practice | `/gold-silver` | How do people handle metal? |

History is three levels: pillar → cluster → episode. See [`topical-map.md`](./topical-map.md).

Homepage `/` is the metals dashboard. `/desk` is the longer tape (1980, dollar, central-bank gold). `/maps` and `/quiz` are tools.

## Search Console

- `https://goldsilverhq.com/robots.txt`
- `https://goldsilverhq.com/sitemap.xml`

Submit the sitemap after the domain points at this app. Until then, the same paths exist on the current host.

## Stack

TanStack Start (Vite) + React. Domain `goldsilverhq.com`. Needs a Node server (Vercel), not a static folder upload.

## Run

```bash
npm ci
npm run dev      # http://127.0.0.1:8080
npm run typecheck
npm run test
npm run build
```
