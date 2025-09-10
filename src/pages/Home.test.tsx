import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

import Home from './Home'

describe('Home page', () => {
  it('shows tagline and article', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('#ZMCGakNyuekinKamu')).toBeInTheDocument()
    expect(screen.getByText('Selamat Datang')).toBeInTheDocument()
  })
})
