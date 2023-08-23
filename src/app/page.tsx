/* Alex Joshua (c) 2023 */

import { InputBar } from '@/components/InputBar'
import { Settings } from '@/components/Settings'
import { Chat } from '@/components/Chat'

export default async function Home() {
  return (
    <main className="h-screen relative flex flex-col items-center justify-end">
      <Settings />
      <Chat />
      <InputBar />
    </main>
  )
}
