export interface AnalyticsEvent {
  name: string
  payload?: unknown
  timestamp: number
}

const STORAGE_KEY = 'analytics:zmc'

export function track(name: string, payload?: unknown) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const events: AnalyticsEvent[] = raw ? JSON.parse(raw) : []
    events.push({ name, payload, timestamp: Date.now() })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
  } catch (err) {
    // ignore write errors
  }
}

export function getEvents(): AnalyticsEvent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (err) {
    return []
  }
}
