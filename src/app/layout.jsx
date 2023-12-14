export const metadata = {
  title: 'Coinc',
  description: 'Sla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="../favicon.ico" sizes="any" /></head>
      <body>
          {children}
      </body>
    </html>
  )
}
