import { Router } from 'express';
import * as usuariosController from '../controllers/usuariosController.js';

const router = Router();

router.post('/', usuariosController.login);

export default router;