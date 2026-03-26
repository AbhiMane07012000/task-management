"use client";

import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: any) => api.post("/auth/register", data),
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: any) => api.post("/auth/login", data),
  });
};