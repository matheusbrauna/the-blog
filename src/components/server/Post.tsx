import { Avatar } from '../client/Avatar'

export function Post() {
  return (
    <article className="flex flex-col post-component">
      <div className="h-56 p-6 bg-[url('../assets/post-banner.png')] bg-no-repeat bg-cover bg-center">
        <Avatar
          authorName="Matheus Braúna"
          profileImageURL="https://github.com/matheusbrauna.png"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 pt-14">
        <h2 className="text-xl font-semibold tracking-wider text-gray-200">
          Como fazer um commit - Conventional Commits
        </h2>
        <div className="text-sm text-gray-300">
          <span>há 21 dias</span>
          <span className="px-2">•</span>
          <span>3 min de leitura</span>
        </div>
      </div>
    </article>
  )
}
