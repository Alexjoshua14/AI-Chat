// Alex Joshua (c) 2023

'use server'

import { complete } from './gpt'
import { createMessage } from './db'

import { updateMessages } from '@/app/page'

export const sendMessage = async (message: string, authorId: number) => {
  await createMessage({ content: message, authorId: authorId });

  console.log(message);
  const response = await complete(message);
  console.log(response?.message.content);

  // Store response in database
  if (response?.message.content) {
    await createMessage({
      content: response?.message.content,
      authorId: 1,
    });
  } else {
    console.log('No response..');
  }
  
  return response;
}