import { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: req.body.text }],
    model: 'gpt-3.5-turbo'
  })
  console.log(JSON.stringify(completion))
  res.status(200).json({ result: completion })
}
