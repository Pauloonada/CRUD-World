import { Router } from 'express';
import * as paisesController from '../controllers/paisesController.js';

const router = Router();

router.get('/', paisesController.getAll);
router.get('/:id', paisesController.getById);
router.post('/', paisesController.create);
router.put('/:id', paisesController.update);
router.delete('/:id', paisesController.remove);

export default router;