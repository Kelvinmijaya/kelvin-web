# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server on port 9292
npm run build      # Production build
npm run lint       # ESLint (next/core-web-vitals)
npm run test       # Run tests with Vitest (watch mode)
npm run coverage   # Run tests with coverage report
ANALYZE=true npm run build  # Bundle analysis
```

Run a single test file:
```bash
npx vitest run app/(public)/utils/__test__/fetcher.test.tsx
```

## Architecture

This is a Next.js personal website (kelvinmijaya.com) using the App Router with two route groups:

### Route Groups

**`app/(public)/`** — Public-facing site
- Static homepage, portfolio, articles list, playground pages
- Layout wraps content with `NavBar` and `Footer`
- Server-side data fetching via `useGetArticles` (hits `NEXT_PUBLIC_API_URL`)
- SWR used for client-side data with shared config in `utils/swrConfig.tsx` and `utils/fetcher.tsx`

**`app/(admin)/`** — Admin dashboard (auth-protected)
- Login page + CRUD for articles
- SWR utilities in `utils/swrUtils.tsx` (fetcher + config + shared types)
- Uses `@headlessui/react` for UI components

### Auth Flow

`middleware.ts` protects `/dashboard/:path*` and `/login` routes by:
1. Checking for `access-token`/`refresh-token` cookies
2. Validating against `NEXT_PUBLIC_API_URL/auth` endpoint
3. Redirecting unauthenticated users to `/login`, authenticated users away from `/login` to `/dashboard`

### Backend

The backend is a separate Go REST API repo (`kelvin-rest-api`). All API calls use `NEXT_PUBLIC_API_URL` env var with `credentials: 'include'` for cookie-based auth.

### Key Conventions

- Dark mode uses Tailwind's `class` strategy — toggled via `useColorMode` hook (admin)
- Tests use Vitest + jsdom + `@testing-library/react`; test files are colocated in `__test__` or `__tests__` subdirectories
- `dompurify` is used for HTML sanitization in article rendering