import { Post } from '@/components/Post'
import { HighlightPost } from './HighlightPost'
import { IPost } from '@/generated/graphql'

export function HomePosts({
  posts,
  highlightPost,
}: {
  posts: IPost[]
  highlightPost: IPost
}) {
  return (
    <section className="pt-16 pb-10">
      <div className="container flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        <HighlightPost highlightPost={highlightPost} />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
