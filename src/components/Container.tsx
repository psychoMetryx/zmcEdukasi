import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-background text-brand-foreground font-brand antialiased">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
