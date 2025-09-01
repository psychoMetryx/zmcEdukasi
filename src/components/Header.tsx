import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Header() {
  const [highContrast, setHighContrast] = useState(
    () => localStorage.getItem('a11y:zmc:contrast') === '1'
  )
  const [largeText, setLargeText] = useState(
    () => localStorage.getItem('a11y:zmc:font') === '1'
  )

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

  return (
    <header
      className={`${highContrast ? 'bg-black text-white' : 'bg-sky-700 text-white'}`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link to="/" className="text-base font-bold">
          Aplikasi Edukasi Penyakit ZMC
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/" className="px-2 py-1 text-sm font-medium">
            Beranda
          </Link>
          <label className="text-sm">
            <input
              type="checkbox"
              className="mr-1"
              checked={highContrast}
              onChange={(e) => setHighContrast(e.target.checked)}
            />
            Kontras Tinggi
          </label>
          <label className="text-sm">
            <input
              type="checkbox"
              className="mr-1"
              checked={largeText}
              onChange={(e) => setLargeText(e.target.checked)}
            />
            Font Besar
          </label>
        </nav>
      </div>
    </header>
  )
}
