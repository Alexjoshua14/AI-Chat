/* Alex Joshua (c) 2023 */


import { authorBrief } from '@/types';
import { Message } from '@/lib/validators/messages'
import { User } from '@/lib/validators/user';

export const mapToMessage = (message: Message, user: User) => {
  if (user.id != message.authorId) {
    const errr: Message = {
      id: -1, authorId: -1, content: 'Error', timestamp: new Date(), isUserMessage: false
    };
  }

  const msg: Message = {
    id: message.id,
    authorId: message.authorId,
    content: message.content,
    timestamp: message.timestamp,
    isUserMessage: message.isUserMessage
  }

  return msg;
}