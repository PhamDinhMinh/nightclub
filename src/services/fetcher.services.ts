import type { ApiErrorResponse } from "@/types/api.types";

export async function requestJson<T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
  const response = await fetch(input, {
    ...init,
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  const payload = (await response.json().catch(() => null)) as T | ApiErrorResponse | null;

  if (!response.ok) {
    throw new Error((payload as ApiErrorResponse | null)?.message ?? "Request failed.");
  }

  return payload as T;
}
