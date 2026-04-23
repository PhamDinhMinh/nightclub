export const AUTH_QUERY_KEYS = {
  session: ["auth", "session"] as const,
};

export const AUTH_DEMO_CREDENTIALS = {
  email: "demo@nightclub.dev",
  password: "nightclub123",
};

export const AUTH_MESSAGES = {
  invalidCredentials: "Use the demo credentials shown in the form to sign in.",
  invalidPayload: "The submitted payload is not valid.",
  loginSuccess: "Signed in with the demo account.",
};
