import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1 p-4">{children}</main>
      <Footer />
    </div>
  )
}
