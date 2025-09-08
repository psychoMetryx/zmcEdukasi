// Tambahkan objek baru ke array `articles` untuk membuat artikel baru.
// Setiap artikel membutuhkan `slug`, `title`, `summary`, `city`, `image`,
// dan `content` yang dapat berupa teks ataupun gambar.
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
    image: '',
    content: [
      {
        type: 'text',
        text: 'Ini adalah artikel perdana di ZMC Edukasi yang mengenalkan konten seputar kesehatan.',
      },
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((p) => p.slug === slug)
}
