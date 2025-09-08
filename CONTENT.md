# Panduan Menambah Konten

Panduan singkat untuk menambah entri **penyakit** dan **artikel** pada aplikasi.

## Menambah Entri Penyakit

1. Buka berkas `src/data/diseases.ts`.
2. Tambahkan objek baru ke array `diseases`.
   - Wajib: `slug` (kebab-case), `name`, `summary`, `wave`.
   - Opsional: `sections` (header, apaItu, faktorRisiko, gejala, tandaBahaya, pemeriksaan, penanganan, checklist, faq) dan `quiz`.
3. Simpan berkas. Entri baru otomatis muncul di halaman penyakit dan bisa diakses melalui rute `/diseases/{slug}`.

Contoh:

```ts
{
  slug: 'contoh-penyakit',
  name: 'Contoh Penyakit',
  summary: 'Ringkasan singkat penyakit.',
  wave: 1,
}
```

## Menambah Artikel

1. Buka berkas `src/data/articles.ts`.
2. Tambahkan objek baru ke array `articles`.
   - Wajib: `slug` (kebab-case), `title`, `summary`, `city`, `image`, dan `content` (array blok teks/gambar).
3. Simpan berkas. Artikel baru otomatis tampil di beranda dan dapat dibuka melalui `/artikel/{slug}`.

Contoh:

```ts
{
  slug: 'contoh-artikel',
  title: 'Contoh Artikel',
  summary: 'Ringkasan singkat artikel.',
  city: 'Bandung',
  image: 'https://contoh.url/gambar.jpg',
  content: [
    { type: 'text', text: 'Isi teks' },
    { type: 'image', src: 'https://contoh.url/foto.jpg' },
  ],
}
```

## Verifikasi

Setelah menambah data, jalankan:

```bash
npm test
npx tsc -p tsconfig.json --noEmit
```

Pastikan kedua perintah selesai tanpa error.

