# zmcEdukasi
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository=https://github.com/zmcEdukasi/zmcEdukasi)

Aplikasi Edukasi ZMC — Publik-Only MVP

> Modul penyakit telah dideprekasi.

📖 Ringkasan

Proyek ini adalah aplikasi edukasi kesehatan untuk publik yang dikembangkan untuk Klinik Pratama Zihan Medical Center (ZMC). Aplikasi ini berbasis PWA (Progressive Web App) dengan konsep offline-first, ditujukan bagi pasien, keluarga, dan masyarakat umum. Fokusnya adalah menyajikan informasi kesehatan yang jelas, terstruktur, dan mudah diakses — tanpa fitur klinis — untuk meningkatkan literasi, mengurangi miskonsepsi, serta mendorong perilaku hidup sehat【25†source】.
Aplikasi menyajikan modul edukasi singkat, fitur interaktif, serta leaflet cetak, semuanya dioptimalkan untuk perangkat mobile dan ramah bagi lansia maupun komunitas lokal.
---


🎯 Tujuan & Audiens
Tujuan
- Meningkatkan literasi kesehatan masyarakat.
- Mengurangi miskonsepsi dan mendorong perilaku sehat.
- Menyediakan materi edukasi publik yang aman, konsisten, dan mudah dipahami.

Audiens
- Pasien dewasa dan keluarga (termasuk orang tua terkait kesehatan anak & stunting).
- Komunitas sekitar klinik.

⚠️ Disclaimer: Konten hanya bersifat edukasi dan bukan pengganti diagnosis medis, resep, atau keputusan darurat【25†source】.
---


🎮 Interaktivitas & Gamifikasi
- Progress bar per modul.
- Badge sederhana (contoh: “3 modul tamat”).
- Kuis + sertifikat mini (PDF).
- Mode keluarga (stunting): checklist tumbuh kembang, imunisasi, ASI/MP-ASI.
- Notifikasi PWA (contoh: “Ukur tekanan pagi ini”).【25†source】

---


👪 Dukungan Keluarga & Komunitas
- Checklist pendamping (ingatkan obat, catat gejala, jadwal kontrol).
- Kartu tanda bahaya.
- 5 pertanyaan kunci untuk dokter.
- Tautan komunitas lokal (opsional).
- Feedback pengguna (“Konten ini membantu?”).【25†source】

---


🎨 UX & Aksesibilitas
- Mobile-first: Tombol besar, ikon jelas.
- Ramah lansia: Kontras tinggi, font besar, navigasi sederhana.
- Palet warna: Biru/hijau menenangkan; merah hanya untuk bahaya.
- Audio TTS: Bahasa Indonesia + Sunda.
- Bahasa: Non-stigmatis, ramah budaya【25†source】.

---


🏗️ Teknologi
- Frontend: HTML5 + TailwindCSS + Vue/React.
- PWA: Service Worker, modul JSON offline.
- Penyimpanan: IndexedDB (opsi PouchDB/CouchDB).
- Media: Video lokal/unlisted, lazy-load.
- Keamanan: HTTPS, tanpa akun, enkripsi opsional.
- Export: jsPDF untuk leaflet & sertifikat【25†source】.

---


🗓️ Roadmap
Sprint 1 (2 minggu):
- Desain UI, navigasi, beranda.
- 3 modul: Hipertensi, Diabetes, Stunting.
- Kuis per modul.
- Skeleton PWA offline.

Sprint 2 (2 minggu):
- Tambah 4 modul: GERD, GEA, ISPA, TB.
- Tambah leaflet PDF.

Sprint 3 (2 minggu):
- Tambah TTS (Indonesia & Sunda).
- 2–3 video edukasi.
- Analytics sederhana.

Sprint 4+:
- Reminder server-side.
- A/B testing.
- Peningkatan aksesibilitas【25†source】.

---


📊 Metrik Sukses
- Jangkauan & Engagement: Pengguna unik, views, durasi baca, completion & quiz pass rate.
- Proxy Perilaku: Unduhan booklet, checklist berhenti merokok, klik “cari layanan”.
- Kualitas: Skor kepuasan, audit konten 6 bulanan【25†source】.

---


⚖️ Risiko & Etika
- Disclaimer wajib di setiap modul.
- Tidak ada dosis obat/diagnosis.
- Selaras dengan Kemenkes/WHO.
- Bahasa suportif & non-stigmatis【25†source】.

---


📦 Langkah Selanjutnya
- Prototype modul Hipertensi (HTML/CSS/JS + PDF + kuis).
- Bangun beranda (grid penyakit).
- Uji PWA offline.
- Perluas modul bertahap【25†source】.

---


📝 Lisensi & Kontribusi
Proyek ini bersifat edukasi publik. Kontribusi konten & kode sangat terbuka, dengan syarat sejalan dengan misi edukasi kesehatan yang aman, inklusif, dan berbasis komunitas. Silakan ajukan issue atau pull request dengan referensi berbasis bukti.


Great—karena repo-mu baru berisi README, kita bikin serangkaian prompt Codex yang bisa kamu paste satu-per-satu di Codex. Setiap prompt sudah mencantumkan deliverables, struktur file, dan kriteria penerimaan supaya Codex tahu persis apa yang harus dibuat.
---


Task 0 — Gunakan README sebagai sumber kanonik
Prompt untuk Codex (paste apa adanya):
Baca file zmc_edukasi_readme.md di root repo dan jadikan sebagai spesifikasi kanonik. Semua keputusan arsitektur dan konten harus mengikuti README tersebut. Konfirmasikan secara singkat bahwa kamu sudah menemukan dan membaca file itu.
---


Task 1 — Bootstrap proyek React + Vite + Tailwind + PWA (Vercel-ready)
Prompt:
Inisialisasi proyek React + Vite di repo ini (tanpa membuat subfolder) dan siapkan TailwindCSS + vite-plugin-pwa.
Buat & ubah file berikut (root repo):
- package.json dengan scripts: "dev", "build", "preview".
- index.html standar Vite.
- vite.config.ts memakai @vitejs/plugin-react dan vite-plugin-pwa (register SW otomatis, manifest name “ZMC Edukasi”, themeColor hijau kebiruan).
- tailwind.config.ts (content: ./index.html, ./src/**/*.{js,ts,jsx,tsx}), postcss.config.js.
- src/main.tsx, src/App.tsx.
- src/index.css berisi @tailwind base; @tailwind components; @tailwind utilities;.
- public/ dengan icon PWA placeholder (192, 512).
Kriteria: Proyek build sukses (npm run build) dan layout dasar muncul (teks “ZMC Edukasi”). Tambahkan commit dengan pesan: chore: bootstrap vite+react+tailwind+pwa.
---

