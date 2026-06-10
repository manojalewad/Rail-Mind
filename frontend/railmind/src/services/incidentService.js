import axios from "axios";
import API_URL from "../config/api";

export const analyzeIncident = async (data) => {
  const response = await axios.post(
    `${API_URL}/api/analyze`,
    data
  );

  return response.data;
};

export const generateAgents = async (data) => {
  const response = await axios.post(
    `${API_URL}/api/agents`,
    data
  );

  return response.data;
};
export const generateDigitalTwin = async (data) => {
  const response = await axios.post(
    `${API_URL}/api/digital-twin`,
    data
  );

  return response.data;
};