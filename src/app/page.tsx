/* Alex Joshua (c) 2023 */

import { InputBar } from '@/components/inputBar/inputBar'
import { Chat } from '@/components/chat'
import { Settings } from '@/components/settings'
import { messages } from '@/data/placeholder'
import { Message } from '@/components/message'

export default function Home() {

  return (
    <main className="relative flex h-screen flex-col items-center justify-end">
      <Settings />
      <Chat className="pt-8 pb-20">
        <>
          {messages.map((message) => (
            <Message key={message.id} msg={message} />
          ))}
        </>
      </Chat>
      <InputBar />
    </main>
  )
}
