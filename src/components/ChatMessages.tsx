'use client'

import { FC, HTMLAttributes, useRef, } from 'react'
import { cn } from '@/utils/tailwind';
import { MessageCard } from './MessageCard';
import { useLoadInitialSetup } from '@/hooks/useLoadInitialSetup';
import { useAutoScrollBottom } from "@/hooks/useAutoScrollBottom"

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {

}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
  const { messages, user, setUser } = useLoadInitialSetup();

  const chatContainerRef = useRef<HTMLDivElement>(null);
  useAutoScrollBottom(chatContainerRef);

  const inverseMessages = [...messages].reverse();

  return (
    <div
      ref={chatContainerRef}
      className={cn('flex-1 flex flex-col-reverse gap-3 scroll-smooth overflow-y-auto chat-scrollbar', className)}
    >
      {inverseMessages.map((message) =>
        <MessageCard key={message.id + message.timestamp.toString()} msg={message} className={message.isUserMessage ? 'self-end' : 'self-start'} />
      )}
    </div>
  )
}

export default ChatMessages