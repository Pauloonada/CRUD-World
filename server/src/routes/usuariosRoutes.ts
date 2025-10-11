import { Router } from 'express';
import * as paisesController from '../controllers/usuariosController.js';

const router = Router();

router.post('/login', paisesController.login);

export default router;