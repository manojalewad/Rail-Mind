import { createContext, useContext, useState } from "react";

const IncidentContext = createContext();

export const IncidentProvider = ({ children }) => {
  const [incidentData, setIncidentData] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [agentData, setAgentData] = useState(null);
  const [digitalTwinData, setDigitalTwinData] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <IncidentContext.Provider
      value={{
        incidentData,
        setIncidentData,

        analysisData,
        setAnalysisData,

        agentData,
        setAgentData,

        digitalTwinData,
        setDigitalTwinData,
        loading,
        setLoading,
      }}
    >
      {children}
    </IncidentContext.Provider>
  );
};

export const useIncident = () => {
  return useContext(IncidentContext);
};