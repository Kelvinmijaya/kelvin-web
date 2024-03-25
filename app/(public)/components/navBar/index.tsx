'use client'

import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import PP from './images/kelvinheader.jpg'
import IconGithub from './images/icon-github.svg'

export default function NavBar() {
  type navigationList = {
    title: string
    path: string
  }
  const pathname = usePathname()
  const navList: ReadonlyArray<navigationList> = [
    {title: 'Home', path: '/'},
    {title: 'Portfolio', path: '/portfolio'},
    {title: 'Tech Gear', path: '/gear'},
    {title: 'Article', path: '/article'},
  ]
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

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
        <div className="relative inline-block text-left pointer-events-auto md:hidden">
          <button
            type="button"
            onClick={openModal}
            className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
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
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/30" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      {navList.map((list: navigationList, i) => {
                        return (
                          <div
                            className="relative grid bg-white lg:grid-cols-2"
                            key={`nav-list-${i}`}
                          >
                            <Link
                              onClick={closeModal}
                              className={` group flex w-full items-center text-center rounded-md px-4 py-4 text-sm ${
                                list.path === pathname
                                  ? 'text-red-400 dark:text-red-300'
                                  : 'text-gray-900 hover:text-red-400 dark:hover:text-red-300'
                              }`}
                              href={list.path}
                            >
                              {list.title}
                            </Link>
                          </div>
                        )
                      })}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>

        <nav className="pointer-event-auto hidden md:block">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            {navList.map((list: navigationList, i) => {
              return (
                <li key={`nav-list-${i}`}>
                  <Link
                    className={`relative block px-3 py-2 transition ${
                      list.path === pathname
                        ? 'text-red-400 dark:text-red-300'
                        : 'hover:text-red-400 dark:hover:text-red-300'
                    }`}
                    href={list.path}
                  >
                    {list.title}
                    {list.path === pathname && (
                      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-red-400/0 via-red-400/40 to-red-400/0 dark:from-red-300/0 dark:via-red-300/40 dark:to-red-300/0"></span>
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
          className="group flex text-sm font-medium text-zinc-800 transition hover:text-dark-500 dark:text-zinc-200 dark:hover:text-dark-500 py-2 px-3"
          href="https://github.com/Kelvinmijaya"
          target="_blank"
        >
          <Image
            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-red-400"
            width={24}
            height={24}
            alt="github icon"
            src={IconGithub}
            style={{color: 'transparant'}}
          />
          <span className="ml-3" style={{lineHeight: '24px'}}>
            Follow on GitHub
          </span>
        </a>
      </div>
    </div>
  )
}
