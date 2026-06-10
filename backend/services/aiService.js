import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateAIResponse = async (prompt) => {
  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
    });

  return response.text;
};