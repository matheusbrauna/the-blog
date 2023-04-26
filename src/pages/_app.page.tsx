import '@/styles/globals.css'
import '@/lib/dayjs'
import { Header } from '@/components/Header'
import type { AppProps } from 'next/app'
import { Provider } from 'urql'
import { client, ssrCache } from '@/lib/urqlClient'

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <Provider value={client}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}
