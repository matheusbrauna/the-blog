import './globals.css'
import '@/lib/dayjs'
import { ReactNode } from 'react'
import { Source_Sans_Pro as SourceSansPro } from 'next/font/google'
import { Footer } from '@/components/server/Footer'
import { Header } from '@/components/server/Header'

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
        {/* @ts-expect-error Async Server Component */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
