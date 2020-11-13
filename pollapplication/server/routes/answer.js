import express from 'express';
import { answerController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', answerController.get);
router.get('/', answerController.list);
router.post('/', answerController.create);
router.put('/:id', answerController.update);
router.delete('/:id', answerController.remove);

export default router;
