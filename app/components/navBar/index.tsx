'use client'

import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import PP from './images/kelvinheader.jpg'

export default function NavBar() {
  interface navigationList {
    title: string
    path: string
  }
  const pathname = usePathname()
  const navList: ReadonlyArray<navigationList> = [
    {title: 'Home', path: '/'},
    {title: 'Portfolio', path: '/portfolio'},
    {title: 'Article', path: '/article'},
  ]

  return (
    <div className="relative flex gap-4">
      <div className="flex flex-1">
        <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
          <Link href={'/'} className="pointer-events-auto">
            <Image
              className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
              width={64}
              height={64}
              alt="kelvin mijaya profile picture"
              src={PP}
              style={{color: 'transparant'}}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-1 justify-end md:justify-center">
        <div className="pointer-events-auto md:hidden" data-headlessui-state="">
          <button
            className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
            id="headlessui-popover-button-:R2miqla:"
          >
            Menu
            <svg
              viewBox="0 0 8 6"
              aria-hidden="true"
              className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
            >
              <path
                d="M1.75 1.75 4 4.25l2.25-2.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div
          style={{
            position: 'fixed',
            top: '1px',
            left: '1px',
            width: '1px',
            height: 0,
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: 0,
            display: 'none',
          }}
        ></div>
        <nav className="pointer-event-auto hidden md:block">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            {navList.map((list: navigationList, i) => {
              return (
                <li key={`nav-list-${i}`}>
                  <Link
                    className={`relative block px-3 py-2 transition ${
                      list.path === pathname
                        ? 'text-teal-500 dark:text-teal-400'
                        : 'hover:text-teal-500 dark:hover:text-teal-400'
                    }`}
                    href={list.path}
                  >
                    {list.title}
                    {list.path === pathname && (
                      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <div className="flex justify-end md:flex-1">
        <a
          className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500 py-2 px-3"
          href="https://github.com/Kelvinmijaya"
          target="_blank"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
            ></path>
          </svg>
          <span className="ml-3" style={{lineHeight: '24px'}}>
            Follow on GitHub
          </span>
        </a>
      </div>
    </div>
  )
}
