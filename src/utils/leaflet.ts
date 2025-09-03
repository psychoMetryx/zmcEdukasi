import { jsPDF } from 'jspdf'
import type { Disease } from '../data/diseases'

export function generateLeafletPDF(disease: Disease) {
  const doc = new jsPDF()

  doc.setFontSize(16)
  doc.text(disease.name, 10, 10)

  const s = disease.sections

  if (disease.slug === 'hipertensi' && s) {
    let y = 20
    const margin = 10
    const lineHeight = 6
    const pageHeight = doc.internal.pageSize.getHeight()

    const ensureSpace = (lines = 1) => {
      if (y + lineHeight * lines > pageHeight - margin) {
        doc.addPage()
        y = margin
      }
    }

    const addSection = (title: string, content?: string | string[]) => {
      if (!content) return

      const lines = Array.isArray(content)
        ? content
        : doc.splitTextToSize(content, 190)

      // ensure the whole section fits on the current page
      ensureSpace(lines.length + 1)

      doc.setFont('helvetica', 'bold')
      doc.text(title, 10, y)
      doc.setFont('helvetica', 'normal')
      y += lineHeight

      lines.forEach((line: string) => {
        ensureSpace()
        if (Array.isArray(content)) {
          doc.text(`- ${line}`, 12, y)
        } else {
          doc.text(line, 10, y)
        }
        y += lineHeight
      })

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

