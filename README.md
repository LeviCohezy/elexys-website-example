# elexys-website-example

Homepage concept for Elexys — wholesale electricity and gas for energy suppliers.

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion.

```bash
npm install
npm run dev
```

- Brand colours (sampled from the logo) live in `app/globals.css`: `brand` `#0B0AC0`, `sky` `#71BCD4`.
- Photography in `public/images/` was generated with ChatGPT.
- Stats, partner names and contract details on the page are placeholder copy.

## Deploy

GitHub Pages: https://levicohezy.github.io/elexys-website-example/

```bash
./scripts/deploy-pages.sh
```

Builds a static export (`output: "export"`) with the `/elexys-website-example` base path
and force-pushes `out/` to the `gh-pages` branch, which Pages serves. Locally the site runs at `/`.
Image paths go through `app/lib/asset.ts` because `next/image` doesn't prefix `basePath`.
