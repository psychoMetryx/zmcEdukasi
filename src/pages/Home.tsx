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
    <div className="space-y-8">
      <section className="bg-brand-surface py-12 text-center">
        <h1 className="mb-4 text-3xl font-heading font-bold">Beranda</h1>
        <p className="mx-auto mb-6 max-w-2xl text-brand-secondary">
          Temukan informasi ringkas mengenai berbagai penyakit umum dan cara
          penanganannya.
        </p>
        <a
          href="#disease-grid"
          className="inline-block rounded bg-brand-primary px-6 py-3 font-heading font-semibold text-brand-background"
        >
          Mulai Belajar
        </a>
      </section>

      {(summary.diseaseViews > 0 || summary.quizFinish > 0) && (
        <section className="container mx-auto px-4">
          <h2 className="font-heading font-semibold">Ringkasan Aktivitas</h2>
          <ul className="list-disc pl-4">
            <li>Halaman penyakit dikunjungi: {summary.diseaseViews} kali</li>
            <li>Kuis diselesaikan: {summary.quizFinish} kali</li>
          </ul>
        </section>
      )}

      <section
        id="disease-grid"
        className="border-t border-brand-surfaceMuted bg-brand-background py-8"
      >
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wave1.map((disease) => (
            <DiseaseCard key={disease.slug} disease={disease} />
          ))}
        </div>
      </section>
    </div>
  )
}
