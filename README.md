# elexys-website-example

Website concept for Elexys, energy supplier (electricity and natural gas) for Belgian businesses.
Dutch (nl-BE). Next.js (App Router, static export) · TypeScript · Tailwind CSS v4 · Motion.

```bash
npm install
npm run dev
```

## Content

- `content/scraped/` holds www.elexys.be scraped to Markdown (one file per page, see its README).
  Re-run with `scripts/scrape_elexys.py`.
- Pages read that Markdown at build time: blog posts (`app/lib/blog.ts`), FAQ (`app/lib/faqs.ts`),
  market indices (`app/lib/insights.ts`), market updates and legal pages. Products live in
  `app/lib/products.ts`; contact details and navigation in `app/lib/site.ts`.
- Photography in `public/images/` was generated with ChatGPT. Blog/FAQ illustrations and market-update
  PDFs are loaded from elexys.be.
- Forms (contact, newsletter, application) open a pre-filled e-mail: there is no backend.
- Brand colours (sampled from the logo) live in `app/globals.css`: `brand` `#0B0AC0`, `sky` `#71BCD4`.

## Deploy

GitHub Pages: https://levicohezy.github.io/elexys-website-example/

```bash
./scripts/deploy-pages.sh
```

Builds a static export (`output: "export"`) with the `/elexys-website-example` base path
and force-pushes `out/` to the `gh-pages` branch, which Pages serves. Locally the site runs at `/`.
Image paths go through `app/lib/asset.ts` because `next/image` doesn't prefix `basePath`.
