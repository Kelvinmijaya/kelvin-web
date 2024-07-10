import type { NextPage } from 'next'

// import {ResponseArticleType, ArticleItemType} from './types/articleType'
// import ArticleListItem from './components/articleListItem'
// import MoreArticlesIo from './components/moreArticles/io'
// import useGetArticles from './hooks/useGetArticles'

export const dynamic = 'force-dynamic'

const Article: NextPage = async () => {
  // const {data, nextCursor}: ResponseArticleType = await useGetArticles({
  //   item: 5,
  // })

  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          My personal library of articles and bookmarks
        </h1>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            <iframe src='https://sudden-pharaoh-c6a.notion.site/Article-ea16ee3789104aa9b3484c7eadb3fe90'></iframe>
            {/* {data === null && (
              <div className="text-red-500">Error fetching the article.</div>
            )}
            {data &&
              data.length > 0 &&
              data.map((item: ArticleItemType, i) => {
                return (
                  <ArticleListItem
                    key={`article-item-${i}`}
                    id={item.id}
                    url={item.url}
                    title={item.title}
                    content={item.content}
                    type={item.type}
                    created_at={item.created_at}
                    updated_at={item.updated_at}
                  />
                )
              })}
            {nextCursor !== '' && <MoreArticlesIo nextCursor={nextCursor} />} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
