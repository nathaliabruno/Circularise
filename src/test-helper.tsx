import { ReactComponentElement, ReactFragment, ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { JsxElement } from "typescript"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
})

export const Wrapper = (children: ReactFragment) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
