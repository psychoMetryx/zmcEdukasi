import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-brand-background text-brand-foreground font-brand antialiased">
      <Header />
      <main className="flex-1 w-full max-w-screen-md mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  )
}
