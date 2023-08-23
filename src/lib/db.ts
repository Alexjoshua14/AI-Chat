'use server'

import prisma from './prisma';

import { mapToMessage } from '@/utils/helper';
import { Message } from '@/lib/validators/messages';
import { User } from '@/lib/validators/user';

async function createUser( { name, email, color }: {
  name: string,
  email: string,
  color: string
}) {
  const user = await prisma.user.create({
    data: { name, email, color }
  })

  return user;
}

async function getUser( id: number ) {
  const user = await prisma.user.findUnique({
    where: { id }
  })

  return user;
}

async function getMessage( id: number ) {
  const message = await prisma.message.findUnique({
    where: { id }
  })

  return message;
}

async function getMessages( authorId: number ) {
  const user = await prisma.user.findUnique({
    where: { id: authorId }
  });

  if (user == null)
    throw new Error("No active user detected..");

  const res = await prisma.message.findMany({
    where: { authorId: 1 }
  });

  const messages: Message[] = res.map((message) => {
    return mapToMessage(message, user)
  });

  return messages;
}

async function createMessage( { msg, authorId }: {
  msg: Message,
  authorId: number
}) {
  const message = await prisma.message.create({
    data: { content: msg.content, authorId, isUserMessage: msg.isUserMessage, timestamp: msg.timestamp }
  })

  return message;
}

export {
  createUser,
  getUser,
  getMessage,
  getMessages,
  createMessage,
}