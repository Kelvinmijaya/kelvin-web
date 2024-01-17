export default function Article() {
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
            <article className="md:grid md:grid-cols-4 md:items-baseline">
              <div className="md:col-span-3 group relative flex flex-col items-start">
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <a href="https://nextjs.org/conf">
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span className="relative z-10">Next.JS Conf 2023</span>
                  </a>
                </h2>
                <time
                  className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                  dateTime="2023-10-26"
                >
                  <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                  </span>
                  October 26, 2023
                </time>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Lots of interesting improvement on next js like the power of
                  server components, using app router in production, optimizing
                  third party library loading, improve DEVX and so on.
                </p>
                <div
                  aria-hidden="true"
                  className="relative z-10 mt-4 flex items-center text-sm font-medium text-red-400"
                >
                  Watch
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
                className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                dateTime="2023-10-26"
              >
                October 26, 2023
              </time>
            </article>
            <article className="md:grid md:grid-cols-4 md:items-baseline">
              <div className="md:col-span-3 group relative flex flex-col items-start">
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <a href="https://youtu.be/ZKH3DLT4BKw?si=MarL7cXfMeC_Jjkc">
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span className="relative z-10">
                      The Cost of Javascript 2023
                    </span>
                  </a>
                </h2>
                <time
                  className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                  dateTime="2023-05-22"
                >
                  <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                  </span>
                  June 22, 2023
                </time>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Copyright from Addy Osmani on youtube. He explain about the
                  cost of javascript. when we want to improve and optimize our
                  web performance, we need to understand how to reduce
                  long-task, complexity of the framework that we use, etc.
                </p>
                <div
                  aria-hidden="true"
                  className="relative z-10 mt-4 flex items-center text-sm font-medium text-red-400"
                >
                  Watch
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
                className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                dateTime="2023-05-22"
              >
                June 22, 2023
              </time>
            </article>
            <article className="md:grid md:grid-cols-4 md:items-baseline">
              <div className="md:col-span-3 group relative flex flex-col items-start">
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <a href="https://medium.com/tokopedia-engineering/my-memes-story-being-unprepared-software-engineer-team-lead-dde5700bb504">
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span className="relative z-10">
                      My Meme Story being unprepared Software Engineer Lead
                    </span>
                  </a>
                </h2>
                <time
                  className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                  dateTime="2022-07-14"
                >
                  <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                  </span>
                  April 23, 2019
                </time>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Yes, meme above show what I will think of when I&apos;m
                  promoted to Software Engineer Team Lead, be like a Leonidas
                  with strong leadership and solid strategy. Got my own team,
                  gonna be the best; that&apos;s what I think of.
                </p>
                <div
                  aria-hidden="true"
                  className="relative z-10 mt-4 flex items-center text-sm font-medium text-red-400"
                >
                  Read article
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
                className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                dateTime="2022-07-14"
              >
                April 23, 2019
              </time>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
