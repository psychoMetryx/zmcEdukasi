import { describe, it, expect } from 'vitest'
import { articles, getArticleBySlug } from './articles'

describe('articles data', () => {
  it('includes selamat datang article', () => {
    const result = getArticleBySlug('selamat-datang')
    expect(result?.title).toBe('Selamat Datang')
  })

  it('has at least one entry', () => {
    expect(articles.length).toBeGreaterThan(0)
  })
})
