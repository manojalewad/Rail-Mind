import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIncident } from "../context/IncidentContext";
import { analyzeIncident } from "../services/incidentService";

export default function CreateIncident() {
  const navigate = useNavigate();

  const {
    setIncidentData,
    setAnalysisData,
    setLoading,
    loading,
  } = useIncident();

  const [formData, setFormData] = useState({
    incidentType: "Track Crack",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const response = await analyzeIncident(formData);

      setIncidentData(formData);
      setAnalysisData(response);

      navigate("/analysis");
    } catch (error) {
      console.error(error);

      alert("Failed to analyze incident");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold text-cyan-400">
            Create Incident
          </h1>

          <p className="text-slate-400 mt-2">
            Report and analyze railway incidents using AI.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
          <div className="space-y-6">

            <div>
              <label className="block mb-2 text-slate-300">
                Incident Type
              </label>

              <select
                name="incidentType"
                value={formData.incidentType}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3"
              >
                <option>Track Crack</option>
                <option>Signal Failure</option>
                <option>Train Breakdown</option>
                <option>Fire</option>
                <option>Crowd Surge</option>
                <option>Weather Hazard</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Kota Junction"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Description
              </label>

              <textarea
                rows="6"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the incident..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3"
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Analyzing Incident...</span>
                </div>
              ) : (
                "Analyze Incident"
              )}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}