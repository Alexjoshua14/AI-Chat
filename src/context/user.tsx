'use client'

import { createContext, useState } from 'react'
import { User } from '@/lib/validators/user'

export const UserContext = createContext<{
  user: User
  setUser: (user: User) => void
  updateUserColor: (color: string) => void
}>({
  user: { id: 1, name: 'Test User', email: 'testuser@yahoo.com', color: 'slate' },
  setUser: () => { },
  updateUserColor: () => { },
})


export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({ id: -1, name: '', email: 'testuser@yahoo.com', color: 'slate' });

  const updateUserColor = (color: string) => {
    setUser((prev) => {
      return {
        ...prev,
        color: color
      }
    })
  }

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      updateUserColor
    }}>
      {children}
    </UserContext.Provider>
  )

}