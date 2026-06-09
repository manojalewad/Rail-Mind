import { useNavigate } from "react-router-dom";

export default function Analysis() {
  const navigate = useNavigate();

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
              HIGH
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Confidence Score
            </h2>

            <div className="text-cyan-400 text-4xl font-bold">
              92%
            </div>
          </div>

        </div>

        <div className="mt-6 bg-slate-900 border border-slate-700 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Risk Assessment
          </h2>

          <p className="text-slate-300">
            Potential derailment risk detected due to track damage.
            Immediate intervention is recommended.
          </p>

        </div>

        <div className="mt-6 bg-slate-900 border border-slate-700 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Predicted Impact
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>• 18 trains may be affected</li>
            <li>• Estimated delay: 45 minutes</li>
            <li>• Approx. 4200 passengers impacted</li>
          </ul>

        </div>

        <button
          onClick={() => navigate("/agents")}
          className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
        >
          Generate Agent Response
        </button>

      </div>

    </div>
  );
}