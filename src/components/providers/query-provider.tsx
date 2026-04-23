"use client";

import { QueryClient, QueryClientProvider, type DefaultOptions } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { useState } from "react";

const defaultOptions: DefaultOptions = {
  queries: {
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 60_000,
  },
};

interface QueryProviderProps {
  children: ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions,
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
