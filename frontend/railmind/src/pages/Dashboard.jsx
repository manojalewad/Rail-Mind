import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Active Incidents",
      value: "12",
    },
    {
      title: "Critical Alerts",
      value: "3",
    },
    {
      title: "Affected Trains",
      value: "18",
    },
    {
      title: "Passengers Impacted",
      value: "4,250",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* Header */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold text-cyan-400">
              Railway Command Center
            </h1>

            <p className="text-slate-400 mt-2">
              AI-Powered Railway Operations Dashboard
            </p>
          </div>

          <button
            onClick={() => navigate("/create-incident")}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            + Create Incident
          </button>

        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
            >
              <p className="text-slate-400">
                {item.title}
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {item.value}
              </h2>
            </div>
          ))}

        </div>

        {/* Recent Incidents */}
        <div className="mt-10 bg-slate-900 border border-slate-700 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-6">
            Recent Incidents
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-800 p-4 rounded-xl">
              Track Crack Detected - Kota Junction
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              Signal Failure - Jaipur Route
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              Crowd Surge - Mumbai Central
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}