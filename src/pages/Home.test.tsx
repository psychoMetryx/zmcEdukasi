import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

import Home from './Home'

describe('Home page', () => {
  it('has WhatsApp link', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getByText('#ZMCGakNyuekinKamu')).toBeInTheDocument()

    expect(screen.getByText('Selamat Datang')).toBeInTheDocument()

    const link = screen.getByRole('link', { name: /whatsapp/i })
    expect(link).toHaveAttribute(
      'href',
      'https://api.whatsapp.com/send/?phone=%2B6282217180432&type=phone_number&app_absent=0&fbclid=PAb21jcAMtplZleHRuA2FlbQIxMQABpypvxMDm1MYC1CcFqVeAR3KssHIEVdVc2Td6bZ7O5enrJU_icGDS7btsNwHj_aem_ewJGajyRcoONfEJt5N9y4g'
    )
  })
})
