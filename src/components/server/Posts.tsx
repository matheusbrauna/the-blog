import { HighlightsPosts } from './HighlightPosts'
import { Post } from './Post'

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
