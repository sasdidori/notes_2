import { Note } from '../models/notes.js';
import router from '../routes/note.route.js';

const createNote = async (req, res) => {
  try {
    const { title, content, tag } = req.body;
    if (!title || !content || !tag) {
      res.status(400).json({
        message: 'All fields are required',
      });
    }
    const note = await Note.create({
      title,
      content,
      tag,
    });

    await note.populate('tag');

    res.status(201).json({
      message: 'Note created successfully',
      note,
    });
    console.log(note);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};

export { createNote };
