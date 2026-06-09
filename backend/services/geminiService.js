import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const analyzeRailwayIncident = async (
  incidentType,
  location,
  description
) => {
  const prompt = `
You are a railway safety expert.

Analyze the following railway incident.

Incident Type:
${incidentType}

Location:
${location}

Description:
${description}

Return ONLY valid JSON.

{
  "severity":"",
  "confidence":"",
  "risk":"",
  "affectedTrains":"",
  "affectedPassengers":"",
  "recommendedAction":""
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: prompt,
  });

  return response.text;
};