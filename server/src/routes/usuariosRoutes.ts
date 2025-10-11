import { Router } from 'express';
import * as usuariosController from '../controllers/usuariosController.js';

const router = Router();

router.post('/login', usuariosController.login);

export default router;