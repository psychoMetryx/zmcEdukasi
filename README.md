# zmcEdukasi
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository=https://github.com/zmcEdukasi/zmcEdukasi)

Aplikasi Edukasi Penyakit ZMC — Publik-Only MVP
📖 Ringkasan
Proyek ini adalah aplikasi edukasi kesehatan untuk publik yang dikembangkan untuk Klinik Pratama Zihan Medical Center (ZMC). Aplikasi ini berbasis PWA (Progressive Web App) dengan konsep offline-first, ditujukan bagi pasien, keluarga, dan masyarakat umum. Fokusnya adalah menyajikan informasi kesehatan yang jelas, terstruktur, dan mudah diakses — tanpa fitur klinis — untuk meningkatkan literasi, mengurangi miskonsepsi, serta mendorong perilaku hidup sehat【25†source】.
Aplikasi menyajikan modul edukasi singkat, fitur interaktif, serta leaflet cetak, semuanya dioptimalkan untuk perangkat mobile dan ramah bagi lansia maupun komunitas lokal.
---


🎯 Tujuan & Audiens
Tujuan
- Meningkatkan literasi kesehatan masyarakat untuk penyakit prioritas ZMC.
- Mengurangi miskonsepsi dan mendorong perilaku sehat.
- Menyediakan materi edukasi publik yang aman, konsisten, dan mudah dipahami.

Audiens
- Pasien dewasa dan keluarga (termasuk orang tua terkait kesehatan anak & stunting).
- Komunitas sekitar klinik.

⚠️ Disclaimer: Konten hanya bersifat edukasi dan bukan pengganti diagnosis medis, resep, atau keputusan darurat【25†source】.
---


🩺 Cakupan Penyakit
Gelombang 1 (MVP)
- Asam Urat
- Dermatitis
- Diabetes
- Dorsalgia
- Dispepsia
- GEA (Diare & Keracunan Makanan)
- GERD
- Sakit Kepala
- Hipertensi
- ISK
- ISPA / Common Cold
- Kejang Demam
- Konjungtivitis
- Migrain
- Osteoartritis
- Pneumonia
- PPOK / Rokok
- Skabies
- Stroke
- TB Paru
- Tifoid
- Vertigo (BPPV) & Hipotensi

Gelombang 2 (Lanjutan)
- Demam Berdarah (DBD)
- Stunting【25†source】

---


🛠️ Fitur Utama
- Beranda: Kartu penyakit dengan ringkasan 30–60 detik.
- Modul Terstruktur: Per penyakit → definisi, penyebab, gejala, tanda bahaya (indikator UGD), pemeriksaan, penanganan umum, pencegahan, FAQ, penutup.
- Infografik & Checklist: PDF yang bisa diunduh/cetak.
- Kuis Singkat: 3–5 soal per modul.
- Video/Animasi: Edukasi singkat opsional (lazy-load).
- Bahasa: Indonesia + Sunda (teks & audio TTS).
- PWA Offline: Konten inti tersimpan di cache.
- Analytics Ringan: Kunjungan, durasi baca, skor kuis.
- Hanya untuk publik: Tanpa ICD-10, resep, atau fitur klinisi【25†source】.

---


📑 Template Konten (per penyakit)
- Header: 1 kalimat (misal: Hipertensi: tekanan darah tinggi yang sering tanpa gejala, tapi berbahaya jika diabaikan).
- Apa itu? Paragraf singkat bahasa awam.
- Penyebab & Faktor Risiko (bullet).
- Gejala Umum (bullet + ikon/ilustrasi).
- Tanda Bahaya → Kapan harus ke UGD.
- Pemeriksaan (klinik/lab dasar).
- Penanganan Umum: Gaya hidup + garis besar farmako (tanpa dosis).
- Checklist Perawatan & Pencegahan.
- FAQ (5 Q&A): Fokus mitos vs fakta.
- Pesan Penutup: Kalimat menenangkan + ajakan kontrol.
- Sumber Belajar: Leaflet, video, Kemenkes/WHO【25†source】.

---


