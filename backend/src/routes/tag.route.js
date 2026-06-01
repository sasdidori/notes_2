import { Router } from 'express';
import { createTag, deleteTag } from '../controllers/tags.controller.js';

const router = Router();

router.route('').post(createTag);
router.route('/:id').delete(deleteTag);

export default router;
