import { useNavigate } from "react-router-dom";
import { useIncident } from "../context/IncidentContext";
import axios from "axios";
import { generateAgents } from "../services/incidentService";
import { generateDigitalTwin } from "../services/incidentService";
export default function Analysis() {
  const navigate = useNavigate();
  const {
    incidentData,
    analysisData,
    setAgentData,
    setDigitalTwinData,
    loading,
    setLoading,
  } = useIncident();

  if (!analysisData) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-3xl">
          No analysis data found.
        </h1>
      </div>
    );
  }
const handleGenerateAgents = async () => {
  try {
    setLoading(true);

    const response = await generateAgents({
      incidentData,
      analysisData,
    });

    setAgentData(response);

    const twinResponse = await generateDigitalTwin({
      incidentData,
      analysisData,
    });

    setDigitalTwinData(twinResponse);

    navigate("/agents");
  } catch (error) {
    console.error(error);
    alert("Failed to generate AI response");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5">

          <h1 className="text-3xl font-bold text-cyan-400">
            AI Incident Analysis
          </h1>

          <p className="text-slate-400 mt-2">
            AI-generated assessment of the reported incident.
          </p>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Severity
            </h2>

            <div className="text-red-400 text-4xl font-bold">
              {analysisData.severity}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Confidence Score
            </h2>

            <div className="text-cyan-400 text-4xl font-bold">
              {analysisData.confidence}
            </div>
          </div>

        </div>

        <div className="mt-6 bg-slate-900 border border-slate-700 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Risk Assessment
          </h2>

          <p className="text-slate-300">
            {analysisData.risk}
          </p>

        </div>

        <div className="mt-6 bg-slate-900 border border-slate-700 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Predicted Impact
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>
              • Affected Trains: {analysisData.affectedTrains}
            </li>

            <li>
              • Affected Passengers: {analysisData.affectedPassengers}
            </li>
          </ul>

        </div>

        <div className="mt-6 bg-slate-900 border border-slate-700 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Recommended Action
          </h2>

          <p className="text-slate-300">
            {analysisData.recommendedAction}
          </p>

        </div>
<button
  onClick={handleGenerateAgents}
  disabled={loading}
  className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
>
  {loading ? (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      <span>Generating AI Response...</span>
    </div>
  ) : (
    "Generate Agent Response"
  )}
</button>

      </div>

    </div>
  );
}