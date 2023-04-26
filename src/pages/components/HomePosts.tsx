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
      <div className="container grid grid-cols-3 gap-10">
        <HighlightPost highlightPost={highlightPost} />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
