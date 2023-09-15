import SideMenu from "@/components/SideMenu"
import '../../globals.css'

export const metadata = {
    title: 'Coinc',
    description: 'Sla',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <div>
            <SideMenu/>
            </div>
            <div>
            {children}
            </div>
        </body>
      </html>
    )
  }