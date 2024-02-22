interface ResponseArticleType {
  data: [ArticleItemType]
  nextCursor: string
}

interface ArticleItemType {
  id: number
  url: string
  title: string
  content: string
  type: string
  created_at: string
  updated_at: string
}

export type {ResponseArticleType, ArticleItemType}
