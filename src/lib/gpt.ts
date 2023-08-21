
import OpenAI from 'openai'
import openAI from './openai'

import { Stream } from 'openai/streaming'

/** TODO:
 * - Rate limit function calls
 * - Retry failed requests
 */

/**
 * 
 * @param prompt 
 * @param options 
 * @returns 
 */
export async function complete(prompt: string, options?: any) {
  const params: OpenAI.Chat.CompletionCreateParams = {
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
    stream: false,
  }

  const completion: 
    OpenAI.Chat.ChatCompletion | Stream<OpenAI.Chat.ChatCompletionChunk> = 
    await openAI.chat.completions.create(params);

  if (!(completion instanceof Stream)) {
     return completion.choices[0]
  }
  else {
    for await (const chunk of completion) {
      console.log(chunk);
    }
  }
  // return completion;  
}