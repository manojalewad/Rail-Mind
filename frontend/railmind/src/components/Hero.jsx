export default function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">

          <p className="text-cyan-400 font-semibold mb-4">
            Next Generation Railway Operations
          </p>

          <h1 className="text-6xl font-bold text-white leading-tight">
            AI Railway Command Center
          </h1>

          <p className="mt-6 text-slate-400 text-lg">
            Monitor disruptions, report incidents, receive travel alerts,
            and empower railway authorities with autonomous decision support.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Report Incident
            </button>

            <button className="border border-slate-600 text-slate-200 px-6 py-3 rounded-lg hover:border-cyan-400 transition">
              Track Train
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}