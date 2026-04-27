import { notFound } from "next/navigation";
import { perros } from "../data";

export function generateStaticParams() {
  return perros.map((perro) => ({ id: String(perro.id) }));
}

export default async function PerroDetailPage({ params }) {
  const { id } = await params;
  const perro = perros.find((item) => String(item.id) === id);

  if (!perro) notFound();

  return (
    <article className="space-y-4">
      <p className="text-sm uppercase tracking-wide text-blue-600">Perfil de adopcion</p>
      <h1 className="text-3xl font-bold text-slate-900">{perro.nombre}</h1>
      <p className="text-slate-600">
        {perro.raza} · {perro.edad} · {perro.tamaño} · {perro.genero}
      </p>
      <p className="text-slate-600">{perro.descripcion}</p>
      <p
        className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
          perro.adoptado ? "bg-slate-200 text-slate-700" : "bg-emerald-100 text-emerald-700"
        }`}
      >
        {perro.adoptado ? "Este perro ya fue adoptado" : "Disponible para adopcion"}
      </p>
    </article>
  );
}