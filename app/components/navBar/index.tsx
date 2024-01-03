'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function NavBar() {
  interface navigationList {
    title: string
    path: string
  }
  const pathname = usePathname()
  const navList: ReadonlyArray<navigationList> = [
    {title: 'Home', path: '/'},
    {title: 'About', path: '/about'},
    {title: 'Portfolio', path: '/portfolio'},
    {title: 'Article', path: '/article'},
    {title: 'Contact', path: '/contact'},
  ]

  return (
    <div className="relative flex gap-4">
      <div className="flex flex-1">placeholder photo</div>
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
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
      <div className="flex justify-end md:flex-1">Login</div>
    </div>
  )
}
