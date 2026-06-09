import express from "express";
import { analyzeIncident } from "../controllers/analysisController.js";

const router = express.Router();

router.post("/analyze", analyzeIncident);

export default router;