'use client' // Ensure this is a client component

import Link from 'next/link'
import { articles } from '../articles' // Import directly from articles.js

export default function ArticlesList() {
  if (articles.length === 0) {
    return <div>No articles available</div>
  }

  return (
    <div className="h-auto w-full px-4 md:px-0 md:w-3/4 mx-auto">
      <h1 className="text-3xl font-bold text-center">احدث المقالات</h1>
      {articles.map((article) => {
        console.log(article)
        return (
          <div key={article.slug}>
            <Link
              href={`/articles/${article.slug}`}
              className="text-2xl underline text-blue-500"
            >
              {article.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
