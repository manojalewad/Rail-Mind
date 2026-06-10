import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

console.log("KEY FOUND:", !!process.env.OPENROUTER_API_KEY);

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

try {
  const completion = await client.chat.completions.create({
    model: "google/gemma-4-31b-it:free",
    messages: [
      {
        role: "user",
        content: "Reply with only: RailMind OpenRouter Working",
      },
    ],
  });

  console.log(completion.choices[0].message.content);
} catch (err) {
  console.error(err);
}