'use client'

import { MessageProvider } from '@/context/messages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MessageProvider>
        {children}
      </MessageProvider>
    </QueryClientProvider>
  )
}