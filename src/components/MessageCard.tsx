/* Alex Joshua (c) 2023 */

import { Message } from '@/lib/validators/messages'

export const MessageCard = ({ msg, className, ...props }: { msg: Message, className?: String }) => {

  return (
    <div
      className={`w-fit flex flex-col 
                  px-4 py-2 rounded-3xl glassmorphism 
                  ${msg.isUserMessage ? "bg-slate-50 text-black-primary" : "bg-gray-800"} 
                  ${className}`}
      {...props}
    >
      <div className={`flex gap-2 ${msg.isUserMessage ? 'flex-row-reverse' : ''}`}>
        <div className={`w-4 h-4 rounded-full bg-${msg.isUserMessage ? 'teal' : 'yellow'}-500 glassmorphism`} />
        <h2 className={`${msg.isUserMessage ? "text-black-secondary" : "text-secondary"} font-extralight text-xs`}>
          {msg.isUserMessage ? "You" : "Chatbot"}
        </h2>
      </div>
      <div className="px-6">{msg.content}</div>
    </div>
  )
}