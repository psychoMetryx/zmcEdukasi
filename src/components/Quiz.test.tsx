import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Quiz from './Quiz'

describe('Quiz component', () => {
  it('renders fallback when there are no questions', () => {
    const onFinish = vi.fn()
    render(<Quiz questions={[]} onFinish={onFinish} />)

    expect(screen.getByText('Kuis belum tersedia.')).toBeInTheDocument()
    expect(onFinish).not.toHaveBeenCalled()
  })
})
