import './globals.css'
import { ReactNode } from 'react'
import { Source_Sans_Pro as SourceSansPro } from 'next/font/google'
import { Header } from '@/components/server/Header'
import { Footer } from '@/components/server/Footer'

const roboto = SourceSansPro({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'The Blog',
  description: 'My blog created with next 13',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
