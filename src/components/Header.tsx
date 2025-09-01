import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getLabels, Lang } from '../i18n'

export default function Header() {
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem('ui:lang') as Lang) || 'id'
  )
  const [highContrast, setHighContrast] = useState(
    () => localStorage.getItem('a11y:zmc:contrast') === '1'
  )
  const [largeText, setLargeText] = useState(
    () => localStorage.getItem('a11y:zmc:font') === '1'
  )
  const labels = getLabels(lang)

  useEffect(() => {
    localStorage.setItem('a11y:zmc:contrast', highContrast ? '1' : '0')
    const cls = 'high-contrast'
    if (highContrast) {
      document.documentElement.classList.add(cls)
    } else {
      document.documentElement.classList.remove(cls)
    }
  }, [highContrast])

  useEffect(() => {
    localStorage.setItem('a11y:zmc:font', largeText ? '1' : '0')
    const cls = 'large-text'
    if (largeText) {
      document.documentElement.classList.add(cls)
    } else {
      document.documentElement.classList.remove(cls)
    }
  }, [largeText])

  useEffect(() => {
    localStorage.setItem('ui:lang', lang)
  }, [lang])

  return (
    <header
      className={`${highContrast ? 'bg-black text-white' : 'bg-brand-primary text-brand-background'}`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link to="/" className="text-base font-bold font-heading">
          {labels.appTitle}
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/" className="px-2 py-1 text-sm font-medium">
            {labels.home}
          </Link>
          <label className="text-sm">
            <input
              type="checkbox"
              className="mr-1"
              checked={highContrast}
              onChange={(e) => setHighContrast(e.target.checked)}
            />
            {labels.highContrast}
          </label>
          <label className="text-sm">
            <input
              type="checkbox"
              className="mr-1"
              checked={largeText}
              onChange={(e) => setLargeText(e.target.checked)}
            />
            {labels.largeText}
          </label>
          <label className="text-sm">
            {labels.language}
            <select
              className="ml-1 text-brand-foreground"
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
            >
              <option value="id">Indonesia</option>
              <option value="su">Sunda</option>
            </select>
          </label>
        </nav>
      </div>
    </header>
  )
}
