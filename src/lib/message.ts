// Alex Joshua (c) 2023

'use server'

import { complete } from './gpt'
import { createMessage } from './db'
import { Message } from './validators/messages';

// import { updateMessages } from '@/app/page'

export const sendMessageToGPT = async (message: Message, authorId: number) => {
  await createMessage({ msg: message, authorId });

  console.log(message);
  const response = await complete(message.content);
  console.log(response?.message.content);

  // Store response in database
  if (response?.message.content) {
    const resMessage = {
      content: response?.message.content,
      isUserMessage: false,
      timestamp: new Date(),
      id: -1,
      authorId
    }

    return await createMessage({
      msg: resMessage,
      authorId: 1,
    });
  } else {
    console.log('No response..');
  }
  
  throw new Error("No response..");
}