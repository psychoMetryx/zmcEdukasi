import { useEffect, useState, type ReactNode } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getDiseaseBySlug } from '../data/diseases'
import Quiz from '../components/Quiz'
import { generateLeafletPDF } from '../utils/leaflet'
import { track } from '../utils/analytics'

function renderList(items?: string[]) {
  if (!items || items.length === 0) return null
  return (
    <ul className="list-disc pl-4">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function Disease() {
  const { slug } = useParams<{ slug: string }>()
  const disease = slug ? getDiseaseBySlug(slug) : undefined
  const [tab, setTab] = useState('')

  useEffect(() => {
    if (disease) {
      track('disease_view', { slug: disease.slug })
    }
  }, [disease])

  if (!disease) {
    return (
      <div>
        <h1 className="mb-4 text-xl font-heading font-semibold">404</h1>
        <p>Penyakit tidak ditemukan.</p>
        <Link to="/diseases" className="text-brand-primary underline">
          Kembali ke daftar
        </Link>
      </div>
    )
  }

  const s = disease.sections

  const tabs = [
    s?.faktorRisiko && { key: 'faktorRisiko', label: 'Faktor Risiko', content: renderList(s.faktorRisiko) },
    s?.gejala && { key: 'gejala', label: 'Gejala', content: renderList(s.gejala) },
    s?.tandaBahaya && { key: 'tandaBahaya', label: 'Tanda Bahaya', content: renderList(s.tandaBahaya) },
    s?.pemeriksaan && { key: 'pemeriksaan', label: 'Pemeriksaan', content: renderList(s.pemeriksaan) },
    s?.penanganan && { key: 'penanganan', label: 'Penanganan', content: renderList(s.penanganan) },
    s?.checklist && { key: 'checklist', label: 'Checklist', content: renderList(s.checklist) },
    s?.faq && { key: 'faq', label: 'FAQ', content: renderList(s.faq) },
    disease.quiz && {
      key: 'quiz',
      label: 'Kuis',
      content: (
        <Quiz
          questions={disease.quiz}
          onFinish={(score) => {
            localStorage.setItem(`quiz:zmc:${disease.slug}`, String(score))
          }}
        />
      ),
    },
  ].filter(Boolean) as { key: string; label: string; content: ReactNode }[]

  useEffect(() => {
    if (tab === '' && tabs.length > 0) {
      setTab(tabs[0].key)
    }
  }, [tab, tabs])

  const current = tabs.find((t) => t.key === tab)

  return (
    <article className="space-y-4">
      <section className="bg-gradient-to-r from-brand-primary to-brand-accent py-12 text-center text-brand-background">
        <h1 className="mb-4 text-3xl font-heading font-bold">{disease.name}</h1>
        <button
          onClick={() => generateLeafletPDF(disease)}
          className="rounded bg-brand-background px-4 py-2 font-heading font-semibold text-brand-primary"
        >
          Unduh Leaflet (PDF)
        </button>
      </section>
      <div className="container mx-auto px-4">
        {s?.header && <p className="mb-4">{s.header}</p>}
        {s?.apaItu && (
          <section className="mb-4">
            <h2 className="font-heading font-semibold">Apa itu?</h2>
            <p>{s.apaItu}</p>
          </section>
        )}
        {tabs.length > 0 && (
          <>
            <div className="flex flex-wrap gap-2 border-b">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`px-3 py-2 text-sm font-medium border-b-2 ${
                    t.key === current?.key
                      ? 'border-brand-primary text-brand-primary'
                      : 'border-transparent text-brand-muted'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="mt-4">{current?.content}</div>
          </>
        )}
      </div>
    </article>
  )
}

