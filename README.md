# AURA GEMS — Luxury Jewelry E-commerce (2026)

A modern, premium jewelry experience with subtle physics-inspired motion, 3D product viewer, and admin tooling.

## Tech Stack
- Next.js App Router + TypeScript + Tailwind
- Prisma + SQLite (dev)
- NextAuth-ready auth placeholders

## Getting Started
```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

## Admin Credentials (Dev)
- Email: `admin@auragems.test`
- Password: `admin-password-hash` (placeholder, replace with real hash)

## Scripts
- `npm run dev` — start dev server
- `npm run prisma:migrate` — run migrations
- `npm run prisma:seed` — seed database
- `npm run test` — run basic checks

## Deployment
- Vercel: set `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`.
- Use Postgres for production by updating Prisma datasource and migrating.

## Model Pipeline Guide
See `docs/model-pipeline.md` for Blender → GLB steps.

## Testing Checklist
See `docs/testing-checklist.md` for manual QA.

## Lighthouse Checklist
- Use optimized images (`.webp` or `.avif`).
- Defer 3D viewer load until user click.
- Enable caching headers on assets.

## Notes
- 3D viewer loads Three.js on demand.
- Placeholder HDRI files referenced in `/public/images`.
