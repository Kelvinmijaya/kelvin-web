'use client'
import dynamic from 'next/dynamic'
import IntersectionObserver from '@PublicComponents/intersectionObserver'

const MoreArticles = dynamic(() => import('./index'), {
  ssr: false,
})

interface Props {
  nextCursor: string
}

export default function MoreArticlesIo({nextCursor}: Props) {
  return (
    <IntersectionObserver>
      <MoreArticles nextCursor={nextCursor} />
    </IntersectionObserver>
  )
}
