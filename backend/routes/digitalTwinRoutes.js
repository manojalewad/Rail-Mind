import express from "express";
import { generateDigitalTwin } from "../controllers/digitalTwinController.js";

const router = express.Router();

router.post("/digital-twin", generateDigitalTwin);

export default router;