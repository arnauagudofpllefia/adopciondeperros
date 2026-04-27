import Link from "next/link";

export default function SiteLayout({ children }) {
  return (
    <>
      <header className="border-b bg-white">
        <nav className="mx-auto flex max-w-5xl flex-wrap gap-6 px-6 py-4">
          <Link className="font-medium hover:text-blue-600" href="/">Inicio</Link>
          <Link className="font-medium hover:text-blue-600" href="/sobre">Sobre Nosotros</Link>
          <Link className="font-medium hover:text-blue-600" href="/perros">Perros</Link>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </>
  );}