export default function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-slate-900">Adopta a un perro (porfa)</h1>
      <p className="text-lg text-slate-600">
        Como no adoptes a un perro, el perro se muere. Y tú te mueres un poco también. Adopta a un perro, porfa.
      </p>
      <div className="rounded-lg border bg-white p-4 shadow-sm">
        <img src="https://img.freepik.com/vector-premium/emoji-imagenes-emocion-suplicando-suplicando-triste-llorando-o-orando_1303870-210.jpg?w=360" alt="Perro adorable" className="w-full rounded-md object-cover" />
      </div>
    </section>
  );
}