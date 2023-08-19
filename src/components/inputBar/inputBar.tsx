/* Alex Joshua (c) 2023 */

'use client'

import { FormEvent, useState } from "react"

import { sendMessage } from "@/lib/message"

import { RiVoiceprintLine } from 'react-icons/ri'
import styles from './inputBar.module.css'

export const InputBar = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);

    // Clean message of malicious code

    // Send message to server
    sendMessage(input);

    setInput('');
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  }

  return (
    <form className="fixed bottom-0 w-full flex items-center h-16 px-2 pb-3 bg-tertiary glassmorphism" onSubmit={handleSubmit}>
      <div className={`flex-1 flex items-center px-3 py-1 rounded-full bg-input focus:ring-2 ring-teal-600 ${styles.inputWrapper}`}>
        <input type="text"
          className={`w-full 
                    bg-input glassmorphism focus:outline-none
                    ${styles.input}`}
          spellCheck="true"
          value={input}
          onChange={handleChange}
        />
        <RiVoiceprintLine />
      </div>
      <div className="px-2">
        <button type="submit" >Search</button>
      </div>
    </form>
  )
}