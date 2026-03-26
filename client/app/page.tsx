import Link from "next/link";

export default function Home() {
  return (
      <main className="auth-bg flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-2xl rounded-3xl border border-white/50 bg-white/85 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Task Management App</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Plan smarter. Deliver faster.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
          A clean and responsive workspace for teams to track tasks, priorities, and progress in one place.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/login"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-xl border border-indigo-600 px-6 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Register
          </Link>
        </div>
      </section>
    </main>
      
  );
}
