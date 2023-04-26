import { cacheExchange, createClient, fetchExchange, ssrExchange } from 'urql'

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })
const client = createClient({
  url: process.env.NEXT_PUBLIC_HYGRAPH_API_URL,
  exchanges: [cacheExchange, ssrCache, fetchExchange],
})

export { client, ssrCache }
