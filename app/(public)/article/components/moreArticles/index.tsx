'use client'
import {useEffect} from 'react'
import type {NextComponentType, NextPageContext} from 'next'
import useSWRInfinite from 'swr/infinite'
import {useInView} from 'react-intersection-observer'

// Libs
import Fetcher from '@PublicUtils/fetcher'
import SwrConfig from '@PublicUtils/swrConfig'

// Types
import {ResponseArticleType, ArticleItemType} from '../../types/articleType'

// Components
import ArticleListItem from '../articleListItem'

type Props = {
  nextCursor: string
}

type SWRFormat = {
  data: any[] | undefined
  error: any
  isLoading: boolean
  size: number
  setSize: any
  mutate: any
  isValidating: boolean
}

const MoreArticles: NextComponentType<NextPageContext, {}, Props> = ({
  nextCursor,
}: Props) => {
  // fetch data article for page 2 and so on
  const {data, error, isLoading, size, setSize, isValidating}: SWRFormat =
    useSWRInfinite(
      (pageIndex: number, previousPageData: ResponseArticleType) => {
        // first page, we don't have `previousPageData`
        if (pageIndex === 0)
          return [
            `${
              process.env.NEXT_PUBLIC_API_URL
            }/article/list?num=${5}&cursor=${nextCursor}`,
            'GET',
          ]

        // reached the end
        if (previousPageData && !previousPageData.data) return null

        // add the cursor to the API endpoint
        return [
          `${process.env.NEXT_PUBLIC_API_URL}/article/list?num=${5}&cursor=${
            previousPageData.nextCursor
          }`,
          'GET',
        ]
      },
      Fetcher,
      SwrConfig,
    )

  const {ref, inView} = useInView({
    threshold: 1,
  })

  useEffect(() => {
    if (inView && !isValidating) {
      setSize(size + 1)
    }
  }, [inView, isValidating, setSize, size])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!data && !isLoading && error && (
        <div className="text-red-500">Error fetching the article.</div>
      )}
      {data &&
        data.map(({data: item}) =>
          item.map((articleItem: ArticleItemType, i: number) => {
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
      {data && data[data.length - 1].nextCursor !== '' && (
        <div ref={ref}>{isLoading && 'Loading..'}</div>
      )}
    </>
  )
}

export default MoreArticles
