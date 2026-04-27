import Link from "next/link";
import { perros } from "./data";

export default function PerrosPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Perros en adopcion</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {perros.map((perro) => (
          <li key={perro.id}>
            <Link
              href={`/perros/${perro.id}`}
              className="block rounded-lg border bg-white p-4 shadow-sm hover:border-blue-300"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-semibold text-slate-900">{perro.nombre}</h2>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                {perro.raza} · {perro.edad} · {perro.tamaño}
              </p>
              <p className="mt-2 text-sm text-slate-600 line-clamp-2">{perro.descripcion}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}