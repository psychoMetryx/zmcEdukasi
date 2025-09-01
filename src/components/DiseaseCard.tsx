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
      className="block rounded-2xl shadow p-4 transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <h2 className="mb-1 text-lg font-semibold">{disease.name}</h2>
      <p className="text-sm text-gray-600">{disease.summary}</p>
    </Link>
  )
}
