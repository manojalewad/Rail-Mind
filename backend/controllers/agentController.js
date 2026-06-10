import { generateAIResponse } from "../services/aiService.js";

export const generateAgents = async (req, res) => {
  try {
    const { incidentData, analysisData } = req.body;

    const prompt = `
You are an autonomous railway incident response system.

Incident:
${JSON.stringify(incidentData)}

Analysis:
${JSON.stringify(analysisData)}

Generate coordinated responses from multiple railway agents.

Return ONLY valid JSON.

{
  "safetyAgent":"",
  "trafficAgent":"",
  "passengerAgent":"",
  "maintenanceAgent":"",
  "masterDecision":""
}

Rules:
1. Safety Agent focuses on immediate safety actions.
2. Traffic Agent focuses on rerouting and scheduling.
3. Passenger Agent focuses on passenger communication and welfare.
4. Maintenance Agent focuses on repair and inspection.
5. Master Decision combines all agent decisions into one action plan.
6. Keep responses concise and professional.
`;

    const result = await generateAIResponse(prompt);

    const cleanResult = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const data = JSON.parse(cleanResult);

    res.status(200).json(data);
  } catch (error) {
    console.error("Agent Generation Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};