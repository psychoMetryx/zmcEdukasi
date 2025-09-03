// Tambahkan objek baru ke array `posts` untuk membuat posting baru.
// Setiap posting membutuhkan `slug`, `title`, `summary`, dan `content`.
export interface Post {
  slug: string
  title: string
  summary: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'selamat-datang',
    title: 'Selamat Datang',
    summary: 'Perkenalan singkat mengenai ZMC Edukasi.',
    content:
      'Ini adalah posting perdana di ZMC Edukasi yang mengenalkan konten seputar kesehatan.',
  },
]

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug)
}
