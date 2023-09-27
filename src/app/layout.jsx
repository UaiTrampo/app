import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UaiTrampo',
  description: 'Sua plataforma de trabalho',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">

      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
