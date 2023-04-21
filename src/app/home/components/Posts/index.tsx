import { Post } from '@/components/server/Post'
import { HighlightsPosts } from './HighlightPosts'
import { getPosts } from './getPosts'

export async function Posts() {
  const { posts } = await getPosts()

  return (
    <section className="pt-16 pb-10">
      <div className="container grid grid-cols-3 gap-10">
        {/* @ts-expect-error Async Server Component */}
        <HighlightsPosts />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
