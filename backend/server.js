import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analysisRoutes from "./routes/analysisRoutes.js";
import agentRoutes from "./routes/agentRoutes.js";
import digitalTwinRoutes from "./routes/digitalTwinRoutes.js";
dotenv.config();
console.log(process.env.GEMINI_API_KEY);
const app = express();

app.use(cors());

app.use(
  express.json({
    limit: "10mb",
  })
);
app.use("/api", analysisRoutes);
app.use("/api", agentRoutes);
app.use("/api", digitalTwinRoutes);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "RailMind Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});