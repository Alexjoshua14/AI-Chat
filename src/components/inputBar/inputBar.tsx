/* Alex Joshua (c) 2023 */

import { useRef } from "react"
import { RiVoiceprintLine } from 'react-icons/ri'
import styles from './inputBar.module.css'

export const InputBar = () => {

  return (
    <div className="fixed bottom-0 w-full flex items-center h-16 px-2 pb-3 bg-tertiary glassmorphism">
      <div className={`flex-1 flex items-center px-3 py-1 rounded-full bg-input focus:ring-2 ring-teal-600 ${styles.inputWrapper}`}>
        <input type="text"
          className={`w-full 
                    bg-input glassmorphism focus:outline-none
                    ${styles.input}`}
          spellCheck="true"
        />
        <RiVoiceprintLine />
      </div>
      <div className="px-2">
        <button>Search</button>
      </div>
    </div>
  )
}