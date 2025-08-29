# zmcEdukasi

Aplikasi Edukasi Penyakit ZMC — Publik-Only MVP

## Ringkasan

Proyek ini adalah aplikasi edukasi kesehatan untuk publik yang dikembangkan
untuk Klinik Pratama Zihan Medical Center (ZMC). Aplikasi ini berbasis PWA
(Progressive Web App) dengan konsep offline-first, ditujukan bagi pasien,
keluarga, dan masyarakat umum. Fokusnya adalah menyajikan informasi kesehatan
yang jelas, terstruktur, dan mudah diakses — tanpa fitur klinis — untuk
meningkatkan literasi, mengurangi miskonsepsi, serta mendorong perilaku hidup
sehat. Aplikasi menyajikan modul edukasi singkat, fitur interaktif, serta
leaflet cetak, semuanya dioptimalkan untuk perangkat mobile dan ramah bagi
lansia maupun komunitas lokal.

---

## Tujuan & Audiens

### Tujuan

- Meningkatkan literasi kesehatan masyarakat untuk penyakit prioritas ZMC.
- Mengurangi miskonsepsi dan mendorong perilaku sehat.
- Menyediakan materi edukasi publik yang aman, konsisten, dan mudah dipahami.

### Audiens

- Pasien dewasa dan keluarga (termasuk orang tua terkait kesehatan anak &
  stunting).
- Komunitas sekitar klinik.

> ⚠️ Konten hanya bersifat edukasi dan bukan pengganti diagnosis medis,
> resep, atau keputusan darurat.

---

## Cakupan Penyakit

### Gelombang 1 (MVP)

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

### Gelombang 2 (Lanjutan)

- Demam Berdarah (DBD)
- Stunting

---

## Fitur Utama

- Beranda: Kartu penyakit dengan ringkasan 30–60 detik.
- Modul terstruktur: definisi, penyebab, gejala, tanda bahaya, pemeriksaan,
  penanganan umum, pencegahan, FAQ, penutup.
- Infografik & checklist: PDF yang bisa diunduh/cetak.
- Kuis singkat: 3–5 soal per modul.
- Video/animasi opsional (lazy-load).
- Bahasa Indonesia dan Sunda (teks & audio TTS).
- PWA offline dengan konten inti tersimpan di cache.
- Analytics ringan: kunjungan, durasi baca, skor kuis.
- Hanya untuk publik: tanpa ICD-10, resep, atau fitur klinis.

---

## Template Konten (per penyakit)

- Header: satu kalimat (mis. _Hipertensi: tekanan darah tinggi yang sering
  tanpa gejala, tapi berbahaya jika diabaikan_).
- Apa itu? Paragraf singkat bahasa awam.
- Penyebab & faktor risiko (bullet).
- Gejala umum (bullet + ikon/ilustrasi).
- Tanda bahaya → kapan harus ke UGD.
- Pemeriksaan (klinik/lab dasar).
- Penanganan umum: gaya hidup + garis besar farmako (tanpa dosis).
- Checklist perawatan & pencegahan.
- FAQ (5 Q&A): fokus mitos vs fakta.
- Pesan penutup: kalimat menenangkan + ajakan kontrol.
- Sumber belajar: leaflet, video, Kemenkes/WHO.

---

## Contoh Modul: Hipertensi

**Header**: _Hipertensi — “Si senyap yang suka muncul tanpa gejala.”_

- **Definisi**: Tekanan darah sistemik ≥140/90 mmHg berulang, meningkatkan
  risiko penyakit jantung, stroke, gangguan ginjal.
- **Faktor risiko**: Genetik, obesitas, garam tinggi, alkohol, kurang
  aktivitas, stres, merokok, usia.
- **Gejala**: Sering tanpa gejala; kadang pusing, berdebar, pandangan kabur,
  sakit kepala.
- **Tanda bahaya (UGD)**: Nyeri dada, kelumpuhan mendadak, bicara pelo, sakit
  kepala hebat + muntah/kebingungan.
- **Pemeriksaan**: Pengukuran berulang, pemeriksaan organ target, gula darah,
  lipid.
- **Penanganan**: Pola hidup → rendah garam (<2 g natrium/hari), diet seimbang,
  olahraga 150 menit/minggu, berhenti merokok, tidur cukup. Obat sesuai
  keputusan dokter.
- **Checklist rumah**:
  - Catat tensi tiap pagi.
  - Minum obat sesuai resep.
  - Kurangi garam & makanan olahan.
  - Jalan 30 menit, 5×/minggu.
  - Turunkan berat badan bila overweight.
  - Berhenti merokok & batasi alkohol.
  - Tidur 7–8 jam + relaksasi.
- **FAQ**:
  - “Tidak pusing berarti normal?” → Tidak selalu.
  - “Boleh jamu?” → Konsultasi dulu.
  - “Sudah minum obat, boleh makan bebas?” → Tidak.
  - “Tensi naik hanya saat marah?” → Tetap perlu evaluasi.
  - “Kapan ke UGD?” → Saat muncul tanda bahaya.
- **Pesan penutup**: _“Kamu tidak sendirian — perubahan kecil yang konsisten
  itu kuat. Catat tensimu, kurangi garam, aktif bergerak, dan ikuti jadwal
  kontrol.”_

---

## Interaktivitas & Gamifikasi

- Progress bar per modul.
- Badge sederhana (mis. “3 modul tamat”).
- Kuis + sertifikat mini (PDF).
- Mode keluarga (stunting): checklist tumbuh kembang, imunisasi, ASI/MP-ASI.
- Notifikasi PWA (mis. “Ukur tekanan pagi ini”).

---

## Dukungan Keluarga & Komunitas

