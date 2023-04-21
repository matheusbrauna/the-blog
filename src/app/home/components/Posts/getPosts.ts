import { postsQueryDocument } from '@/graphql/queries/get-posts'
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

export const getPosts = async () =>
  await request<GetPostsResponse>(
    process.env.NEXT_PUBLIC_HYGRAPH_API as string,
    postsQueryDocument,
  )
