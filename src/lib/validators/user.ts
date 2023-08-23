import { z } from 'zod'

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  color: z.string(),
})

export type User = z.infer<typeof UserSchema>