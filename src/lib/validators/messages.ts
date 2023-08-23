import { z } from 'zod'
import { UserSchema } from './user'

export const MessageSchema = z.object({
  id: z.number(),
  isUserMessage: z.boolean(),
  authorId: z.number(),
  content: z.string(),
  timestamp: z.date()
})

export const MessageArraySchema = z.array(MessageSchema)

export type Message = z.infer<typeof MessageSchema>