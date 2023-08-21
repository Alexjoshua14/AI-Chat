/* Alex Joshua (c) 2023 */

import { Message } from '@/types'

export const MessageCard = ({ msg, className, ...props }: { msg: Message, className?: String }) => {

  return (
    <div className={`grid grid-cols-msg grid-rows-msg gap-2 center ${className}`} {...props}>
      <div className={`w-5 h-5 rounded-full bg-${msg.author.color}-500 glassmorphism`} />
      <h2 className="text-secondary font-extralight text-xs">
        {msg.author.username}
      </h2>

      <div className="col-start-2">{msg.content}</div>
    </div>
  )
}