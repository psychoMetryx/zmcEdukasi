import { useParams, Link } from 'react-router-dom'
import { articles, type ArticleBlock } from '../data/articles'

export default function Article() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find((p) => p.slug === slug)

  if (!article) {
    return (
      <div>
        <h1 className="mb-4 text-xl font-heading font-semibold">404</h1>
        <p>Artikel tidak ditemukan.</p>
        <Link to="/" className="text-brand-primary underline">
          Kembali ke beranda
        </Link>
      </div>
    )
  }

  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-heading font-bold">{article.title}</h1>
      <p className="text-sm text-brand-muted">{article.city}</p>
      {article.content.map((block: ArticleBlock, i) => {
        if (block.type === 'text') {
          return <p key={i}>{block.text}</p>
        }
        const altText = block.alt?.trim() || article.title
        return (
          <img
            key={i}
            src={block.src}
            alt={altText}
            className="w-full rounded"
          />
        )
      })}
    </article>
  )
}
