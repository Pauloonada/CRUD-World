import express from 'express';
import * as cidadesController from '../controllers/cidadesController.js';

const router = express.Router();

router.get('/', cidadesController.getAll);
router.get('/total', cidadesController.getTotalCidades);
router.get('/:id', cidadesController.getById);
router.post('/', cidadesController.create);
router.put('/:id', cidadesController.update);
router.delete('/:id', cidadesController.remove);

export default router;