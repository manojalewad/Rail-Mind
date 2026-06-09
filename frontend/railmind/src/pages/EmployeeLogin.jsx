import { ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EmployeeLogin() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
            <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-8">

                <div className="flex justify-center mb-6">
                    <ShieldCheck
                        size={60}
                        className="text-cyan-400"
                    />
                </div>

                <h1 className="text-3xl font-bold text-center text-white">
                    Employee Login
                </h1>

                <p className="text-slate-400 text-center mt-2">
                    Access Railway Command Center
                </p>

                <form className="mt-8 space-y-5">

                    <div>
                        <label className="block text-slate-300 mb-2">
                            Employee ID
                        </label>

                        <input
                            type="text"
                            placeholder="EMP001"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block text-slate-300 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="********"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition"
                        onClick={() => navigate("/dashboard")}
                    >
                        Access Command Center
                    </button>

                </form>
            </div>
        </div>
    );
}