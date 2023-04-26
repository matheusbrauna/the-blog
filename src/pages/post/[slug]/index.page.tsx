import { LoadingPage } from '@/components/LoadingPage'
import {
  GetPostBySlugDocument,
  useGetPostBySlugQuery,
} from '@/generated/graphql'
import { client, ssrCache } from '@/lib/urqlClient'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'

export default function PostPage({ slug }: { slug: string }) {
  const [{ data }] = useGetPostBySlugQuery({
    variables: {
      slug,
    },
  })

  if (!data) return <LoadingPage />

  return (
    <section className="home-height">
      <div className="relative w-full h-[450px] bg-gray-800">
        <Image
          src={data.post?.banner?.url!}
          alt=""
          fill
          className="object-cover object-center"
          quality={100}
          priority
        />
      </div>
      <div className="container py-6 prose-base prose-invert prose-headings:font-bold prose-code:bg-gray-700 prose-code:p-2 prose-code:inline-block">
        <h1 className="mt-10">{data?.post?.title!}</h1>
        <article
          dangerouslySetInnerHTML={{ __html: data?.post?.content?.html! }}
        />
      </div>
    </section>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  await client
    .query(GetPostBySlugDocument, {
      slug,
    })
    .toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug,
    },
  }
}
