'use client'

import { FC, HTMLAttributes, } from 'react'
import { cn } from '@/utils/tailwind';
import { MessageCard } from './MessageCard';
import { useLoadInitialSetup } from '@/hooks/useLoadInitialSetup';

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {

}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
  const { messages, user, setUser } = useLoadInitialSetup();

  const inverseMessages = [...messages].reverse();

  return (
    <div
      className={cn('flex-1 flex flex-col-reverse gap-3', className)}
    >
      {inverseMessages.map((message) =>
        <MessageCard key={message.id + message.timestamp.toString()} msg={message} className={message.isUserMessage ? 'self-end' : 'self-start'} />
      )}
    </div>
  )
}

export default ChatMessages