# Deployment

Langkah-langkah deploy ke Vercel:

1. Masuk ke [Vercel](https://vercel.com) dan pilih **New Project**.
2. Import repository GitHub ini.
3. Saat konfigurasi:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Klik **Deploy** dan tunggu proses selesai.

Untuk verifikasi lokal sebelum deploy:

```bash
npm run build
npm run preview
```
