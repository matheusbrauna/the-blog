import { Post } from '@/components/server/Post'
import { HighlightsPosts } from './HighlightPosts'

export function Posts() {
  return (
    <section className="pt-16 pb-10">
      <div className="container grid grid-cols-3 gap-10">
        <HighlightsPosts />
        <Post slug="post-1" />
        <Post slug="post-2" />
        <Post slug="post-3" />
        <Post slug="post-4" />
        <Post slug="post-5" />
      </div>
    </section>
  )
}
