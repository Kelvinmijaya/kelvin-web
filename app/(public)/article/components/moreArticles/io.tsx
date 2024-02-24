'use client'
import type {NextComponentType, NextPageContext} from 'next'
import dynamic from 'next/dynamic'
import IntersectionObserver from '@PublicComponents/intersectionObserver'

const MoreArticles = dynamic(() => import('./index'), {
  ssr: false,
})

type MoreArticleTypes = {
  nextCursor: string
}

const MoreArticlesIo: NextComponentType<
  NextPageContext,
  {},
  MoreArticleTypes
> = ({nextCursor}: MoreArticleTypes) => {
  return (
    <IntersectionObserver>
      <MoreArticles nextCursor={nextCursor} />
    </IntersectionObserver>
  )
}

export default MoreArticlesIo
