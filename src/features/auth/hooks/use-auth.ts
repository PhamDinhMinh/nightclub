"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AUTH_QUERY_KEYS } from "@/features/auth/constants/auth.constants";
import { getAuthSession, login } from "@/features/auth/services/auth.services";

export function useAuthSessionQuery() {
  return useQuery({
    queryFn: getAuthSession,
    queryKey: AUTH_QUERY_KEYS.session,
  });
}

export function useLoginMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: ({ session }) => {
      queryClient.setQueryData(AUTH_QUERY_KEYS.session, session);
    },
  });
}
