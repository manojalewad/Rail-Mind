import { useNavigate } from "react-router-dom";

export default function Agents() {
  const navigate = useNavigate();

  const agents = [
    {
      title: "Safety Agent",
      response:
        "Track integrity compromised. Immediate halt recommended for incoming trains.",
    },
    {
      title: "Traffic Agent",
      response:
        "Reroute 6 trains through alternate corridor. Estimated delay: 18 minutes.",
    },
    {
      title: "Passenger Agent",
      response:
        "Notify affected passengers and issue revised arrival estimates.",
    },
    {
      title: "Maintenance Agent",
      response:
        "Dispatch Track Repair Unit A. Estimated repair time: 42 minutes.",
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
            Stop incoming trains, reroute alternate traffic, dispatch
            maintenance crew, and notify affected passengers immediately.
          </p>

        </div>

        <button
          onClick={() => navigate("/digital-twin")}
          className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
        >
          View Digital Twin
        </button>

      </div>

    </div>
  );
}