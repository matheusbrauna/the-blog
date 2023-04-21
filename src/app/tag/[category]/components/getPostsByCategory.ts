/* eslint-disable camelcase */
import { postsByCategoryDocument } from '@/graphql/queries/get-posts-by-category'
import request from 'graphql-request'

export interface IPost {
  id: string
  slug: string
  title: string
  banner: {
    url: string
  }
  createdAt: Date
  category: {
    title: string
  }
  highlight: boolean
  author: {
    name: string
  }
}

interface GetPostsResponse {
  posts: IPost[]
}

export const getPostsByCategory = async (title_contains: string) =>
  await request<GetPostsResponse, { title_contains: string }>(
    process.env.NEXT_PUBLIC_HYGRAPH_API as string,
    postsByCategoryDocument,
    {
      title_contains,
    },
  )
