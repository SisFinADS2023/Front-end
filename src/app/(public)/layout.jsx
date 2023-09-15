import '@/app/globals.css'

export const metadata = {
    title: 'Coinc',
    description: 'Sla',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="grid grid-cols-2 divide-x">
            <div>Info</div>
            <div>{children}</div>  
        </body>
      </html>
    )
  }