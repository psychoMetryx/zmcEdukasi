import { useParams, Link } from 'react-router-dom'
import { getDiseaseBySlug } from '../data/diseases'
import Quiz from '../components/Quiz'
import { generateLeafletPDF } from '../utils/leaflet'

function renderList(title: string, items?: string[]) {
  if (!items || items.length === 0) return null
  return (
    <section className="mb-4">
      <h2 className="font-semibold">{title}</h2>
      <ul className="list-disc pl-4">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default function Disease() {
  const { slug } = useParams<{ slug: string }>()
  const disease = slug ? getDiseaseBySlug(slug) : undefined

  if (!disease) {
    return (
      <div>
        <h1 className="mb-4 text-xl font-semibold">404</h1>
        <p>Penyakit tidak ditemukan.</p>
        <Link to="/" className="text-blue-600 underline">
          Kembali ke beranda
        </Link>
      </div>
    )
  }

  const s = disease.sections

  return (
    <article>
      <h1 className="mb-4 text-xl font-semibold">{disease.name}</h1>
      <button
        onClick={() => generateLeafletPDF(disease)}
        className="mb-4 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Unduh Leaflet (PDF)
      </button>
      {s?.header && <p className="mb-4">{s.header}</p>}
      {s?.apaItu && (
        <section className="mb-4">
          <h2 className="font-semibold">Apa itu?</h2>
          <p>{s.apaItu}</p>
        </section>
      )}
      {renderList('Faktor Risiko', s?.faktorRisiko)}
      {renderList('Gejala', s?.gejala)}
      {renderList('Tanda Bahaya', s?.tandaBahaya)}
      {renderList('Pemeriksaan', s?.pemeriksaan)}
      {renderList('Penanganan', s?.penanganan)}
      {renderList('Checklist', s?.checklist)}
      {renderList('FAQ', s?.faq)}
      {disease.quiz && (
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">Kuis</summary>
          <Quiz
            questions={disease.quiz}
            onFinish={(score) =>
              localStorage.setItem(`quiz:zmc:${disease.slug}`, String(score))
            }
          />
        </details>
      )}
    </article>
  )
}