- Checklist pendamping (ingatkan obat, catat gejala, jadwal kontrol).
- Kartu tanda bahaya.
- Lima pertanyaan kunci untuk dokter.
- Tautan komunitas lokal (opsional).
- Feedback pengguna (“Konten ini membantu?”).

---

## UX & Aksesibilitas

- Mobile-first: tombol besar, ikon jelas.
- Ramah lansia: kontras tinggi, font besar, navigasi sederhana.
- Palet warna: biru/hijau menenangkan; merah hanya untuk bahaya.

---

## Task List

### Task 5 — Halaman template penyakit (tab/accordion)

**Prompt**

- Buat halaman detail `src/pages/Disease.tsx` untuk route `/disease/:slug`.
- Ambil data dari `getDiseaseBySlug`.
- Tampilkan tab atau accordion untuk: Apa itu, Penyebab & Faktor Risiko,
  Gejala, Tanda Bahaya, Pemeriksaan, Penanganan, Checklist, FAQ.
- Bila slug tidak ditemukan, tampilkan 404 yang ramah.
- Tambahkan tombol “Kembali ke daftar”.

**Kriteria**

- Untuk slug hipertensi, seluruh section tampil dengan data asli; penyakit
  lain menunjukkan placeholder “Konten menyusul”.

### Task 6 — Kuis 3–5 soal per modul (localStorage)

**Prompt**

- Implementasikan komponen `src/components/Quiz.tsx` (props: `questions[]`,
  `onFinish(score)`).
- Simpan hasil kuis per slug ke `localStorage` (kunci `quiz:zmc:{slug}`).
- Tambahkan tab “Kuis” di halaman disease. Untuk hipertensi, buat 5 soal MCQ
  sesuai konten README (jawaban & penjelasan singkat).
- Tampilkan skor & status lulus (≥80%).

**Kriteria**

- Progress tersimpan; refresh halaman tidak menghapus skor.

### Task 7 — Export PDF leaflet (jsPDF)

**Prompt**

- Tambahkan tombol “Unduh Leaflet (PDF)” pada halaman disease.
- Install `jspdf`.
- Buat util `src/utils/leaflet.ts` yang menghasilkan PDF A4 dengan: judul,
  ringkasan “Apa itu?”, poin Tanda Bahaya berwarna merah, dan Checklist.
- Implementasi penuh untuk hipertensi; lainnya gunakan placeholder.

**Kriteria**

- File terunduh bernama `leaflet-{slug}.pdf`, teks terbaca jelas.

### Task 8 — PWA offline caching + fallback

**Prompt**

- Lengkapi konfigurasi `vite-plugin-pwa`:
  - Cache static assets, halaman `/`, rute `/disease/*`, dan file data
    `diseases.ts` hasil bundling.
  - Tambahkan offline fallback sederhana (mis. halaman “Anda sedang
    offline”).
  - Registrasikan SW di `main.tsx` (skip waiting + prompt reload).

**Kriteria**

- Saat offline, beranda masih tampil dan halaman hipertensi dapat dibuka jika
  sudah pernah diakses.

### Task 9 — Mode High-Contrast & ukuran font

**Prompt**

- Tambahkan toggle Aksesibilitas di header: High Contrast & Font Besar.
- Simpan preferensi di `localStorage` (kunci `a11y:zmc:{pref}`).
- Tailwind: buat utility classes atau var CSS untuk kontras tinggi; set warna
  merah khusus untuk “Tanda Bahaya”.

**Kriteria**

- Toggle bekerja, preferensi bertahan setelah reload.

### Task 10 — Analitik ringan (in-app)

**Prompt**

- Implementasikan analitik sederhana berbasis `localStorage`:
  - Buat util `src/utils/analytics.ts` dengan event `track(eventName,
payload)`; kumpulkan `views` per modul, durasi baca (ms), dan `quiz_pass`.
  - Tampilkan ringkasan lokal di `/` (mis. “Modul diselesaikan: X”).
  - Jangan kirim data keluar; ini hanya placeholder.

**Kriteria**

- Event tercatat dan dapat dibaca ulang; tidak ada error saat private
  browsing.

### Task 11 — Siapkan untuk deploy di Vercel

**Prompt**

- Pastikan proyek Vercel-ready:
  - `package.json` scripts: `"build": "vite build"`, `"preview":
"vite preview --port 4173"`.
  - Tambahkan dokumen `DEPLOYMENT.md` berisi langkah deploy di Vercel (import
    repo, preset Vite, output `dist`).
  - Tambahkan badge/tautan “Deploy on Vercel” di README.

**Kriteria**

- Build menghasilkan folder `dist/`; dokumen deployment jelas.

### Task 12 (opsional) — i18n Sunda & TTS placeholder

**Prompt**

- Siapkan arsitektur i18n dasar + TTS placeholder:
  - `src/i18n/` dengan berkas `id.ts` dan `su.ts` untuk label UI.
  - Dropdown bahasa (ID/SU) di header; simpan preferensi.
  - Buat hook `useTTS()` yang sekarang hanya stub (nanti diisi integrasi TTS).

**Kriteria**

- UI bisa switch label; konten medis tetap Bahasa Indonesia untuk sementara.

---

## Cara Pakai

1. Buka Codex (repo sudah terhubung).
2. Paste Task 0 → jalankan.
3. Lanjutkan Task 1 → 11 satu per satu.
4. Setelah Task 11, push ke GitHub, lalu import ke Vercel.

Kalau kamu mau, aku bisa tulis satu “super-prompt” untuk langsung membuat
Task 1–5 sekaligus, tapi rekomendasi saya kerjakan bertahap agar hasilnya rapi
dan mudah dikoreksi.
