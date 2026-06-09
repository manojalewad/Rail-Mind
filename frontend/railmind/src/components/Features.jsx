import { Train, TriangleAlert, Bell } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Train size={36} />,
      title: "Train Status",
      description:
        "Track train movements, delays and operational updates in real time.",
    },
    {
      icon: <TriangleAlert size={36} />,
      title: "Report Incident",
      description:
        "Passengers can instantly report safety hazards and disruptions.",
    },
    {
      icon: <Bell size={36} />,
      title: "Travel Alerts",
      description:
        "Receive AI-generated alerts and route impact notifications.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-14">
          Public Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500 transition"
            >
              <div className="text-cyan-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}