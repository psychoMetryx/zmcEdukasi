
# Panduan Menambah Konten

Panduan singkat untuk menambah entri **artikel** pada aplikasi.

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

