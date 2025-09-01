import { useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

export default function InstallPrompt() {
  const [event, setEvent] = useState<BeforeInstallPromptEvent | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setEvent(e as BeforeInstallPromptEvent)
      setVisible(true)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const install = async () => {
    if (!event) return
    event.prompt()
    await event.userChoice
    setVisible(false)
    setEvent(null)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="rounded bg-brand-background p-4 shadow">
        <p className="mb-4 text-brand-foreground">Install aplikasi ini?</p>
        <div className="flex justify-end gap-2">
          <button
            className="rounded bg-brand-surfaceMuted px-3 py-1"
            onClick={() => setVisible(false)}
          >
            Batal
          </button>
          <button
            className="rounded bg-brand-accent px-3 py-1 text-brand-background"
            onClick={install}
          >
            Install
          </button>
        </div>
      </div>
    </div>
  )
}
