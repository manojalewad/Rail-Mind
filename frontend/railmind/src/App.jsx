import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeLogin from "./pages/EmployeeLogin";
import Dashboard from "./pages/Dashboard";
import CreateIncident from "./pages/CreateIncident";
import Analysis from "./pages/Analysis";
import Agents from "./pages/Agents";
import DigitalTwin from "./pages/DigitalTwin";
function App() {
  return (
    <BrowserRouter>
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