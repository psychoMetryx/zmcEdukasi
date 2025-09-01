import { describe, it, expect, beforeEach } from 'vitest'
import { track, getEvents } from './analytics'

describe('analytics utils', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('tracks and retrieves events', () => {
    track('test', { a: 1 })
    const events = getEvents()
    expect(events).toHaveLength(1)
    expect(events[0]).toMatchObject({ name: 'test', payload: { a: 1 } })
  })

  it('returns empty array when no events', () => {
    expect(getEvents()).toEqual([])
  })
})
