import type {Metadata} from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'KelvinMijaya.com',
  description:
    'Kelvin Mijaya personal web includes biography, personal achievement, personal branding, portfolio and playground for the newest web technology',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="light">
      <body className="bg-white">{children}</body>
    </html>
  )
}
