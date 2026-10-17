import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = { title: 'Chinhundo Beauty — Beleza que te pertence', description: 'Cosméticos selecionados para realçar a sua beleza em Angola.', openGraph: { title: 'Chinhundo Beauty', description: 'Beleza que te pertence.' } }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-AO" className="dark"><body><Header />{children}</body></html>
}
