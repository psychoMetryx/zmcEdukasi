import { useEffect, useState } from 'react'
import DiseaseCard from '../components/DiseaseCard'
import { diseases } from '../data/diseases'
import { getEvents } from '../utils/analytics'

export default function Home() {
  const wave1 = diseases.filter((d) => d.wave === 1)
  const [summary, setSummary] = useState({
    diseaseViews: 0,
    quizFinish: 0,
  })

  useEffect(() => {
    const events = getEvents()
    setSummary({
      diseaseViews: events.filter((e) => e.name === 'disease_view').length,
      quizFinish: events.filter((e) => e.name === 'quiz_finish').length,
    })
  }, [])

  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">Beranda</h1>
      {(summary.diseaseViews > 0 || summary.quizFinish > 0) && (
        <div className="mb-4">
          <h2 className="font-semibold">Ringkasan Aktivitas</h2>
          <ul className="list-disc pl-4">
            <li>Halaman penyakit dikunjungi: {summary.diseaseViews} kali</li>
            <li>Kuis diselesaikan: {summary.quizFinish} kali</li>
          </ul>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {wave1.map((disease) => (
          <DiseaseCard key={disease.slug} disease={disease} />
        ))}
      </div>
    </div>
  )
}
