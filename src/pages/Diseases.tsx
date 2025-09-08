import { useState } from 'react'
import DiseaseCard from '../components/DiseaseCard'
import Section from '../components/Section'
import { diseases } from '../data/diseases'

export default function Diseases() {
  const wave1 = diseases.filter((d) => d.wave === 1)
  const [search, setSearch] = useState('')
  const [letter, setLetter] = useState('')

  const filtered = wave1.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase())
    const matchLetter = letter
      ? d.name.toLowerCase().startsWith(letter.toLowerCase())
      : true
    return matchSearch && matchLetter
  })

  const letters = ['', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')]

  return (
    <div>
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
      <Section className="border-t border-brand-surfaceMuted bg-brand-background">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((disease) => (
            <DiseaseCard key={disease.slug} disease={disease} />
          ))}
        </div>
      </Section>
    </div>
  )
}
