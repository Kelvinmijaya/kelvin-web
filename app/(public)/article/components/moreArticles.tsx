'use client'
import IntersectionObserver from '../../components/intersectionObserver'
import MoreArticleList from './moreArticleList'

interface Props {
  nextCursor: string
}

export default function MoreArticles({nextCursor}: Props) {
  return (
    <IntersectionObserver>
      <MoreArticleList nextCursor={nextCursor} />
    </IntersectionObserver>
  )
}
