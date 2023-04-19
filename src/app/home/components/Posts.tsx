import { Post } from '@/components/server/Post'
import { HighlightsPosts } from './HighlightPosts'

export function Posts() {
  return (
    <section className="pt-16 pb-10">
      <div className="container grid grid-cols-3 gap-10">
        <HighlightsPosts />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  )
}
