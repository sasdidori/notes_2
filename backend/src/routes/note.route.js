import { Router } from 'express';
import {
  createNote,
  getAllNotes,
  getNote,
  updateNote,
  deleteNote,
} from '../controllers/notes.controller.js';
const router = Router();

router.route('').post(createNote);
router.route('').get(getAllNotes);
router.route('/:id').get(getNote);
router.route('/:id').put(updateNote);
router.route('/:id').delete(deleteNote);

export default router;
