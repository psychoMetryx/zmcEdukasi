import { useEffect, useState } from 'react'
import DiseaseCard from '../components/DiseaseCard'
import Section from '../components/Section'
import { diseases } from '../data/diseases'
import { getEvents } from '../utils/analytics'

export default function Home() {
  const wave1 = diseases.filter((d) => d.wave === 1)
  const [summary, setSummary] = useState({
    diseaseViews: 0,
    quizFinish: 0,
  })
  const [search, setSearch] = useState('')
  const [letter, setLetter] = useState('')

  useEffect(() => {
    const events = getEvents()
    setSummary({
      diseaseViews: events.filter((e) => e.name === 'disease_view').length,
      quizFinish: events.filter((e) => e.name === 'quiz_finish').length,
    })
  }, [])

  const filtered = wave1.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase())
    const matchLetter = letter ? d.name.toLowerCase().startsWith(letter.toLowerCase()) : true
    return matchSearch && matchLetter
  })

  const letters = ['', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')]

  return (
    <div>
      <section className="bg-gradient-to-r from-brand-primary to-brand-accent text-brand-background">
        <div className="mx-auto max-w-4xl py-12 text-center">
          <h1 className="mb-4 text-3xl font-heading font-bold">Beranda</h1>
          <p className="mx-auto mb-6 max-w-2xl">
            Temukan informasi ringkas mengenai berbagai penyakit umum dan cara
            penanganannya.
          </p>
          <div className="flex justify-center gap-2">
            <a
              href="#disease-grid"
              className="rounded bg-brand-background px-6 py-3 font-heading font-semibold text-brand-primary"
            >
              Mulai Belajar
            </a>
            <a
              href="#danger"
              className="rounded bg-brand-background px-6 py-3 font-heading font-semibold text-brand-primary"
            >
              Tanda Bahaya
            </a>
          </div>
        </div>
      </section>

      <Section title="Ringkasan Aktivitas">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-brand-surface p-4 text-center">
            <p className="text-2xl font-bold">{summary.diseaseViews}</p>
            <p className="text-sm">Modul dibuka</p>
          </div>
          <div className="rounded-lg bg-brand-surface p-4 text-center">
            <p className="text-2xl font-bold">{summary.quizFinish}</p>
            <p className="text-sm">Kuis diisi</p>
          </div>
        </div>
      </Section>

      <Section className="space-y-4">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari penyakit (mis. hipertensi, diabetes)"
          className="w-full rounded border border-brand-surfaceMuted p-2"
        />
        <div className="flex flex-wrap gap-2">
          {letters.map((l) => (
            <button
              key={l || 'all'}
              onClick={() => setLetter(l)}
              className={`rounded-full px-3 py-1 text-sm ${
                letter === l
                  ? 'bg-brand-primary text-brand-background'
                  : 'bg-brand-surface text-brand-foreground'
              }`}
            >
              {l || 'Semua'}
            </button>
          ))}
        </div>
      </Section>

      <Section id="danger">
        <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-800">
          <h2 className="font-heading font-semibold">
            Tanda Bahaya — kapan harus ke UGD?
          </h2>
          <p className="mt-2 text-sm">
            Lumpuh/bicara pelo mendadak, nyeri dada hebat, sesak berat, demam
            tinggi pada bayi, kejang lama, perdarahan hebat. Jangan tunda, segera
            cari pertolongan.
          </p>
        </div>
      </Section>

      <Section
        id="disease-grid"
        className="border-t border-brand-surfaceMuted bg-brand-background"
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((disease) => (
            <DiseaseCard key={disease.slug} disease={disease} />
          ))}
        </div>
      </Section>
    </div>
  )
}
