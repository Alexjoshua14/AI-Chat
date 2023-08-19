/* Alex Joshua (c) 2023 */

'use client'

import { useEffect, useRef } from "react"
import { Message } from "./message"
import { messages } from "@/data/placeholder"
import { useAutoScrollBottom } from "@/hooks/useAutoScrollBottom"

/**
 * Displays the chat messages with the most recent at the bottom.
 * 
 * @returns 
 */
export const Chat = ({ className, ...props }: { className?: String }) => {
  // Set scroll to bottom
  const chatContainerRef = useRef<HTMLDivElement>(null);
  useAutoScrollBottom(chatContainerRef);

  // Get user session

  // Get chat messages

  return (
    <div ref={chatContainerRef} className={`h-full w-full px-4 overflow-auto flex flex-col gap-4 scroll-smooth ${className}`} {...props}>
      {messages.map((message) => (
        <Message key={message.id} msg={message} />
      ))}
    </div>
  )
}