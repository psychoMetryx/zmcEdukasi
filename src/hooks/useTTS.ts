export function useTTS() {
  const speak = (_text: string) => {
    // TODO: integrate text-to-speech engine
  }

  const stop = () => {
    // TODO: stop text-to-speech playback
  }

  return { speak, stop }
}
