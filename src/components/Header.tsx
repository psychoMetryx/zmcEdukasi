import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-sky-700 text-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link to="/" className="text-base font-bold">
          Aplikasi Edukasi Penyakit ZMC
        </Link>
        <nav>
          <Link to="/" className="px-2 py-1 text-sm font-medium">
            Beranda
          </Link>
        </nav>
      </div>
    </header>
  )
}
