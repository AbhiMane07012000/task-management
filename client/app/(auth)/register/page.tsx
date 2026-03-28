"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { AuthShell, InputField } from "@/components/auth/AuthShell";
import { useRegister } from "@/hooks/useAuth";

const RegisterPage = () => {
  const { mutate, isPending } = useRegister();
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
        onSuccess: () => {
          // ✅ No token handling here
          toast.success("Registration successful!");

          // 👉 redirect to login
          router.push("/login");
        },
        onError: (err: any) => {
          toast.error(
            err.response?.data ||
              "Registration failed. Please try again."
          );
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
        <InputField
          id="name"
          name="name" 
          label="Full name"
          placeholder="Jane Doe"
          onChange={handleChange}
        />

        <InputField
          id="email"
          name="email" 
          label="Email address"
          type="email"
          placeholder="example@email.com"
          onChange={handleChange}
        />

        <InputField
          id="password"
          name="password" 
          label="Password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
      </form>
    </AuthShell>
  );
};

export default RegisterPage;