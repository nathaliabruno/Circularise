import '@/styles/globals.css'
import React, { useState } from "react"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
