import type {NextPage} from 'next'
import Link from 'next/link'

const Playground: NextPage = () => {
  return (
    <>
      <Link
        className="group flex w-full items-center text-center rounded-md px-4 py-4 text-sm"
        href={'/playground/golang-pointers'}
      >
        Go - Pointers
      </Link>
    </>
  )
}

export default Playground
