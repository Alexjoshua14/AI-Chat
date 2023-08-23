/* Alex Joshua (c) 2023 */

import { useCallback, useEffect, useState } from "react"
import { InputBar } from '@/components/InputBar'
import { Settings } from '@/components/Settings'
import { Chat } from '@/components/Chat'
import { MessageCard } from '@/components/MessageCard'
import { Message } from '@/types'

import { createUser, getMessages } from '@/lib/db'

export default async function Home() {
  const user = null; // Use logged in user or prompt to create new user
  const id = 1;
  let messages = await getMessages(id);

  console.log(messages);

  return (
    <main className="h-screen relative flex flex-col items-center justify-end">
      <Settings />
      <Chat className="pt-8 pb-20" />
      <InputBar />
    </main>
  )
}
