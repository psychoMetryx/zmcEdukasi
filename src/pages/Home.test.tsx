import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'

import Home from './Home'

describe('Home page', () => {
  it('navigates to diseases page and shows article', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diseases" element={<div>Mock Diseases Page</div>} />
        </Routes>
      </MemoryRouter>
    )

    expect(
      screen.getByText(
        'Pelajari penyakit sehari-hari, pencegahannya, dan penanganannya.'
      )
    ).toBeInTheDocument()

    expect(screen.getByText('Selamat Datang')).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: /penyakit/i }))
    expect(screen.getByText('Mock Diseases Page')).toBeInTheDocument()
  })
})
