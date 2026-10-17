'use client'

import Link from 'next/link'
import { Search, ShoppingBag, UserRound, Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="border-b border-[var(--line)] bg-[var(--background)]/95 backdrop-blur sticky top-0 z-40">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
      <button className="lg:hidden" aria-label="Abrir menu" onClick={() => setOpen(!open)}><Menu /></button>
      <Link href="/" className="font-serif text-2xl tracking-tight text-[var(--foreground)]">chinhundo<span className="text-[var(--brand)]">.</span></Link>
      <nav className={`${open ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-5 border-b border-[var(--line)] bg-[var(--surface)] p-5 lg:static lg:flex lg:w-auto lg:flex-row lg:border-0 lg:bg-transparent lg:p-0`}>
        <Link href="/produtos" className="text-sm hover:text-[var(--brand)]">Comprar</Link><Link href="/categorias/maquilhagem" className="text-sm hover:text-[var(--brand)]">Maquilhagem</Link><Link href="/categorias/skincare" className="text-sm hover:text-[var(--brand)]">Skincare</Link><Link href="/marcas" className="text-sm hover:text-[var(--brand)]">Marcas</Link>
      </nav>
      <div className="flex items-center gap-4"><button aria-label="Pesquisar" className="hover:text-[var(--brand)]"><Search /></button><Link href="/conta" aria-label="A minha conta" className="hidden hover:text-[var(--brand)] sm:block"><UserRound /></Link><Link href="/carrinho" aria-label="Carrinho" className="hover:text-[var(--brand)]"><ShoppingBag /></Link></div>
    </div>
  </header>
}
