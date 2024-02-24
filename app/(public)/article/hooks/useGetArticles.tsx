type articleItemType = {
  item: number
}

async function useGetArticles({item}: articleItemType) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/article/list?num=${item}`,
  )

  if (!res.ok) {
    return {data: null, nextCursor: ''}
  }

  return res.json()
}

export default useGetArticles
