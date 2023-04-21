import { Hero } from './components/Hero'
import { Posts } from './components/Posts'

export function Home() {
  return (
    <main>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <Posts />
    </main>
  )
}
