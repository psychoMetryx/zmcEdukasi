import { Link } from 'react-router-dom'
import type { Disease } from '../data/diseases'

interface DiseaseCardProps {
  disease: Disease
}

export default function DiseaseCard({ disease }: DiseaseCardProps) {
  return (
    <Link
      to={`/disease/${disease.slug}`}
      role="link"
      className="group block overflow-hidden rounded-2xl border border-brand-surfaceMuted bg-brand-surface shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
    >
      <div className="relative overflow-hidden [aspect-ratio:16/9]">
        {disease.image ? (
          <img
            src={disease.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-brand-surfaceMuted text-5xl text-brand-primary"
            aria-hidden="true"
          >
            {disease.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="mb-1 text-lg font-semibold text-brand-foreground">{disease.name}</h2>
        <p className="text-sm text-brand-muted">{disease.summary}</p>
      </div>
    </Link>
  )
}
