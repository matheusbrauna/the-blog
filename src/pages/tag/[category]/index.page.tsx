import {
  GetPostsByCategoryDocument,
  IPost,
  useGetPostsByCategoryQuery,
} from '@/generated/graphql'
import { Hero } from './components/Hero'
import { Posts } from './components/Posts'
import { LoadingPage } from '@/components/LoadingPage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { client, ssrCache } from '@/lib/urqlClient'

export default function Category({ category }: { category: string }) {
  const [{ data }] = useGetPostsByCategoryQuery({
    variables: {
      title_contains: category,
    },
  })

  if (!data) return <LoadingPage />

  return (
    <main>
      <Hero category={category} />
      <Posts posts={data.posts as IPost[]} />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string
  await client
    .query(GetPostsByCategoryDocument, {
      category,
    })
    .toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData(),
      category,
    },
  }
}
