'use client'
import {useState} from 'react'
import useSWRInfinite from 'swr/infinite'

import ArticleItem from './components/articleItem'
import ArticlePopupDialog from './components/articlePopupDialog'

//SWR Utils
import {fetcher, config} from '../../utils/swrUtils'
import type {SWRTypeFormat} from '../../utils/swrUtils'

// Types
import type {ArticleItemType, ResponseArticleType} from './types/articleType'

type ArticleListSWR = SWRTypeFormat & {
  data: any[] | undefined
}

// Key for SWR
const getKey = (pageIndex: number, previousPageData: ResponseArticleType) => {
  // first page, we don't have `previousPageData`
  if (pageIndex === 0)
    return `${process.env.NEXT_PUBLIC_API_URL}/article/list?num=${10}`

  // reached the end
  if (previousPageData && !previousPageData.data) return null

  // add the cursor to the API endpoint
  return `${process.env.NEXT_PUBLIC_API_URL}/article/list?num=${10}&cursor=${
    previousPageData.nextCursor
  }`
}

export default function Article() {
  // State for dialog
  const [openDialog, setOpenDialog] = useState({
    category: '',
    isOpen: false,
    id: -1,
  })

  // fetch data article
  const {data, error, isLoading, size, setSize, mutate}: ArticleListSWR =
    useSWRInfinite(getKey, fetcher, config)

  if (error) {
    return (
      <div className="flex w-full border-l-6 border-[#F87171] bg-[#F87171] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
        <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#F87171]">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
              fill="#ffffff"
              stroke="#ffffff"
            ></path>
          </svg>
        </div>
        <div className="w-full">
          <h5 className="mb-3 font-semibold text-[#B45454]">
            Failed to fetch Article list data.
          </h5>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        {isLoading ? (
          <div className="flex h-screen items-center justify-center bg-white">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
          </div>
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-zinc-50 text-left dark:bg-meta-4">
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Title
                </th>
                <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                  Type
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  URL
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map(
                  ({data: page}) =>
                    page &&
                    page.map((articlesItem: ArticleItemType, i: number) => (
                      <ArticleItem
                        key={`article-item-more-${i}`}
                        id={articlesItem.id}
                        url={articlesItem.url}
                        title={articlesItem.title}
                        content={articlesItem.content}
                        type={articlesItem.type}
                        created_at={articlesItem.created_at}
                        updated_at={articlesItem.updated_at}
                        setOpenDialog={setOpenDialog}
                      />
                    )),
                )}
            </tbody>
          </table>
        )}
      </div>
      {data && data[data.length - 1].nextCursor !== '' && (
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full"
          onClick={(e) => {
            e.preventDefault()
            setSize(size + 1)
          }}
        >
          Load More
        </button>
      )}
      <ArticlePopupDialog
        mutate={mutate}
        openDialog={openDialog}
        setOpen={setOpenDialog}
      />
    </div>
  )
}
