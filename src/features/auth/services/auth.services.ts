import type { AuthSession, LoginInput, LoginResponse } from "@/features/auth/types/auth.types";
import { requestJson } from "@/services/fetcher.services";

export function getAuthSession() {
  return requestJson<AuthSession>("/api/auth/session");
}

export function login(payload: LoginInput) {
  return requestJson<LoginResponse>("/api/auth/login", {
    body: JSON.stringify(payload),
    method: "POST",
  });
}
