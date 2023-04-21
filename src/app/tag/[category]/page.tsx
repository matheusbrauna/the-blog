import { Hero } from './components/Hero'
import { Posts } from './components/Posts'

export default function Category({ params }: { params: { category: string } }) {
  return (
    <main>
      <Hero category={params.category} />
      {/* @ts-expect-error Async Server Component */}
      <Posts category={params.category} />
    </main>
  )
}
