import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/articles'

export default function Articles() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-heading font-bold">Artikel</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}
