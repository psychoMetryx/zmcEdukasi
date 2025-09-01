import { describe, it, expect, vi, beforeEach } from 'vitest'

const save = vi.fn()
const text = vi.fn()
const setFontSize = vi.fn()

vi.mock('jspdf', () => ({
  jsPDF: vi.fn().mockImplementation(() => ({
    save,
    text,
    setFontSize,
  })),
}))

import { generateLeafletPDF } from './leaflet'
import type { Disease } from '../data/diseases'

describe('generateLeafletPDF', () => {
  beforeEach(() => {
    save.mockClear()
    text.mockClear()
    setFontSize.mockClear()
  })

  it('creates default leaflet for unsupported disease', () => {
    const disease = { slug: 'flu', name: 'Flu', summary: '', wave: 1 } as Disease
    generateLeafletPDF(disease)
    expect(setFontSize).toHaveBeenCalledWith(16)
    expect(text).toHaveBeenCalledWith('Flu', 10, 10)
    expect(setFontSize).toHaveBeenCalledWith(12)
    expect(text).toHaveBeenCalledWith('Leaflet belum tersedia.', 10, 20)
    expect(save).toHaveBeenCalledWith('leaflet-flu.pdf')
  })
})
