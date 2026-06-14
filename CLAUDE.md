# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (no --fix flag needed, runs eslint directly)
```

No test suite is configured yet.

## Stack

- **Next.js 16.2.9** — App Router only; no Pages Router in this project
- **React 19.2.4**
- **TypeScript 5** (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **ESLint 9** with flat config (`eslint.config.mjs`)

## Critical: Breaking Changes vs. Prior Next.js Knowledge

This project uses Next.js 16, which has breaking changes from versions you may know. **Always read `node_modules/next/dist/docs/` before writing any Next.js-specific code.** Key docs:

- File conventions: `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/`
- Functions/hooks: `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/`
- Config: `node_modules/next/dist/docs/01-app/03-api-reference/05-config/`
- Guides: `node_modules/next/dist/docs/01-app/02-guides/`

Known breaking changes to watch for:

**`params` and `searchParams` are now Promises** — layouts and pages must `await` them:
```tsx
// app/dashboard/[team]/layout.tsx
export default async function Layout({ params }: { params: Promise<{ team: string }> }) {
  const { team } = await params
}
```

**`use-router` (client-side)** — `useRouter` from `next/navigation` still works for client components; see `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/use-router.md` for current API.

**Instant navigation** — if fixing slow client-side navigations, `Suspense` alone is not enough; export `unstable_instant` from the route (see `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.mdx`).

## Tailwind CSS v4

No `tailwind.config.js`. Configuration lives in CSS via `@theme` in [app/globals.css](app/globals.css):

```css
@import "tailwindcss";   /* replaces @tailwind base/components/utilities */

@theme inline {
  --color-background: var(--background);
  --font-sans: var(--font-geist-sans);
}
```

Custom design tokens are CSS variables defined in `:root` and referenced in `@theme inline`.

## Project Structure

```
app/
  layout.tsx     # root layout — sets <html>, <body>, Geist fonts
  page.tsx       # home route
  globals.css    # Tailwind v4 entry + CSS custom properties
public/          # static assets served at /
next.config.ts   # Next.js config (TypeScript, ESM export default)
```

Path alias `@/*` maps to the repo root (e.g. `@/app/...`, `@/lib/...`).
