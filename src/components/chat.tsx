/* Alex Joshua (c) 2023 */

'use client'

import { useRef } from "react"
import { useAutoScrollBottom } from "@/hooks/useAutoScrollBottom"

/**
 * Displays the chat messages with the most recent at the bottom.
 * 
 * @returns 
 */
export const Chat = ({ children, className, ...props }: { children: React.ReactNode, className?: String }) => {
  // Set scroll to bottom
  const chatContainerRef = useRef<HTMLDivElement>(null);
  useAutoScrollBottom(chatContainerRef);

  // Get user session

  // Get chat messages

  return (
    <div ref={chatContainerRef} className={`h-full w-full px-4 overflow-auto flex flex-col justify-end gap-4 scroll-smooth ${className}`} {...props}>
      {children}
    </div>
  )
}