import { NextResponse } from "next/server";
import type { AuthSession } from "@/features/auth/types/auth.types";

export async function GET() {
  const session: AuthSession = {
    loggedInAt: null,
    user: null,
  };

  return NextResponse.json(session);
}
