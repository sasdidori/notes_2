import { Router } from 'express';
import { createNote } from '../controllers/notes.controller.js';
const router = Router();

router.route('').post(createNote);

export default router;
