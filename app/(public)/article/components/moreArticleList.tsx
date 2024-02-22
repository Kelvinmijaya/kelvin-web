'use client'
import {useState, useEffect} from 'react'
import useSWRInfinite from 'swr/infinite'
import {useInView} from 'react-intersection-observer'
import {ResponseArticleType, ArticleItemType} from '../types/articleType'
import ArticleListItem from './articleListItem'

interface Props {
  nextCursor: string
}

interface SWRFormat {
  data: any[] | undefined
  error: any
  isLoading: boolean
  size: number
  setSize: any
  mutate: any
}

const fetcher = async (url: string) =>
  fetch(url, {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())

export default function MoreArticleList({nextCursor}: Props) {
  // fetch data article
  const {data, error, isLoading, size, setSize, mutate}: SWRFormat =
    useSWRInfinite(
      (pageIndex: number, previousPageData: ResponseArticleType) => {
        // first page, we don't have `previousPageData`
        if (pageIndex === 0)
          return `${
            process.env.NEXT_PUBLIC_API_URL
          }/article/list?num=${4}&cursor=${nextCursor}`

        // reached the end
        if (previousPageData && !previousPageData.data) return null

        // add the cursor to the API endpoint
        return `${
          process.env.NEXT_PUBLIC_API_URL
        }/article/list?num=${4}&cursor=${previousPageData.nextCursor}`
      },
      fetcher,
      {
        initialSize: 1,
        revalidateAll: true,
        revalidateFirstPage: false,
        revalidateIfStale: true,
        revalidateOnReconnect: true,
        persistSize: false,
        parallel: false,
      },
    )

  const {ref, inView, entry} = useInView({
    /* Optional options */
    threshold: 0,
  })

  useEffect(() => {
    if (inView) {
      setSize(size + 1)
    }
  }, [inView])

  if (isLoading) {
    return <>Loading...</>
  }

  if (!data && !isLoading && error) {
    return <div className="text-red-500">Error fetching the article.</div>
  }

  return (
    <>
      {data &&
        data.map((item) =>
          item.data.map((articleItem: ArticleItemType, i: number) => {
            return (
              <ArticleListItem
                key={`article-item-more-${i}`}
                id={articleItem.id}
                url={articleItem.url}
                title={articleItem.title}
                content={articleItem.content}
                type={articleItem.type}
                created_at={articleItem.created_at}
                updated_at={articleItem.updated_at}
              />
            )
          }),
        )}
      {data && data[data.length - 1].nextCursor !== '' && <div ref={ref}></div>}
    </>
  )
}
