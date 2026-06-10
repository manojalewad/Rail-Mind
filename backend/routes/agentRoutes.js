import express from "express";
import { generateAgents } from "../controllers/agentController.js";

const router = express.Router();

router.post("/agents", generateAgents);

export default router;