
import { useEffect, useContext } from 'react'
import { getMessages, createMessage } from '@/lib/db'
import { Message } from '@/lib/validators/messages'
import { UserContext } from '@/context/user'
import { MessageContext } from '@/context/messages'


export const useLoadInitialSetup = () => {
  const { messages, initialMessages } = useContext(MessageContext);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // Load initial messages
    console.log(user)

    const loadIntialMessages = async () => {
      let initial = await getMessages(user.id);
      if (initial.length < 1) {
        console.log("No initial messages")
        let initialMessage: Message = {
          id: -1,
          content: 'Hey! What can I help you with today?',
          timestamp: new Date(),
          isUserMessage: false,
          authorId: user.id
        }
        initialMessage = await createMessage({ msg: initialMessage, authorId: user.id })
        initial = [initialMessage];
      } else {
        console.log("Initial Messages: ", initial);
      }
      initialMessages(initial);
    }

    loadIntialMessages();

  }, [])

  return { messages, user, setUser }
}