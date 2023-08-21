'use server'

import prisma from './prisma';

import { mapToMessage } from '@/utils/helper';
import { Message } from '@/types';

async function createUser( { name, email }: {
  name: string,
  email: string
}) {
  const user = await prisma.user.create({
    data: { name, email }
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

  const res = await prisma.message.findMany({
    where: { authorId: 1 }
  });

  const messages: Message[] = res.map((message) => {
    return mapToMessage(message, user)
  });

  return messages;
}

async function createMessage( { content, authorId }: {
  content: string,
  authorId: number
}) {
  const message = await prisma.message.create({
    data: { content, authorId }
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