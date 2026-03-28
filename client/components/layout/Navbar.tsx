import Link from "next/link";



const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-transparent">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-bold tracking-[0.18em] text-indigo-700 uppercase">
          TaskFlow
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;