'use client'

import { FC, HTMLAttributes, useContext, useRef, useState, KeyboardEvent } from 'react'
import { useMutation } from '@tanstack/react-query'
import TextareaAutosize from 'react-textarea-autosize'
import { cn } from '@/utils/tailwind'
import { MessageContext } from '@/context/messages'
import { Message } from '@/lib/validators/messages'
import { sendMessageToGPT } from '@/lib/message'
import { IoSendOutline } from 'react-icons/io5'
import { UserContext } from '@/context/user'

interface InputBarProps extends HTMLAttributes<HTMLDivElement> { }

export const InputBar: FC<InputBarProps> = ({ className, ...props }) => {
  const { user } = useContext(UserContext);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { addMessage, removeMessage, updateMessage } = useContext(MessageContext);

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (message: Message) => {
      // Send the message
      const res = await sendMessageToGPT(message, user.id);

      if (res === undefined)
        throw new Error("Undefined response");

      return res;

    },
    onMutate(message) {
      // Add message to context
      addMessage(message);

    },
    onSuccess: async (res) => {
      // Handle successful send
      if (res === null) {
        throw new Error("Message is null?..");
      }

      const resMessage: Message = {
        id: res.id,
        authorId: user.id,
        isUserMessage: false,
        content: res.content,
        timestamp: new Date()
      }

      addMessage(resMessage);
      setInput('');
      inputRef.current?.focus();

    },
    onError: (_, message) => {
      // Handle errors
      removeMessage(message.id);
      inputRef.current?.focus();

    }
  })

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()

      const message: Message = {
        id: -1,
        authorId: -1,
        isUserMessage: true,
        content: input,
        timestamp: new Date()
      }

      sendMessage(message);
    }
  }

  return (
    <div
      className={cn('fixed bottom-0 w-full flex items center h-fit px-2 py-3 bg-tertiary glassmorphism', className)}
    >
      <div className={`flex w-full sm:w-96 items-center px-3 py-1.5 rounded-full bg-input focus:ring-2 ring-teal-600 overflow-hidden`}>
        <TextareaAutosize
          ref={inputRef}
          rows={1}
          maxRows={2}
          maxLength={140}
          autoFocus
          placeholder='Type a message...'
          value={input}
          disabled={isLoading}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className={`block w-full peer px-2 py-1.5 resize-none border-0 bg-input disabled:opacity-50 focus:outline-none text-black-primary text-sm sm:leading-6`}
        />
      </div>
      <div className="px-2">
        <button type="submit" >
          <IoSendOutline />
        </button>
      </div>
    </div>
  )
}