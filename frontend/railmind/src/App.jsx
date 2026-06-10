import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeLogin from "./pages/EmployeeLogin";
import Dashboard from "./pages/Dashboard";
import CreateIncident from "./pages/CreateIncident";
import Analysis from "./pages/Analysis";
import Agents from "./pages/Agents";
import DigitalTwin from "./pages/DigitalTwin";
import { useIncident } from "./context/IncidentContext";
function LoadingOverlay() {
  const { loading } = useIncident();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

      <h2 className="mt-6 text-2xl text-white font-semibold">
        RailMind AI Processing...
      </h2>

      <p className="text-slate-300 mt-2">
        Analyzing railway operations
      </p>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <LoadingOverlay />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/create-incident"
          element={<CreateIncident />}
        />
        <Route
          path="/analysis"
          element={<Analysis />}
        />
        <Route path="/agents" element={<Agents />} />
        <Route
          path="/digital-twin"
          element={<DigitalTwin />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;