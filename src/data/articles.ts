// Tambahkan objek baru ke array `articles` untuk membuat artikel baru.
// Setiap artikel membutuhkan `slug`, `title`, `summary`, `city`, `image`,
// dan `content` yang dapat berupa teks ataupun gambar.
import articlePlaceholder from '../assets/article-placeholder.svg'
export type ArticleBlock =
  | { type: 'text'; text: string }
  | { type: 'image'; src: string; alt: string }

export interface Article {
  slug: string
  title: string
  summary: string
  city: string
  image: string
  content: ArticleBlock[]
}

export const articles: Article[] = [
  {
    slug: 'selamat-datang',
    title: 'Selamat Datang',
    summary: 'Perkenalan singkat mengenai ZMC Edukasi.',
    city: 'Bandung',
    image: articlePlaceholder,
    content: [
      {
        type: 'text',
        text: 'Ini adalah artikel perdana di ZMC Edukasi yang mengenalkan konten seputar kesehatan.',
      },
    ],
  },
  {
    slug: 'diet-hipertensi',
    title: 'Diet Hipertensi',
    summary: 'Panduan diet hipertensi dengan makanan khas Sunda.',
    city: 'Bandung',
    image: 'https://i.imgur.com/HwU2kKn.jpeg',
    content: [
      {
        type: 'image',
        src: 'https://i.imgur.com/Wjcb549.jpeg',
        alt: 'Ilustrasi makanan sehat rendah garam',
      },
      {
        type: 'text',
        text: `1. Kurangi garam (natrium)

Target < 5 g garam/hari (~1 sendok teh dapur).
Masalah di Sunda: asin pedas dari sambal, ikan asin, oncom, sayur asem yang suka ditambah garam.
Solusi: bikin sambel lebih banyak tomat/kencur/jeruk limau daripada garam, dan ganti ikan asin dengan ikan segar/dibakar tanpa garam berlebih.`,
      },
      {
        type: 'text',
        text: `2. Perbanyak buah & sayur

Untungnya, budaya Sunda kaya lalapan (mentimun, kemangi, leunca, selada, tomat, jengkol/pete).
Tips: jadikan lalapan segar sebagai lauk utama, jangan cuma “tempelan”.
Buah: pepaya, pisang, semangka, jeruk, mangga—semua kaya kalium, baik buat menyeimbangkan natrium.`,
      },
      {
        type: 'text',
        text: `3. Pilih protein sehat

Ganti gorengan ayam/ikan dengan pepes, pindang, pepes jamur, tahu-tempe kukus/bakar.
Batasi daging merah (sate maranggi, empal, gepuk) → cukup 1–2 kali/minggu.`,
      },
      {
        type: 'text',
        text: `4. Batasi minyak dan gorengan

Gorengan bala-bala, cireng, gehu, combro → sering jadi cemilan darah tinggi.
Alternatif: rebusan/pepes/sayur kuah bening (sayur asem, lodeh tapi santan encer).`,
      },
      {
        type: 'text',
        text: `5. Kurangi santan pekat

Gulai, opor, sayur lodeh kental = tinggi lemak jenuh.
Tips: pakai santan encer atau ganti dengan susu low-fat kalau perlu.`,
      },
      {
        type: 'text',
        text: `6. Batasi kopi manis & teh manis

Orang Sunda suka ngopi/teh panas manis sambil ngobrol.
Sarankan kopi/teh tanpa gula, atau pakai pemanis rendah kalori bila susah berhenti.`,
      },
      {
        type: 'text',
        text: `7. Aktivitas fisik

Jalan pagi di kampung, ke sawah/kebun = olahraga alami.
Minimal 30 menit/hari.`,
      },
      {
        type: 'text',
        text: `Contoh Menu Harian ala Sunda Ramah Hipertensi

Pagi: Nasi merah + pepes tahu + lalapan timun & tomat + teh tawar hangat.
Siang: Nasi putih/merah + ikan mas pepes + sayur asem + lalapan selada + buah pepaya.
Sore: Ubi rebus + pisang + air putih.
Malam: Nasi merah sedikit + tumis bayam jagung tanpa banyak garam + tempe bakar + jeruk.`,
      },
    ],
  },
  {
    slug: 'pola-hidup-budaya-sehat',
    title: 'Pola Hidup dan Budaya Sehat',
    summary:
      'Langkah praktis membangun kebiasaan sehat yang selaras dengan budaya lokal, mulai dari makan, bergerak, sampai menjaga kebersihan.',
    city: 'Yogyakarta',
    image: 'https://i.imgur.com/g2CYKCD.jpeg',
    content: [
      {
        type: 'text',
        text: `Mengapa budaya sehat penting?

Gaya hidup sehat lebih mudah dijalankan kalau sesuai dengan budaya sehari-hari. Dengan menyesuaikan pola makan, aktivitas, dan kebiasaan kebersihan ke konteks lokal, perubahan terasa lebih alami dan berkelanjutan.`,
      },
      {
        type: 'text',
        text: `Pola makan berbasis pangan lokal

- Prioritaskan bahan segar: sayur hijau (bayam, kangkung), buah musiman (pisang, pepaya, semangka), sumber protein nabati (tempe, tahu).
- Kurangi gula dan minyak berlebih pada kudapan tradisional: pilih kukusan atau panggangan untuk mengganti gorengan.
- Gunakan bumbu rempah untuk rasa: kunyit, jahe, serai, daun jeruk membantu menekan kebutuhan garam.`,
      },
      {
        type: 'text',
        text: `Aktivitas fisik yang kontekstual

- Jalan kaki ke pasar, bersepeda keliling kampung, atau senam pagi di balai warga.
- Rutinitas domestik seperti berkebun, mengepel, atau menjemur pakaian bisa dihitung sebagai gerak aktif jika dilakukan 30–45 menit total per hari.
- Gabungkan stretching ringan sebelum beribadah atau sebelum mulai bekerja untuk menjaga mobilitas sendi.`,
      },
      {
        type: 'text',
        text: `Istirahat dan manajemen stres

- Ciptakan jam tidur yang konsisten, minimalkan kopi atau teh pekat setelah sore.
- Manfaatkan momen sosial lokal: arisan, pengajian, atau kumpul RT sebagai ruang saling dukung kesehatan mental.
- Latih relaksasi sederhana seperti napas dalam 4-7-8 atau dzikir/meditasi 5 menit ketika mulai merasa cemas.`,
      },
      {
        type: 'text',
        text: `Kebersihan diri dan lingkungan

- Biasakan cuci tangan pakai sabun sebelum makan dan setelah beraktivitas di luar.
- Jaga kebersihan dapur: ganti spons/cuci lap secara berkala, pisahkan talenan untuk mentah dan matang.
- Kelola sampah organik jadi kompos, pisahkan sampah anorganik untuk mencegah vektor penyakit.`,
      },
      {
        type: 'text',
        text: `Contoh jadwal harian budaya sehat

Pagi: air hangat + buah, sarapan bubur kacang hijau/ubi rebus, jalan kaki 20 menit.
Siang: nasi + sayur bening + tempe/ikan bakar, minum air putih 2 gelas, stretching 5 menit.
Sore: buah potong atau rujak tanpa gula berlebih, kompres hangat untuk relaksasi pundak.
Malam: porsi nasi lebih kecil, lauk rebusan atau kukusan, tidur 7–9 jam dalam ruangan yang cukup gelap.`,
      },
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((p) => p.slug === slug)
}
