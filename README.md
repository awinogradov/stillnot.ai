# stillnot.ai

Anton Vinogradov — personal website. Built with [Astro](https://astro.build), TypeScript and Tailwind CSS, run with [Bun](https://bun.sh).

## Development

```sh
bun install
bun run dev      # start the dev server at http://localhost:4321
bun run build    # build the static site to ./dist
bun run preview  # preview the production build locally
```

## Deployment

Pushing to `main` builds and deploys the static site to GitHub Pages via the
workflow in `.github/workflows/deploy.yml`.
