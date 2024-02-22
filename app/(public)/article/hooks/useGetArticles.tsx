interface Props {
  item: number
}

async function useGetArticles({item}: Props) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/article/list?num=${item}`,
  )

  if (!res.ok) {
    return null
  }

  return res.json()
}

export default useGetArticles
