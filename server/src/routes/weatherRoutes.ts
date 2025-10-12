import { Router } from "express";
import { getWeatherInfo } from "../controllers/weatherController.js";

const router = Router();
router.get('/', getWeatherInfo);

export default router;