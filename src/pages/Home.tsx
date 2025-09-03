import { useEffect, useState } from 'react'
import DiseaseCard from '../components/DiseaseCard'
import Section from '../components/Section'
import { diseases } from '../data/diseases'
import { getEvents } from '../utils/analytics'
import { getLabels, Lang } from '../i18n'

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
  const labels = getLabels((localStorage.getItem('ui:lang') as Lang) || 'id')

  return (
    <div>
      <div className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-3xl p-6 md:p-8 shadow-xl select-none">
        <div className="mx-auto max-w-4xl text-center md:grid md:grid-cols-2 md:items-center md:gap-8 md:text-left">
          <div>
            <h1 className="mb-4 text-3xl font-heading font-bold">{labels.appTitle}</h1>
            <p className="mx-auto mb-6 max-w-2xl md:mx-0">
              Temukan informasi ringkas mengenai berbagai penyakit umum dan cara
              penanganannya.
            </p>
            <div className="flex justify-center gap-3 md:justify-start">
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
          <div className="mt-6 md:mt-0">
            <h2 className="mb-4 text-xl font-heading font-semibold text-center md:text-left">
              Ringkasan Aktivitas
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-brand-background p-4 text-center text-brand-foreground">
                <p className="text-2xl font-bold">{summary.diseaseViews}</p>
                <p className="text-sm">Modul dibuka</p>
              </div>
              <div className="rounded-lg bg-brand-background p-4 text-center text-brand-foreground">
                <p className="text-2xl font-bold">{summary.quizFinish}</p>
                <p className="text-sm">Kuis diisi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section className="space-y-4">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari penyakit (mis. hipertensi, diabetes)"
          className="w-full rounded-full px-5 py-3 border"
        />
        <div className="flex gap-2 overflow-x-auto">
          {letters.map((l) => (
            <button
              key={l || 'all'}
              onClick={() => setLetter(l)}
              className={[
                'rounded-full px-3 py-1 text-sm',
                letter === l
                  ? 'bg-brand-primary text-brand-background'
                  : 'bg-brand-surface text-brand-foreground',
              ].join(' ')}
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
