import { Link } from "react-router-dom";

export default function EmployeeAccess() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-12 text-center">

          <p className="text-cyan-400 font-semibold mb-3">
            Railway Operations
          </p>

          <h2 className="text-4xl font-bold text-white mb-6">
            Employee Command Center
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Access AI-powered incident analysis, autonomous response planning,
            digital twin monitoring, and railway operations management.
          </p>

          <Link
            to="/employee-login"
            className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            Employee Login
          </Link>

        </div>
      </div>
    </section>
  );
}