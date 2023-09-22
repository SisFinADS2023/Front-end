import SideMenu from "@/components/SideMenu"
import Header from "@/components/Header"
import '../../globals.css'

export const metadata = {
  title: 'Coinc',
  description: 'Sla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-screen flex bg-main">
          <SideMenu />
          <div className="flex flex-col w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}