import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import NavBar from './components/navBar'
import Footer from './components/footer'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'KelvinMijaya.com',
  description:
    'Kelvin Mijaya personal web includes biography, personal achievement, personal branding, portfolio and playground for the newest web technology',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
          crossOrigin="use-credentials"
        />
      </head>
      <body
        className={(inter.className, 'flex h-full bg-zinc-50 dark:bg-black')}
      >
        <div className="flex w-full">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
            </div>
          </div>
          <div className="relative flex w-full flex-col">
            <header className="relative z-50 flex flex-none flex-col">
              <div className="top-0 z-10 h-16 pt-6">
                <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
                  <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-6 sm:px-8 lg:px-12">
                      <div className="mx-auto max-w-2xl lg:max-w-5xl">
                        <NavBar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-auto">
              <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-6 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className="mt-32 flex-none">
              <div className="sm:px-8">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
                    <div className="relative px-6 sm:px-8 lg:px-12">
                      <div className="mx-auto max-w-2xl lg:max-w-5xl">
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
