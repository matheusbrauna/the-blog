import { Post } from '@/components/server/Post'

export function Posts() {
  return (
    <section className="pt-16 pb-10">
      <div className="container flex flex-col items-center justify-center gap-14">
        <div className="grid grid-flow-col gap-10 place-content-center">
          <Post />
          <Post />
        </div>
        <span className="text-gray-300">Página 1 de 1</span>
      </div>
    </section>
  )
}
