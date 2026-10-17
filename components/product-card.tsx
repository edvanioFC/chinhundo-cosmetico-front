import Image from 'next/image'
import Link from 'next/link'

type Product = { slug: string; name: string; brand: string; price: string; image: string; badge?: string }
export function ProductCard({ product }: { product: Product }) {
  return <article className="group"><Link href={`/produtos/${product.slug}`} className="block"><div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--surface)]"><Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />{product.badge && <span className="absolute left-3 top-3 rounded-full bg-[var(--brand)] px-3 py-1 text-[10px] uppercase tracking-wider text-white">{product.badge}</span>}</div><div className="flex items-start justify-between gap-3 pt-4"><div><p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">{product.brand}</p><h3 className="mt-1 text-sm">{product.name}</h3></div><p className="whitespace-nowrap text-sm font-medium">{product.price}</p></div></Link></article>
}
