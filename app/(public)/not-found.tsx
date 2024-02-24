'use client'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mt-16 sm:mt-20 text-center">
      <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Lost your way?
      </h2>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Sorry i could not find requested resource :(
      </p>
      <Link className="text-center" href="/">
        <div
          aria-hidden="true"
          className="relative z-10 mt-24 items-center text-sm font-medium text-red-400"
        >
          Back to homepage
        </div>
      </Link>
    </div>
  )
}
