import { Router } from 'express';
import { createTag } from '../controllers/tags.controller.js';

const router = Router();

router.route('').post(createTag);

export default router;
