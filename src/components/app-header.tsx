import { ThemeToggle } from "@/components/theme-toggle";

export function AppHeader() {
  return (
    <header className="border-border/70 bg-card/85 flex flex-col gap-4 rounded-3xl border px-6 py-6 shadow-lg shadow-black/5 backdrop-blur sm:flex-row sm:items-start sm:justify-between">
      <div className="max-w-2xl">
        <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">
          Feature-first starter
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Next.js setup with shadcn/ui, React Query, Zustand, and dark mode.
        </h1>
        <p className="text-muted-foreground mt-3 text-sm leading-7 sm:text-base">
          The sample `auth` feature separates UI, services, hooks, schemas, and types while keeping
          server state and client UI state clearly split.
        </p>
      </div>

      <ThemeToggle />
    </header>
  );
}
