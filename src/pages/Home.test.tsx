import { render, screen, within } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'

vi.mock('../utils/analytics', () => ({
  getEvents: () => [
    { name: 'disease_view', timestamp: 1 },
    { name: 'quiz_finish', timestamp: 2 },
  ],
}))

import Home from './Home'

describe('Home page', () => {
  it('shows summary and navigates to disease page', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disease/:slug" element={<div>Mock Disease Page</div>} />
        </Routes>
      </MemoryRouter>
    )

    const summaryHeading = await screen.findByRole('heading', {
      name: 'Ringkasan Aktivitas',
    })
    const summarySection = summaryHeading.parentElement as HTMLElement
    const moduleText = within(summarySection).getByText('Modul dibuka')
    const quizText = within(summarySection).getByText('Kuis diisi')
    expect(moduleText.previousSibling?.textContent).toBe('1')
    expect(quizText.previousSibling?.textContent).toBe('1')

    await user.click(screen.getByRole('link', { name: /asam urat/i }))
    expect(screen.getByText('Mock Disease Page')).toBeInTheDocument()
  })
})
