/* Alex Joshua (c) 2023 */

import 'server-only'

import OpenAI from 'openai'

const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default openAI;