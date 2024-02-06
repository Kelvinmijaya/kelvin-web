interface ArticleItem {
  id: number
  title: string
  url: string
  content: string
  type: string
  updated_at: string
  created_at: string
}

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/article/list?num=${30}`,
  )

  if (!res.ok) {
    return null
  }

  return res.json()
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default async function Article() {
  const data = await getData()

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
            {data === null && (
              <div className="text-red-500">Error fetch article :(</div>
            )}
            {data &&
              data.data.length > 0 &&
              data.data.map((item: ArticleItem, i: number) => {
                const d = new Date(item.created_at)
                const formatDateList = `${d.getFullYear()}-${
                  d.getMonth() + 1
                }-${d.getDate()}`
                const formatDate = `${
                  monthNames[d.getMonth()]
                } ${d.getDate()}, ${d.getFullYear()}`

                return (
                  <article
                    key={i}
                    className="md:grid md:grid-cols-4 md:items-baseline"
                  >
                    <div className="md:col-span-3 group relative flex flex-col items-start">
                      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <a target="_blank" href={item.url}>
                          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span className="relative z-10">{item.title}</span>
                        </a>
                      </h2>
                      <time
                        className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                        dateTime={formatDateList}
                      >
                        <span
                          className="absolute inset-y-0 left-0 flex items-center"
                          aria-hidden="true"
                        >
                          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                        </span>
                        {formatDate}
                      </time>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {item.content}
                      </p>
                      <div
                        aria-hidden="true"
                        className="relative z-10 mt-4 flex items-center text-sm font-medium text-red-400"
                      >
                        {item.type === 'text' ? 'Read article' : 'Watch'}
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          className="ml-1 h-4 w-4 stroke-current"
                        >
                          <path
                            d="M6.75 5.75 9.25 8l-2.5 2.25"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <time
                      className="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-sm text-zinc-400 dark:text-zinc-500"
                      dateTime={formatDateList}
                    >
                      {formatDate}
                    </time>
                  </article>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
