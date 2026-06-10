import { generateAIResponse } from "../services/aiService.js";
export const extractJSON = (text) => {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("No JSON found");
  }

  return JSON.parse(
    text.slice(start, end + 1)
  );
};
export const generateDigitalTwin = async (req, res) => {
  try {
    const { incidentData, analysisData } = req.body;

    const prompt = `
You are an Indian Railways route intelligence system.

Incident:
${JSON.stringify(incidentData)}

Analysis:
${JSON.stringify(analysisData)}

Generate a realistic railway route around the affected station.

Return ONLY valid JSON.

{
  "affectedStation":"",
  "impactRadius":"",
  "estimatedAffectedRoutes":"",
  "routeStations":[
    {
      "name":"",
      "status":"normal"
    }
  ]
}


Rules:

1. Return exactly 5 REAL Indian railway stations.
2. The affected station MUST be present.
3. All stations must lie on the same railway corridor or nearby operational route.
4. Do NOT invent station names.
5. Use only well-known operational railway stations.
6. If unsure, prefer major junctions.
7. Mark affected station as "critical".
8. Directly connected stations as "warning".
9. Remaining stations as "normal".

Return ONLY valid JSON.
Don't include any explanations or extra text.
`;

    const result = await generateAIResponse(prompt);

   const data = extractJSON(result);

    res.status(200).json(data);
  } catch (error) {
  console.error("========== DIGITAL TWIN ERROR ==========");
  console.error(error);

  if (error.response) {
    console.error(error.response.data);
  }

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
};