📋 Contoh Modul: Hipertensi
Header: Hipertensi — “Si senyap yang suka muncul tanpa gejala.”
Definisi: Tekanan darah sistemik ≥140/90 mmHg berulang, meningkatkan risiko penyakit jantung, stroke, gangguan ginjal.
Faktor Risiko: Genetik, obesitas, garam tinggi, alkohol, kurang aktivitas, stres, merokok, usia.
Gejala: Sering tanpa gejala; kadang pusing, berdebar, pandangan kabur, sakit kepala.
Tanda Bahaya (UGD): Nyeri dada, kelumpuhan mendadak, bicara pelo, sakit kepala hebat + muntah/kebingungan.
Pemeriksaan: Pengukuran berulang, pemeriksaan organ target, gula darah, lipid.
Penanganan: Pola hidup → rendah garam (<2 g natrium/hari), diet seimbang, olahraga 150 menit/minggu, berhenti merokok, tidur cukup. Obat sesuai keputusan dokter.
Checklist Rumah:
- Catat tensi tiap pagi.
- Minum obat sesuai resep.
- Kurangi garam & makanan olahan.
- Jalan 30 menit, 5x/minggu.
- Turunkan berat badan bila overweight.
- Berhenti merokok & batasi alkohol.
- Tidur 7–8 jam + relaksasi.

FAQ (contoh):
- “Tidak pusing berarti normal?” → Tidak selalu.
- “Boleh jamu?” → Konsultasi dulu.
- “Sudah minum obat, boleh makan bebas?” → Tidak.
- “Tensi naik hanya saat marah?” → Tetap perlu evaluasi.
- “Kapan ke UGD?” → Saat muncul tanda bahaya.

Pesan Penutup: “Kamu tidak sendirian — perubahan kecil yang konsisten itu kuat. Catat tensimu, kurangi garam, aktif bergerak, dan ikuti jadwal kontrol.”【25†source】
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


Task 2 — Layout global, navigasi, dan disclaimer
Prompt:
Tambahkan layout global sesuai README: header, konten, footer.
- Header: judul “Aplikasi Edukasi Penyakit ZMC”, subjudul singkat.
- Footer: disclaimer edukasi 1 baris + tahun.
- Install react-router-dom; buat routing dasar / (Home) dan /disease/:slug.
- Buat komponen:
- src/components/Header.tsx, Footer.tsx, Container.tsx.
- Terapkan Tailwind (mobile-first, kontras tinggi, tombol besar).
Kriteria: Navigasi bekerja, Tailwind aktif, footer selalu terlihat, responsif.
---


Task 3 — Sumber data penyakit (Wave 1)
Prompt:
Buat sumber data statis sesuai daftar Gelombang 1 (MVP) di README.
- File: src/data/diseases.ts.
- Ekspor Disease type { slug, name, summary, wave, sections?: {...} }.
- Isi minimal: seluruh 22 penyakit Wave 1 dengan slug kebab-case (mis. hipertensi → hipertensi) dan summary 1 kalimat.
- Sertakan 1 entri lengkap untuk hipertensi (isi field sections: header, apaItu, faktorRisiko[], gejala[], tandaBahaya[], pemeriksaan[], penanganan[], checklist[], faq[]).
Kriteria: Importable tanpa error; ada util getDiseaseBySlug(slug).
---


Task 4 — Kartu penyakit & Beranda (grid responsif)
Prompt:
Implementasikan Beranda dengan grid kartu penyakit:
- File: src/pages/Home.tsx.
- Komponen DiseaseCard di src/components/DiseaseCard.tsx (props: name, summary, slug).
- Grid: 2 kolom (≤640px), 3 kolom (≥768px), 4 kolom (≥1024px).
- Gaya: rounded-2xl, shadow, hover:shadow-lg, focus ring; aksesibel (role=link).
- Klik kartu → /disease/{slug}.
Kriteria: Semua item Wave 1 tampil, layout responsif, Lighthouse a11y dasar ok.
---


Task 5 — Halaman template penyakit (tab/accordion)
Prompt:
Buat halaman detail src/pages/Disease.tsx untuk route /disease/:slug.
- Ambil data dari getDiseaseBySlug.
- Tampilkan tab atau accordion untuk: Apa itu, Penyebab & Faktor Risiko, Gejala, Tanda Bahaya, Pemeriksaan, Penanganan, Checklist, FAQ.
- Bila slug tidak ditemukan → tampilkan 404 yang ramah.
- Tambahkan tombol “Kembali ke daftar”.
Kriteria: Untuk slug hipertensi, seluruh section tampil dengan data asli; penyakit lain menunjukkan placeholder “Konten menyusul”.
---


