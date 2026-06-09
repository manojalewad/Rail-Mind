import { analyzeRailwayIncident } from "../services/geminiService.js";

export const analyzeIncident = async (req, res) => {
  try {
    const {
      incidentType,
      location,
      description,
    } = req.body;

    const result = await analyzeRailwayIncident(
      incidentType,
      location,
      description
    );

    const cleanResponse = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const data = JSON.parse(cleanResponse);

    return res.status(200).json(data);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};