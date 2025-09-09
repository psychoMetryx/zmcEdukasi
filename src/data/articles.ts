// Tambahkan objek baru ke array `articles` untuk membuat artikel baru.
// Setiap artikel membutuhkan `slug`, `title`, `summary`, `city`, `image`,
// dan `content` yang dapat berupa teks ataupun gambar.
import articlePlaceholder from '../assets/article-placeholder.svg'
export type ArticleBlock =
  | { type: 'text'; text: string }
  | { type: 'image'; src: string; alt?: string }

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
]

export function getArticleBySlug(slug: string) {
  return articles.find((p) => p.slug === slug)
}
