/* Alex Joshua (c) 2023 */

'use client'

import { useContext, useEffect, useRef, useState } from "react"
import { useAutoScrollBottom } from "@/hooks/useAutoScrollBottom"
import { complete } from '@/lib/gpt'
import { createUser, getMessages } from '@/lib/db'

import { Message } from '@/types'
import { MessageProvider } from "@/context/messages"
import ChatMessages from "./ChatMessages"
import { UserContext } from "@/context/user"
import { User } from "@/lib/validators/user"

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
    <div ref={chatContainerRef} {...props}
      className={`w-full px-4 overflow-auto scroll-smooth 
                    flex flex-col gap-4 ${className}`}
    >
      <ChatMessages />
    </div>
  )
}