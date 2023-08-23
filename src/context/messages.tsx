'use client'

import { createContext, useState } from 'react'
import { User } from '@/lib/validators/user'
import { Message } from '@/lib/validators/messages'
import { nanoid } from 'nanoid'

export const MessageContext = createContext<{
  messages: Message[]
  isMessageUpdating: boolean
  setIsMessageUpdating: (isUpdating: boolean) => void
  addMessage: (message: Message) => void
  removeMessage: (id: number) => void
  updateMessage: (id: number, updateFn: (prevContent: string) => string) => void
  initialMessages: (messages: Message[]) => void
}>({
  messages: [],
  isMessageUpdating: false,
  setIsMessageUpdating: () => { },
  addMessage: () => { },
  removeMessage: () => { },
  updateMessage: () => { },
  initialMessages: () => { },
})

export function MessageProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([])

  const [isMessageUpdating, setIsMessageUpdating] = useState(false)

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message])
  }

  const removeMessage = (id: number) => {
    setMessages((prev) => prev.filter((message) => message.id !== id))
  }

  const updateMessage = (id: number, updateFn: (prevContent: string) => string) => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id !== id)
          return message;
        else {
          return {
            ...message,
            content: updateFn(message.content)
          }
        }
      })
    )
  }

  const initialMessages = (messages: Message[]) => {
    setMessages(messages);
  }

  return (
    <MessageContext.Provider value={{
      messages,
      isMessageUpdating,
      setIsMessageUpdating,
      addMessage,
      removeMessage,
      updateMessage,
      initialMessages
    }}>
      {children}
    </MessageContext.Provider>
  )
}