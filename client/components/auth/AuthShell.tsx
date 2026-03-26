import type { ReactNode } from "react";
import Link from "next/link";

type AuthShellProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  submitLabel: string;
  children: ReactNode;
};

export function AuthShell({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  submitLabel,
  children,
}: Readonly<AuthShellProps>) {
  return (
    <main className="auth-bg flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <section className="w-full max-w-md rounded-3xl border border-white/50 bg-white/85 p-6 shadow-2xl backdrop-blur-md sm:p-8">
        <header className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Task Management App
          </p>
          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </header>

        <div className="mt-7 space-y-4">{children}</div>

        <button
          className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 text-base font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
          form="auth-form"
        >
          {submitLabel}
        </button>

        <p className="mt-5 text-center text-sm text-slate-600">
          {ctaLabel}{" "}
          <Link href={ctaHref} className="font-semibold text-indigo-600 hover:text-indigo-500">
            {ctaHref === "/register" ? "Create account" : "Sign in"}
          </Link>
        </p>
      </section>
    </main>
  );
}

export function InputField({
  label,
  id,
  type = "text",
  placeholder,
  onChange,
}: Readonly<{
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}>) {
  return (
    <label className="block space-y-1.5" htmlFor={id}>
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-xl border px-4 py-3"
      />
    </label>
  );
}
