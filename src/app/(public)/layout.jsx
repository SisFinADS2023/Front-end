import 'tailwindcss/tailwind.css';
import { Banner } from '../../components/Banner'

export const metadata = {
  title: 'Coinc',
  description: 'Sla',
}

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex">
        <Banner />
        {children}
      </div>
    </>
  )
}
