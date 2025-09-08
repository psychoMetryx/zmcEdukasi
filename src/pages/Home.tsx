import { Link } from 'react-router-dom'
import Section from '../components/Section'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/articles'
import { getLabels, Lang } from '../i18n'

export default function Home() {
  const labels = getLabels((localStorage.getItem('ui:lang') as Lang) || 'id')
  const lines = (labels.appDescription ?? '').split(/\r?\n/).filter(Boolean)

  return (
    <div>
      <div className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-3xl p-6 md:p-8 shadow-xl select-none">
        <div className="mx-auto max-w-4xl text-center md:grid md:grid-cols-2 md:items-center md:gap-8 md:text-left">
          <div>
            <h1 className="mb-4 text-3xl font-heading font-bold">{labels.appTitle}</h1>
            <div className="mx-auto mb-6 max-w-2xl md:mx-0">
              {lines.map((line, i) => (
                <p key={i} className="mb-1">
                  {line}
                </p>
              ))}
            </div>
            <div className="flex justify-center gap-3 md:justify-start">
              <Link
                to="/diseases"
                className="rounded bg-brand-background px-6 py-3 font-heading font-semibold text-brand-primary"
              >
                Penyakit
              </Link>
              <a
                href="https://instagram.com/zihanmedicalcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg px-3 py-2 font-medium shadow hover:shadow-md focus:outline-none focus:ring"
              >
                Instagram @zihanmedicalcenter
              </a>
            </div>
          </div>
          <img
            src="https://i.imgur.com/MVolGHQ.jpeg"
            alt="Zihan Medical Center"
            className="mx-auto mt-8 w-full rounded-2xl shadow-lg md:mt-0"
          />
        </div>
      </div>

      <Section className="border-t border-brand-surfaceMuted bg-brand-background">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Section>
    </div>
  )
}
