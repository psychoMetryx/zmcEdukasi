import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { getLabels, Lang } from '../i18n'
import { useLanguage } from '../hooks/useLanguage'

export default function Header() {
  const { lang, setLang } = useLanguage()
  const [highContrast, setHighContrast] = useState(
    () => localStorage.getItem('a11y:zmc:contrast') === '1'
  )
  const [largeText, setLargeText] = useState(
    () => localStorage.getItem('a11y:zmc:font') === '1'
  )
  const [menuOpen, setMenuOpen] = useState(false)
  const labels = getLabels(lang)

  useEffect(() => {
    localStorage.setItem('a11y:zmc:contrast', highContrast ? '1' : '0')
    document.documentElement.classList.toggle('high-contrast', highContrast)
  }, [highContrast])

  useEffect(() => {
    localStorage.setItem('a11y:zmc:font', largeText ? '1' : '0')
    document.documentElement.classList.toggle('large-text', largeText)
  }, [largeText])

  return (
    <header
      className={clsx(
        highContrast
          ? 'bg-black text-white'
          : 'bg-brand-primary text-brand-background',
        'font-brand'
      )}
    >
      <div className="relative mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link to="/" className="flex items-center" aria-label={labels.appTitle}>
          <img
            src="https://i.postimg.cc/HWJV3xpW/FB-IMG-1756806155300.png"
            alt={labels.appTitle}
            className="h-8"
          />
        </Link>
        <button
          className="rounded p-2 hover:bg-brand-accent/20 focus:bg-brand-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <nav
          className={clsx(
            menuOpen ? 'flex' : 'hidden',
            highContrast ? 'bg-black text-white' : 'bg-brand-primary',
            'absolute left-0 top-full w-full flex-col gap-2 px-4 pb-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-2 md:bg-transparent md:p-0'
          )}
        >
          <Link
            to="/"
            className="rounded px-3 py-2 text-sm font-medium hover:bg-brand-accent hover:text-brand-background focus:bg-brand-accent focus:text-brand-background"
            onClick={() => setMenuOpen(false)}
          >
            {labels.home}
          </Link>
          <label className="flex items-center rounded px-3 py-2 text-sm hover:bg-brand-accent/20 focus-within:bg-brand-accent/20">
            <input
              type="checkbox"
              className="mr-1"
              checked={highContrast}
              onChange={(e) => setHighContrast(e.target.checked)}
            />
            {labels.highContrast}
          </label>
          <label className="flex items-center rounded px-3 py-2 text-sm hover:bg-brand-accent/20 focus-within:bg-brand-accent/20">
            <input
              type="checkbox"
              className="mr-1"
              checked={largeText}
              onChange={(e) => setLargeText(e.target.checked)}
            />
            {labels.largeText}
          </label>
          <label className="flex items-center rounded px-3 py-2 text-sm hover:bg-brand-accent/20 focus-within:bg-brand-accent/20">
            {labels.language}
            <select
              className={clsx(
                'ml-1',
                highContrast ? 'bg-black text-white' : 'text-brand-foreground'
              )}
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
