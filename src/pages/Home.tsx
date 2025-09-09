import { Link } from 'react-router-dom'
import Section from '../components/Section'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/articles'
import { getLabels, Lang } from '../i18n'

export default function Home() {
  const labels = getLabels((localStorage.getItem('ui:lang') as Lang) || 'id')
  const lines = (labels.appDescription || '').split(/\r?\n/).filter(Boolean)

  return (
    <div>
      <div className="bg-brand-primary bg-gradient-to-br from-brand-primary to-brand-accent rounded-3xl p-6 md:p-8 shadow-xl select-none">
        <div className="mx-auto max-w-4xl text-center md:flex md:items-center md:gap-8 md:text-left">
          <div className="md:w-1/2">
            <h1 className="mb-4 text-3xl font-heading font-bold text-brand-background">{labels.appTitle}</h1>
            <div className="mx-auto mb-6 max-w-2xl md:mx-0">
              {lines.map((line, i) => (
                <p key={i} className="mb-1 text-brand-background">
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
                className="rounded bg-brand-background px-6 py-3 font-heading font-semibold text-brand-primary"
              >
                Instagram
              </a>
            </div>
          </div>
          <img
            src="https://i.imgur.com/MVolGHQ.jpeg"
            alt="Zihan Medical Center"
            className="mx-auto mt-8 w-full max-w-md rounded-2xl shadow-lg md:mt-0 md:w-1/2"
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
