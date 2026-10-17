import { ProductCard } from '@/components/product-card'
import { FilterControls } from '@/components/commerce-controls'
import { products } from '@/lib/catalog'
export const metadata={title:'Produtos | Chinhundo'}
export default function ProductsPage(){return <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8"><p className="text-xs uppercase tracking-[.25em] text-[var(--brand)]">A nossa seleção</p><h1 className="mt-3 font-serif text-5xl">Todos os produtos</h1><div className="mt-8 flex flex-wrap items-center justify-between gap-4"><FilterControls/><select aria-label="Ordenar produtos" className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm"><option>Mais relevantes</option><option>Preço mais baixo</option><option>Novidades</option></select></div><div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-6">{products.map(p=><ProductCard key={p.slug} product={p}/>)}</div></main>}
