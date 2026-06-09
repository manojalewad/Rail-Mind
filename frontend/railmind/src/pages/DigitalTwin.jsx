import ReactFlow, {
    Background,
    Controls,
} from "reactflow";

import "reactflow/dist/style.css";

export default function DigitalTwin() {
    const nodes = [
        {
            id: "1",
            position: { x: 0, y: 100 },
            data: { label: "Delhi" },
            style: {
                background: "#1e293b",
                color: "white",
                border: "2px solid #06b6d4",
            },
        },

        {
            id: "2",
            position: { x: 250, y: 100 },
            data: { label: "Jaipur" },
            style: {
                background: "#1e293b",
                color: "white",
                border: "2px solid #06b6d4",
            },
        },

        {
            id: "3",
            position: { x: 500, y: 100 },
            data: { label: "Kota Junction" },
            style: {
                background: "#7f1d1d",
                color: "white",
                border: "2px solid red",
            },
        },

        {
            id: "4",
            position: { x: 750, y: 100 },
            data: { label: "Mumbai" },
            style: {
                background: "#1e293b",
                color: "white",
                border: "2px solid #06b6d4",
            },
        },
    ];

    const edges = [
        {
            id: "e1-2",
            source: "1",
            target: "2",
            animated: true,
        },
        {
            id: "e2-3",
            source: "2",
            target: "3",
            animated: true,
            style: {
                stroke: "red",
                strokeWidth: 3,
            },
        },
        {
            id: "e3-4",
            source: "3",
            target: "4",
            animated: true,
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <div className="border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-5">

                    <h1 className="text-3xl font-bold text-cyan-400">
                        Railway Digital Twin
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Live operational visualization of affected routes.
                    </p>

                </div>
            </div>

            <div
                className="h-[80vh]"
            >
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    fitView
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
            <div className="max-w-7xl mx-auto px-6 pb-10">

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-slate-900 border border-red-700 rounded-2xl p-6">

                        <h2 className="text-2xl font-bold text-red-400 mb-4">
                            No Action Taken
                        </h2>

                        <ul className="space-y-3 text-slate-300">
                            <li>🚨 18 trains affected</li>
                            <li>🚨 4200 passengers impacted</li>
                            <li>🚨 Delay increases to 90 minutes</li>
                            <li>🚨 Derailment risk remains HIGH</li>
                        </ul>

                    </div>

                    <div className="bg-slate-900 border border-green-700 rounded-2xl p-6">

                        <h2 className="text-2xl font-bold text-green-400 mb-4">
                            AI Plan Executed
                        </h2>

                        <ul className="space-y-3 text-slate-300">
                            <li>✅ 6 trains rerouted</li>
                            <li>✅ Passenger alerts sent</li>
                            <li>✅ Delay reduced to 18 minutes</li>
                            <li>✅ Risk reduced to LOW</li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    );
}