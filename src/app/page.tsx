/* Alex Joshua (c) 2023 */

import { InputBar } from '@/components/inputBar/inputBar'
import { Chat } from '@/components/chat'
import { Settings } from '@/components/settings'

export default function Home() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-end">
      <Settings />
      <Chat className="pt-8 pb-20" />
      <InputBar />
    </main>
  )
}
