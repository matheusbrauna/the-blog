import { LoadingPage } from '@/components/LoadingPage'
import { HomePosts } from './components/HomePosts'
import {
  GetHighlightPostDocument,
  GetPostsDocument,
  IPost,
  useGetHighlightPostQuery,
  useGetPostsQuery,
} from '@/generated/graphql'
import { client, ssrCache } from '@/lib/urqlClient'
import { GetServerSideProps } from 'next'

export default function HomePage() {
  const [{ data: rawPosts }] = useGetPostsQuery()
  const [{ data: rawHighlightPosts }] = useGetHighlightPostQuery()

  if (!rawPosts || !rawHighlightPosts) return <LoadingPage />

  return (
    <main>
      <section className="relative bg-center bg-no-repeat bg-cover home-height bg-hero before:content-[''] before:block before:w-full before:h-full before:bg-gray-950/50 before:absolute before:top-0 before:left-0">
        <div className="container absolute top-0 z-10 flex flex-col items-center justify-center h-full max-w-2xl text-center -translate-x-1/2 left-1/2">
          <h1 className="mb-3 text-5xl font-bold">Blog da Rocketseat</h1>
          <p className="mb-6 text-xl">
            Junte-se a milhares de devs e acelere na direção dos seus objetivos.
            Transforme sua carreira em uma jornada de evolução contínua através
            das melhores tecnologias.
          </p>
          <button className="px-6 py-3 font-semibold transition-transform rounded-md hover:-translate-y-1 bg-zinc-100 text-zinc-800">
            Inscreva-se em nossa newsletter
          </button>
        </div>
      </section>
      <HomePosts
        posts={rawPosts.posts as IPost[]}
        highlightPost={rawHighlightPosts.posts[0] as IPost}
      />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(GetPostsDocument, {}).toPromise()
  await client.query(GetHighlightPostDocument, {}).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  }
}
