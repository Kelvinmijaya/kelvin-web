import '../globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="light">
      <body className="bg-white">{children}</body>
    </html>
  )
}
