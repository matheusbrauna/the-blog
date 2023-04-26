import { BlurImage } from '@/components/BlurImage'
import { LoadingPage } from '@/components/LoadingPage'
import {
  GetPostBySlugDocument,
  useGetPostBySlugQuery,
} from '@/generated/graphql'
import { client, ssrCache } from '@/lib/urqlClient'
import { GetStaticPaths, GetStaticProps } from 'next'

export default function PostPage({ slug }: { slug: string }) {
  const [{ data }] = useGetPostBySlugQuery({
    variables: {
      slug,
    },
  })

  if (!data) return <LoadingPage />

  return (
    <section className="home-height">
      <div className="relative h-[450px] bg-gray-800">
        <BlurImage src={data.post?.banner?.url!} alt="Banner do post" />
      </div>
      <div className="container py-6 prose-sm sm:prose-base prose-invert prose-headings:font-bold prose-pre:text-xs prose-code:whitespace-break-spaces">
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
