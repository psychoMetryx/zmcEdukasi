import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

export default function Posts() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-heading font-bold">Posting</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/posts/${post.slug}`}
              className="text-brand-primary underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-brand-muted">{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
