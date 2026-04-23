export type UserRole = "admin" | "member";

export interface AuthUser {
  id: string;
  email: string;
  displayName: string;
  role: UserRole;
  lastLoginAt: string;
}

export interface AuthSession {
  user: AuthUser | null;
  loggedInAt: string | null;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  session: AuthSession;
}
