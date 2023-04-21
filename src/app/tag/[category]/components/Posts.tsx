/* eslint-disable camelcase */
import { Post } from '@/components/server/Post'
import { getPostsByCategory } from './getPostsByCategory'

export async function Posts({ title_contains }: { title_contains: string }) {
  const { posts } = await getPostsByCategory(title_contains)

  console.log(posts)

  return (
    <section className="pt-16 pb-10">
      <div className="container flex flex-col items-center justify-center gap-14">
        <div className="grid grid-flow-col gap-10 place-content-center">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <span className="text-gray-300">Página 1 de 1</span>
      </div>
    </section>
  )
}
