import '@/app/globals.css'

export const metadata = {
    title: 'Coinc',
    description: 'Sla',
  }

  export default function RootLayout({ children }) {
    return (
      <>
            <div>Info</div>
            <div>{children}</div>
      </>
    )
  }