import DiseaseCard from '../components/DiseaseCard'
import { diseases } from '../data/diseases'

export default function Home() {
  const wave1 = diseases.filter((d) => d.wave === 1)

  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">Beranda</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {wave1.map((disease) => (
          <DiseaseCard key={disease.slug} disease={disease} />
        ))}
      </div>
    </div>
  )
}
