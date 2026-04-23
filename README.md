# Nightclub

Feature-first Next.js starter using the App Router, TypeScript, Tailwind CSS v4, shadcn/ui,
TanStack Query, Zustand, react-hook-form, zod, and next-themes.

## Scripts

```bash
yarn dev
yarn build
yarn start
yarn lint
yarn lint:fix
yarn format
yarn format:check
```

## Structure

```text
src/
├── app/
├── components/
├── constants/
├── features/
├── hooks/
├── lib/
├── services/
├── stores/
├── types/
└── utils/
```

## Sample Feature

- `src/features/auth/components`: auth UI
- `src/features/auth/hooks`: TanStack Query hooks
- `src/features/auth/services`: API access layer
- `src/features/auth/schemas`: zod schemas
- `src/features/auth/types`: feature data contracts

## Notes

- `components.json` configures shadcn/ui aliases for this project.
- `src/components/providers` wires `next-themes` and `@tanstack/react-query`.
- `src/stores/ui.store.ts` is intentionally limited to lightweight UI state.
