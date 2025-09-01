import { jsPDF } from 'jspdf'
import type { Disease } from '../data/diseases'

export function generateLeafletPDF(disease: Disease) {
  const doc = new jsPDF()

  doc.setFontSize(16)
  doc.text(disease.name, 10, 10)

  const s = disease.sections

  if (disease.slug === 'hipertensi' && s) {
    let y = 20
    const addSection = (title: string, content?: string | string[]) => {
      if (!content) return
      doc.setFont(undefined, 'bold')
      doc.text(title, 10, y)
      doc.setFont(undefined, 'normal')
      y += 6
      if (Array.isArray(content)) {
        content.forEach((item) => {
          doc.text(`- ${item}`, 12, y)
          y += 6
        })
      } else {
        const lines = doc.splitTextToSize(content, 190)
        lines.forEach((line) => {
          doc.text(line, 10, y)
          y += 6
        })
      }
      y += 4
    }

    addSection('Apa itu?', s.apaItu)
    addSection('Faktor Risiko', s.faktorRisiko)
    addSection('Gejala', s.gejala)
    addSection('Tanda Bahaya', s.tandaBahaya)
    addSection('Pemeriksaan', s.pemeriksaan)
    addSection('Penanganan', s.penanganan)
    addSection('Checklist', s.checklist)
    addSection('FAQ', s.faq)
  } else {
    doc.setFontSize(12)
    doc.text('Leaflet belum tersedia.', 10, 20)
  }

  doc.save(`leaflet-${disease.slug}.pdf`)
}

