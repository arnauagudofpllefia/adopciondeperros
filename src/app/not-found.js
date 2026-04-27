import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-bold text-slate-900">No se encontró</h1>
      <p className="text-slate-600">Esta página no existe o el perro no está disponible para adopción.</p>
      <Link href="/" className="text-blue-600 hover:underline">Volver al inicio</Link>
    </div>
  );
}