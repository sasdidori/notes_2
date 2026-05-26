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
    const note = await Note.create(req.body);

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

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json({
      notes,
    });
    if (notes.length === 0) {
      res.status(404).json({
        message: 'No notes found',
      });
    }
    console.log('notes: ', notes);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};

const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json({
      note,
    });

    if (!note) {
      res.status(404).json({
        message: 'No note found',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};

const updateNote = async (req, res) => {
  try {
    console.log('request body: ', req.body);
    const updatedNote = await Note.findOneAndReplace(
      {
        _id: { $eq: req.params.id },
      },
      req.body,
      { new: true },
    );
    res.status(200).json({
      updatedNote,
    });
    if (!updatedNote) {
      res.status(404).json({
        message: 'Post not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const updateNotePart = async (req, res) => {
  try {
    const updatedNotePart = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.status(200).json({
      message: 'Updated some part of the note',
      updatedNotePart,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findOneAndDelete({
      _id: { $eq: req.params.id },
    });
    if (!deletedNote)
      return res.status(404).json({
        message: 'Note not found',
      });
    res.status(200).json({
      message: 'Note deleted',
      deleteNote,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

export {
  createNote,
  getAllNotes,
  getNote,
  updateNote,
  updateNotePart,
  deleteNote,
};
