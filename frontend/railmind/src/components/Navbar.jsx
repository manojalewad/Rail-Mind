import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400"
        >
          RailMind
        </Link>

        <div className="flex items-center gap-8 text-slate-200">
          <a href="#" className="hover:text-cyan-400 transition">
            Train Status
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Report Incident
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Travel Alerts
          </a>

          <Link
            to="/employee-login"
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-medium text-white transition"
          >
            Employee Login
          </Link>
        </div>
      </div>
    </nav>
  );
}