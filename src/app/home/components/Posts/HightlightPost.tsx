'use client'

import { Avatar } from '@/components/client/Avatar'
import { Star } from '@phosphor-icons/react'
import Link from 'next/link'
import { IPost } from './getPosts'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

interface HighlightPostProps {
  post: IPost
}

export function HighlightPost({ post }: HighlightPostProps) {
  return (
    <Link href={post.slug} className="block h-full p-10">
      <div className="flex flex-col h-full gap-2">
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <Avatar
              authorName={post.author.name}
              profileImageURL={post.banner.url}
            />
            <span className="font-bold tracking-wide">
              {post.category.title}
            </span>
          </div>
          <span className="flex items-center h-6 gap-1 px-2 font-semibold bg-white text-zinc-950 rounded-2xl">
            <Star weight="fill" className="text-xs" />
            {post.highlight && 'Em destaque'}
          </span>
        </div>
        <div className="flex flex-col justify-between flex-1">
          <h2 className="text-4xl max-w-[80%] tracking-wider font-bold">
            {post.title}
          </h2>
          <div className="flex justify-between">
            <div>
              <span className="capitalize">{`${dayjs(
                post.createdAt,
              ).fromNow()}`}</span>
              <span className="px-2">•</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
