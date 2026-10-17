export default function Home() {
  const products = [
    {
      name: "Serum de Vitamina C",
      category: "Tratamento",
      price: "R$ 89,90",
    },
    {
      name: "Hidratante Facial Glow",
      category: "Skincare",
      price: "R$ 74,90",
    },
    {
      name: "Batom Matte Rosé",
      category: "Maquiagem",
      price: "R$ 39,90",
    },
    {
      name: "Protetor Solar FPS 60",
      category: "Proteção",
      price: "R$ 59,90",
    },
  ];

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-12 font-sans">
      <main className="w-full max-w-5xl space-y-10">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-pink-500">
            Chinhundo Cosméticos
          </p>
          <h1 className="mt-3 text-4xl font-bold text-zinc-900">
            Plataforma de cosméticos em Next.js
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-600">
            Descubra uma seleção de skincare e maquiagem para elevar sua rotina
            de beleza.
          </p>
          <button className="mt-6 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700">
            Explorar catálogo
          </button>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">Destaques</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.name}
                className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-pink-500">
                  {product.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-zinc-600">{product.price}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
