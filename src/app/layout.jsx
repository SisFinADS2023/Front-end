export const metadata = {
  title: 'Coinc',
  description: 'Junte-se ao COINC para uma jornada de controle, compreensão e crescimento financeiro. Comece hoje e libere o potencial dos seus dados financeiros!',
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
