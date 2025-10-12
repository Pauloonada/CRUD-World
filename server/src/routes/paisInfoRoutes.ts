import Router from "express";
import { getPaisInfo } from "../controllers/restCountriesController.js";

const router = Router();
router.get('/', getPaisInfo);

export default router;