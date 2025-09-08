import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import DiseaseCard from './DiseaseCard'

describe('DiseaseCard', () => {
  it('renders disease info and link', () => {
    const disease = {
      slug: 'flu',
      name: 'Flu',
      summary: 'Flu summary',
      wave: 1,
    }

    render(
      <MemoryRouter>
        <DiseaseCard disease={disease} />
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: /flu/i })
    expect(link).toHaveAttribute('href', '/diseases/flu')
    expect(screen.getByText('Flu summary')).toBeInTheDocument()
  })
})
