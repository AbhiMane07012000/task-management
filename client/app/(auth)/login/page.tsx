"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {toast} from "react-toastify";

import { AuthShell, InputField } from "@/components/auth/AuthShell";
import { useLogin } from "@/hooks/useAuth";


export default function LoginPage() {
  const router = useRouter();

  const { mutate, isPending, isError, error } = useLogin();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    mutate(form, {
      onSuccess: (res) => {
        // 🔐 store token (adjust based on your API response)
        const token = res?.data?.token;

        if (token) {
          localStorage.setItem("token", token);
        }
        toast.success("Login successful!");
        router.push("/"); // change redirect to dashboard
      },
      onError: (err: any) => {
        toast.error(err.response?.data || "Login failed. Please check your credentials and try again.");
      }
    });
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to manage your tasks"
      submitLabel={isPending ? "Logging in..." : "Login"}
      ctaLabel="New here?"
      ctaHref="/register"
    >
      <form id="auth-form" className="space-y-4" onSubmit={handleSubmit}>
        <InputField
          id="email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          onChange={handleChange}
        />

        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
      </form>
    </AuthShell>
  );
}