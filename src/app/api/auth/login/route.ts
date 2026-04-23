import { NextResponse } from "next/server";
import { AUTH_DEMO_CREDENTIALS, AUTH_MESSAGES } from "@/features/auth/constants/auth.constants";
import { loginSchema } from "@/features/auth/schemas/auth.schemas";
import type { LoginResponse } from "@/features/auth/types/auth.types";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsedPayload = loginSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return NextResponse.json(
      {
        message: parsedPayload.error.issues[0]?.message ?? AUTH_MESSAGES.invalidPayload,
      },
      { status: 400 },
    );
  }

  const { email, password } = parsedPayload.data;

  if (email !== AUTH_DEMO_CREDENTIALS.email || password !== AUTH_DEMO_CREDENTIALS.password) {
    return NextResponse.json(
      {
        message: AUTH_MESSAGES.invalidCredentials,
      },
      { status: 401 },
    );
  }

  const loginTime = new Date().toISOString();

  const response: LoginResponse = {
    message: AUTH_MESSAGES.loginSuccess,
    session: {
      loggedInAt: loginTime,
      user: {
        id: "auth-demo-user",
        email,
        displayName: "Nightclub Demo",
        lastLoginAt: loginTime,
        role: "admin",
      },
    },
  };

  return NextResponse.json(response);
}
