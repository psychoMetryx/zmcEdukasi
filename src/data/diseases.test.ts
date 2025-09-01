import { describe, it, expect } from 'vitest'
import { diseases, getDiseaseBySlug } from './diseases'

describe('diseases data', () => {
  it('includes hipertensi', () => {
    const result = getDiseaseBySlug('hipertensi')
    expect(result?.name).toBe('Hipertensi')
  })

  it('has 22 entries', () => {
    expect(diseases.length).toBe(22)
  })
})
