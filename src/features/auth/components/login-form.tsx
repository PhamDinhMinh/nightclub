"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AUTH_DEMO_CREDENTIALS } from "@/features/auth/constants/auth.constants";
import { useLoginMutation } from "@/features/auth/hooks/use-auth";
import { loginSchema } from "@/features/auth/schemas/auth.schemas";
import type { LoginInput } from "@/features/auth/types/auth.types";
import { parseError } from "@/utils/parse-error";

export function LoginForm() {
  const loginMutation = useLoginMutation();
  const form = useForm<LoginInput>({
    defaultValues: AUTH_DEMO_CREDENTIALS,
    resolver: zodResolver(loginSchema),
  });

  const handleSubmit = form.handleSubmit(async (values) => {
    form.clearErrors("root");

    try {
      await loginMutation.mutateAsync(values);
    } catch (error) {
      form.setError("root", {
        message: parseError(error),
      });
    }
  });

  return (
    <Card className="border-border/70 bg-card/90 shadow-lg shadow-black/5">
      <CardHeader>
        <CardTitle>Demo auth feature</CardTitle>
        <CardDescription>
          This form uses shadcn/ui fields, react-hook-form, zod validation, and a TanStack Query
          mutation that calls the auth service layer.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="demo@nightclub.dev" type="email" {...field} />
                  </FormControl>
                  <FormDescription>
                    Use the provided demo account for the sample login.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="nightclub123" type="password" {...field} />
                  </FormControl>
                  <FormDescription>
                    The schema lives in `auth.schemas.ts` and is reused by the API route.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.formState.errors.root?.message ? (
              <p className="text-destructive text-sm font-medium">
                {form.formState.errors.root.message}
              </p>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-muted-foreground text-sm leading-6">
                <p>Email: {AUTH_DEMO_CREDENTIALS.email}</p>
                <p>Password: {AUTH_DEMO_CREDENTIALS.password}</p>
              </div>

              <Button disabled={loginMutation.isPending} type="submit">
                {loginMutation.isPending ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