Task 6 — Kuis 3–5 soal per modul (localStorage)
Prompt:
Implementasikan komponen kuis ringan:
- src/components/Quiz.tsx (props: questions[], onFinish(score)).
- Simpan hasil kuis per slug ke localStorage (kunci: quiz:zmc:{slug}).
- Tambahkan tab “Kuis” di halaman disease. Untuk hipertensi, buat 5 soal MCQ sesuai konten README (jawaban & penjelasan singkat).
- Tampilkan skor & status lulus (≥80%).
Kriteria: Progress tersimpan; refresh halaman tidak menghapus skor.
---


Task 7 — Export PDF leaflet (jsPDF)
Prompt:
Tambahkan tombol “Unduh Leaflet (PDF)” pada halaman disease.
- Install jspdf.
- Buat util src/utils/leaflet.ts yang menghasilkan PDF A4 dengan: judul, ringkasan “Apa itu?”, poin Tanda Bahaya berwarna merah, dan Checklist.
- Implementasi penuh untuk hipertensi; lainnya gunakan placeholder.
Kriteria: File terunduh bernama leaflet-{slug}.pdf, teks terbaca jelas.
---


Task 8 — PWA offline caching + fallback
Prompt:
Lengkapi konfigurasi vite-plugin-pwa:
- Cache static assets, halaman /, rute /disease/*, dan file data diseases.ts hasil bundling.
- Tambahkan offline fallback sederhana (mis. halaman “Anda sedang offline”).
- Registrasikan SW di main.tsx (skip waiting + prompt reload).
Kriteria: Saat offline, beranda masih tampil dan halaman hipertensi dapat dibuka jika sudah pernah diakses.
---


Task 9 — Mode High-Contrast & ukuran font
Prompt:
Tambahkan toggle Aksesibilitas di header: High Contrast & Font Besar.
- Simpan preferensi di localStorage (kunci a11y:zmc:{pref}).
- Tailwind: buat utility classes atau var CSS untuk kontras tinggi; set warna merah khusus untuk “Tanda Bahaya”.
Kriteria: Toggle bekerja, preferensi bertahan setelah reload.
---


Task 10 — Analitik ringan (in-app)
Prompt:
Implementasikan analitik sederhana berbasis localStorage:
- Buat util src/utils/analytics.ts dengan event track(eventName, payload); kumpulkan views per modul, durasi baca (ms), dan quiz_pass.
- Tampilkan ringkasan lokal di / (mis. “Modul diselesaikan: X”).
- Jangan kirim data keluar; ini hanya placeholder.
Kriteria: Event tercatat dan dapat dibaca ulang; tidak ada error saat private browsing.
---


Task 11 — Siapkan untuk deploy di Vercel
Prompt:
Pastikan proyek Vercel-ready:
- package.json scripts: "build": "vite build", "preview": "vite preview --port 4173".
- Tambahkan dokumen DEPLOYMENT.md berisi langkah Deploy di Vercel (import repo, preset Vite, output dist).
- Tambahkan badge/tautan “Deploy on Vercel” di README.
Kriteria: Build menghasilkan folder dist/; dokumen deployment jelas.
---


Task 12 (opsional) — i18n Sunda & TTS placeholder
Prompt:
Siapkan arsitektur i18n dasar + TTS placeholder:
- src/i18n/ dengan berkas id.ts dan su.ts untuk label UI (bukan konten medis).
- Dropdown bahasa (ID/SU) di header; simpan preferensi.
- Buat hook useTTS() yang sekarang hanya stub (nanti diisi integrasi TTS).
Kriteria: UI bisa switch label; konten medis tetap Bahasa Indonesia untuk sementara.
---


Cara Pakai
1. Buka Codex (repo sudah terhubung).
2. Jalankan `npm install` untuk mengunduh dependensi.
3. Paste Task 0 → jalankan.
4. Lanjutkan Task 1 → 11 satu per satu.
5. Setelah Task 11, push ke GitHub, lalu import ke Vercel.
Kalau kamu mau, aku bisa tulis satu “super-prompt” untuk langsung membuat Task 1–5 sekaligus, tapi rekomendasi saya kerjakan bertahap agar hasilnya rapi dan mudah dikoreksi.
