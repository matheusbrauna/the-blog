import { HighlightPost } from './HightlightPost'
import { getPosts } from './getPosts'

export async function HighlightsPosts() {
  const { posts } = await getPosts()

  return (
    <>
      <div className="hover:-translate-y-1 transition-transform cursor-pointer col-span-2 shadow-postShadow bg-[url('../assets/post-banner.png')] bg-cover bg-center bg-no-repeat overflow-hidden rounded-lg">
        {posts.map((post) => (
          <HighlightPost key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
