

export interface GPTResponse {
  id: string,
  object: string,
  created: number,
  model: string,
  choices: [{
    index: number,
    message: string,
    finish_reason: string,
  }],
  usage: {
    prompt_tokens: number,
    completion_tokens: number,
    total_tokens: number,
  }
}

export type User = {
  id: string
  username: string
  color: string
}

export type authorBrief = {
  id: string
  username: string
  color: string
}

export type Message = {
  id: string
  authorId: string
  author: authorBrief
  content: string
  timestamp: Date
}
