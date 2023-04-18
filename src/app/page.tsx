import { Header } from '@/components/server/Header'
import { Hero } from '@/components/server/Hero'
import { Posts } from '@/components/server/Posts'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Posts />
      </main>
    </>
  )
}
