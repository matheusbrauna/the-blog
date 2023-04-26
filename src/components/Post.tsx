import Link from 'next/link'
import { Avatar } from './Avatar'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from 'next/image'
import { IPost } from '@/generated/graphql'
dayjs.extend(relativeTime)

export function Post({ post }: { post: IPost }) {
  const { author, slug, banner, category, createdAt, title } = post

  return (
    <Link
      href={`/post/${slug}`}
      className="flex flex-col transition-transform cursor-pointer overflow-hidden max-w-sm h-[420px] rounded-lg shadow-postShadow hover:-translate-y-1"
    >
      <div className="relative w-full h-56 p-6">
        <Image
          src={banner?.url!}
          alt="Banner do post"
          fill
          className="absolute top-0 left-0 object-cover object-center -z-10"
        />
        <Avatar
          authorName={author?.name!}
          profileImageURL={author?.avatarImage?.url!}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6">
        <span className="font-semibold text-rose-500">{category?.title}</span>
        <h2 className="text-xl font-semibold tracking-wider text-gray-200">
          {title}
        </h2>
        <div className="text-sm text-gray-300">
          <span>{`${dayjs(createdAt as Date).fromNow()}`}</span>
        </div>
      </div>
    </Link>
  )
}
