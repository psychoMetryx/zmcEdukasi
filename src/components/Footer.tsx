export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand-surface text-brand-secondary">
      <div className="mx-auto max-w-4xl p-4 text-center text-xs">
        <p>&copy; {year} Zihan Medical Center — Konten hanya bersifat edukasi dan bukan pengganti diagnosis medis, resep, atau keputusan darurat.</p>
      </div>
    </footer>
  )
}
