import { useNavigate } from "react-router-dom";
import { useIncident } from "../context/IncidentContext";

export default function Agents() {
  const navigate = useNavigate();

  const { agentData,loading, setLoading } = useIncident();

  if (!agentData) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-3xl">
          No agent data found.
        </h1>
      </div>
    );
  }

  const agents = [
    {
      title: "Safety Agent",
      response: agentData.safetyAgent,
    },
    {
      title: "Traffic Agent",
      response: agentData.trafficAgent,
    },
    {
      title: "Passenger Agent",
      response: agentData.passengerAgent,
    },
    {
      title: "Maintenance Agent",
      response: agentData.maintenanceAgent,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5">

          <h1 className="text-3xl font-bold text-cyan-400">
            Multi-Agent Response Center
          </h1>

          <p className="text-slate-400 mt-2">
            Autonomous coordination between railway operational agents.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 gap-6">

          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-cyan-400 mb-4">
                {agent.title}
              </h2>

              <p className="text-slate-300">
                {agent.response}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-8 bg-slate-900 border border-slate-700 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Master Decision Agent
          </h2>

          <p className="text-slate-300">
            {agentData.masterDecision}
          </p>

        </div>

        <button
  disabled={loading}
  onClick={() => navigate("/digital-twin")}
  className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
>
  View Digital Twin
</button>

      </div>

    </div>
  );
}