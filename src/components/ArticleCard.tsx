import { Link } from 'react-router-dom'
import type { Article } from '../data/articles'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      to={`/artikel/${article.slug}`}
      className="group block overflow-hidden rounded-2xl border border-brand-surfaceMuted bg-brand-surface shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
    >
      <div className="relative overflow-hidden [aspect-ratio:16/9]">
        {article.image && (
          <img
            src={article.image}
            alt={article.city}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-4">
        <h2 className="mb-1 text-lg font-semibold text-brand-foreground">
          {article.title}
        </h2>
        <p className="text-sm text-brand-muted">{article.city}</p>
        <p className="mt-2 text-sm text-brand-foreground">{article.summary}</p>
      </div>
    </Link>
  )
}
