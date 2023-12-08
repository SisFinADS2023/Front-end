import './globals.css'

export const metadata = {
  title: 'Coinc',
  description: 'Sla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
