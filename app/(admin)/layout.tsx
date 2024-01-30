import '../globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="light">
      <body suppressHydrationWarning={true} className="bg-white">
        {children}
      </body>
    </html>
  )
}
