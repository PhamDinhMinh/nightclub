import { AppHeader } from "@/components/app-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthPanel } from "@/features/auth/components/auth-panel";

const architectureItems = [
  "shadcn/ui handles reusable UI primitives in src/components/ui.",
  "TanStack Query manages auth session server state and login mutation caching.",
  "Zustand is limited to lightweight UI state for the auth hints panel.",
  "react-hook-form + zod power the login form with schema-based validation.",
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-10">
      <AppHeader />

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <AuthPanel />

        <Card className="border-border/70 bg-card/90 shadow-lg shadow-black/5 backdrop-blur">
          <CardHeader>
            <CardTitle>Applied project rules</CardTitle>
            <CardDescription>
              The sample follows the feature-first structure and naming conventions from
              `docs/rules.md`.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-muted-foreground space-y-3 text-sm leading-6">
              {architectureItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="bg-primary mt-2 h-2 w-2 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
