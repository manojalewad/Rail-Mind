import { generateAIResponse } from "../services/aiService.js";

export const analyzeIncident = async (req, res) => {
  try {
    const { incidentType, location, description } = req.body;

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

    const result = await generateAIResponse(prompt);

    const cleanResult = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const data = JSON.parse(cleanResult);

    res.status(200).json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};