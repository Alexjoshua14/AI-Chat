/* Alex Joshua (c) 2023 */

'use client'

import { useRef } from "react"
import ChatMessages from "./ChatMessages"

/**
 * Displays the chat messages with the most recent at the bottom.
 * 
 * @returns  
 */
export const Chat = ({ className, ...props }: { className?: String }) => {

  return (
    <div {...props}
      className={`w-full overflow-auto scroll-smooth 
                    flex flex-col gap-4 ${className}`}
    >
      <ChatMessages className="px-4 pt-4 pb-10 mb-10" />
    </div>
  )
}