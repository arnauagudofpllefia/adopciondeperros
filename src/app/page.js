import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center gap-8 px-6 py-16">
      <section className="w-full  border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Adopcion de perros</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Mira los perros que tenemos en adopcion y encuentra el que mejor encaje contigo.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/perros"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Ver perros
          </Link>
          <Link
            href="/sobre"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Sobre nosotros
          </Link>
        </div>

      </section>
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Adopta a un perro (porfa)</h1>
        <p className="text-lg text-slate-600">
          Como no adoptes a un perro, el perro se muere. Y tú te mueres un poco también. Adopta a un perro, porfa.
        </p>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <img src="https://img.freepik.com/vector-premium/emoji-imagenes-emocion-suplicando-suplicando-triste-llorando-o-orando_1303870-210.jpg?w=360" alt="Perro adorable" className=" max-w-full rounded-md object-cover" />
        </div>
      </section>

    </main>
  );
}
