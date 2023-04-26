import { Star } from '@phosphor-icons/react'
import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Avatar } from '@/components/Avatar'
import Image from 'next/image'
import { IPost } from '@/generated/graphql'
dayjs.extend(relativeTime)

export function HighlightPost({ highlightPost }: { highlightPost: IPost }) {
  const { slug, title, author, banner, category, createdAt } = highlightPost
  return (
    <Link
      href={`/post/${slug}`}
      className="relative block h-full col-span-2 p-10 overflow-hidden transition-transform rounded-lg hover:-translate-y-1 shadow-postShadow"
    >
      <Image
        src={banner?.url!}
        alt="Banner"
        fill
        className="absolute top-0 left-0 object-cover object-center -z-10"
      />
      <div className="flex flex-col h-full gap-2">
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <Avatar
              authorName={author?.name!}
              profileImageURL={author?.avatarImage?.url!}
            />
            <span className="font-bold tracking-wide">{category?.title}</span>
          </div>
          <span className="flex items-center h-6 gap-1 px-2 font-semibold bg-white text-zinc-950 rounded-2xl">
            <Star weight="fill" className="text-xs" />
            Em destaque
          </span>
        </div>
        <div className="flex flex-col justify-between flex-1">
          <h2 className="text-4xl max-w-[80%] tracking-wider font-bold">
            {title}
          </h2>
          <div className="flex justify-between">
            <div>
              <span className="capitalize">{`${dayjs(
                createdAt as Date,
              ).fromNow()}`}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
