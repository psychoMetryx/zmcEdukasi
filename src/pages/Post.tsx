import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'

export default function Post() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div>
        <h1 className="mb-4 text-xl font-heading font-semibold">404</h1>
        <p>Posting tidak ditemukan.</p>
        <Link to="/posts" className="text-brand-primary underline">
          Kembali ke daftar
        </Link>
      </div>
    )
  }

  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-heading font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}
