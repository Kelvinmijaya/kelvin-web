import type {NextComponentType, NextPageContext} from 'next'

interface Props {
  children: React.ReactNode
}

const Title: NextComponentType<NextPageContext, {}, Props> = ({
  children,
}: Props) => {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      {children}
    </h1>
  )
}

export {Title}
