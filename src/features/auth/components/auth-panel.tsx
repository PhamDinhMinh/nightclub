"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthSessionQuery } from "@/features/auth/hooks/use-auth";
import { useUiStore } from "@/stores/ui.store";
import { formatDate } from "@/utils/format-date";
import { LoginForm } from "@/features/auth/components/login-form";

export function AuthPanel() {
  const { isAuthHintsOpen, toggleAuthHints } = useUiStore();
  const sessionQuery = useAuthSessionQuery();

  const session = sessionQuery.data;
  const isLoggedIn = Boolean(session?.user);

  return (
    <div className="grid gap-6">
      <LoginForm />

      <Card className="border-border/70 bg-card/90 shadow-lg shadow-black/5">
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle>Auth session state</CardTitle>
            <CardDescription>
              Server state stays in TanStack Query. The toggle below is the only piece held in
              Zustand.
            </CardDescription>
          </div>

          <Button onClick={toggleAuthHints} type="button" variant="secondary">
            <Sparkles className="size-4" />
            {isAuthHintsOpen ? "Hide UI notes" : "Show UI notes"}
          </Button>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="border-border/80 bg-background/80 grid gap-4 rounded-2xl border p-4 text-sm sm:grid-cols-2">
            <div>
              <p className="text-muted-foreground text-xs font-semibold tracking-[0.24em] uppercase">
                Session status
              </p>
              <p className="mt-2 text-base font-medium">
                {sessionQuery.isPending
                  ? "Loading session..."
                  : isLoggedIn
                    ? "Authenticated"
                    : "Guest"}
              </p>
            </div>

            <div>
              <p className="text-muted-foreground text-xs font-semibold tracking-[0.24em] uppercase">
                Last update
              </p>
              <p className="mt-2 text-base font-medium">
                {session?.loggedInAt ? formatDate(session.loggedInAt) : "No login yet"}
              </p>
            </div>
          </div>

          {isLoggedIn && session?.user ? (
            <div className="border-border/80 bg-secondary/50 rounded-2xl border p-4 text-sm leading-6">
              <p>
                Signed in as <strong>{session.user.displayName}</strong> ({session.user.email})
              </p>
              <p className="text-muted-foreground">
                Role: {session.user.role} • Last login: {formatDate(session.user.lastLoginAt)}
              </p>
            </div>
          ) : null}

          {isAuthHintsOpen ? (
            <div className="border-primary/40 bg-primary/5 text-muted-foreground rounded-2xl border border-dashed p-4 text-sm leading-6">
              Zustand only controls whether these architecture notes are visible. Session fetch and
              login mutation data remain in React Query, which keeps client UI state and server
              state separated.
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
