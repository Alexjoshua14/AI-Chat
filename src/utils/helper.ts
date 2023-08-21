/* Alex Joshua (c) 2023 */


import { Message, authorBrief } from '@/types';

export const mapToMessage = (message: any, user: any) => {
  if (user.id != message.authorId) {
    const errr: Message = {
      id: '', content: 'Error', timestamp: new Date(), authorId: '', author: { id: '', username: 'Error', color: 'red' } 
    };
  }

  const authorBrief: authorBrief = {
    id: user.id,
    username: user.name,
    color: "yellow"
  }

  const msg: Message = {
    id: message.id,
    content: message.content,
    timestamp: message.timestamp,
    authorId: message.authorId,
    author: authorBrief,
  }

  return msg;
}