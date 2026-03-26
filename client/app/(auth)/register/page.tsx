"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { AuthShell, InputField } from "@/components/auth/AuthShell";
import { useRegister } from "@/hooks/useAuth";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const { mutate, isPending, isSuccess, isError, error } = useRegister();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

mutate(
    {
      ...form,
      role: "USER",
    },
    {
      onSuccess: (res) => {
        // optional: if your API returns token on register
        const token = res?.data?.token;

        if (token) {
          localStorage.setItem("token", token);
        }
        toast.success("Registration successful!");
        router.push("/"); // redirect to dashboard
      },
      onError: (err: any) => {
        toast.error( err.response?.data || "Registration failed. Please try again." );
      },
    }
  );
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Join your team workspace"
      submitLabel={isPending ? "Registering..." : "Register"}
      ctaLabel="Already have an account?"
      ctaHref="/login"
    >
      <form id="auth-form" className="space-y-4" onSubmit={handleSubmit}>
        <InputField id="name" label="Full name" placeholder="Jane Doe" onChange={handleChange} />
        <InputField id="email" label="Email address" type="email" placeholder="example@email.com" onChange={handleChange} />
        <InputField id="password" label="Password" type="password" placeholder="Enter your password" onChange={handleChange} />
      </form>
    </AuthShell>
  );
}