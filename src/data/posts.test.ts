import { describe, it, expect } from 'vitest'
import { posts, getPostBySlug } from './posts'

describe('posts data', () => {
  it('includes selamat datang post', () => {
    const result = getPostBySlug('selamat-datang')
    expect(result?.title).toBe('Selamat Datang')
  })

  it('has at least one entry', () => {
    expect(posts.length).toBeGreaterThan(0)
  })
})
