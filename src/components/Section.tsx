import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title?: string
  children: ReactNode
  className?: string
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-4xl px-4 py-8 ${className}`}>
      {title && (
        <h2 className="mb-4 font-heading text-xl font-semibold">{title}</h2>
      )}
      {children}
    </section>
  )
}
