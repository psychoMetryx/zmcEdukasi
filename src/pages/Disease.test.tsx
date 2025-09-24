import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Disease from './Disease'

const { getDiseaseBySlug: mockedGetDiseaseBySlug } = vi.hoisted(() => ({
  getDiseaseBySlug: vi.fn(),
}))

vi.mock('../data/diseases', () => ({
  getDiseaseBySlug: mockedGetDiseaseBySlug,
}))

describe('Disease page', () => {
  beforeEach(() => {
    mockedGetDiseaseBySlug.mockReset()
  })

  it('omits quiz tab when quiz array is empty', () => {
    mockedGetDiseaseBySlug.mockReturnValue({
      slug: 'test-disease',
      name: 'Test Disease',
      summary: 'Summary',
      wave: 1,
      quiz: [],
      sections: {
        faktorRisiko: ['Risiko 1'],
      },
    })

    render(
      <MemoryRouter initialEntries={['/disease/test-disease']}>
        <Routes>
          <Route path="/disease/:slug" element={<Disease />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.queryByText('Kuis')).not.toBeInTheDocument()
  })
})
