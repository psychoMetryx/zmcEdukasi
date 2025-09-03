# Panduan Menambah Konten

Panduan singkat untuk menambah entri **penyakit** dan **postingan** pada aplikasi.

## Menambah Entri Penyakit

1. Buka berkas `src/data/diseases.ts`.
2. Tambahkan objek baru ke array `diseases`.
   - Wajib: `slug` (kebab-case), `name`, `summary`, `wave`.
   - Opsional: `sections` (header, apaItu, faktorRisiko, gejala, tandaBahaya, pemeriksaan, penanganan, checklist, faq) dan `quiz`.
3. Simpan berkas. Entri baru otomatis muncul di kartu penyakit pada beranda dan bisa diakses melalui rute `/disease/{slug}`.

Contoh:

```ts
{
  slug: 'contoh-penyakit',
  name: 'Contoh Penyakit',
  summary: 'Ringkasan singkat penyakit.',
  wave: 1,
}
```

## Menambah Postingan

1. Buka berkas `src/data/posts.ts`.
2. Tambahkan objek baru ke array `posts`.
   - Wajib: `slug` (kebab-case), `title`, `summary`, `content`.
3. Simpan berkas. Postingan baru otomatis tampil di halaman daftar `/posts` dan dapat dibuka melalui `/posts/{slug}`.

Contoh:

```ts
{
  slug: 'contoh-posting',
  title: 'Contoh Posting',
  summary: 'Ringkasan singkat posting.',
  content: 'Isi lengkap posting.',
}
```

## Verifikasi

Setelah menambah data, jalankan:

```bash
npm test
npx tsc -p tsconfig.json --noEmit
```

Pastikan kedua perintah selesai tanpa error.

