import { Note } from '../models/notes.js';
import { Tag } from '../models/tags.js';
import router from '../routes/note.route.js';

const createNote = async (req, res) => {
  const { title, content, tags } = req.body;

  if (!title || !content || !tags) {
    return res.status(400).json({
      message: 'All fields are required'
    });
  }
  const note = await Note.create({
    title,
    content,
    tags,
  });
  return res.status(201).json({
    message: 'Note created successfully',
    note,
  });
};

const getAllNotes = async (req, res) => {
    const notes = await Note.find();
    console.log("notes: ", notes)
if (notes.length === 0) {
     return res.status(404).json({
        message: 'No notes found',
      });
    }
   return res.status(200).json({
      notes,
    });
 
};

const getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    console.log(note)
    if (!note) {
     return res.status(404).json({
        message: 'No note found',
      });
    }
    return res.status(200).json({
      note,
    });
};

const updateNote = async (req, res) => {
    const updatedNote = await Note.findOneAndReplace(
      {
        _id: { $eq: req.params.id },
      },
      req.body,
      { new: true },
    );
     if (!updatedNote) {
     return res.status(404).json({
        message: 'Note not found',
      });
    }
    return res.status(200).json({
      message: 'note is updated',
      updatedNote,
    });
};

const updateNotePart = async (req, res) => {
    const updatedNotePart = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
     if (!updatedNotePart) {
      return res.status(404).json({
        message: 'Note not found',
      });
    }
   return res.status(200).json({
      message: 'Updated some part of the note',
      updatedNotePart
    });
};

const deleteNote = async (req, res) => {
    const deletedNote = await Note.findOneAndDelete({
      _id: { $eq: req.params.id },
    });
    if (!deletedNote)
      return res.status(404).json({
        message: 'Note not found',
      });
    return res.status(200).json({
      message: 'Note deleted',
      deleteNote,
    });
};

const searchNoteByTag = async (req, res) => {
    const title = req.query.title;
    console.log('title: ', title);
    const tag = await Tag.findOne({ title });
    if (!tag)
      return res.status(404).json({
        message: "Couldn't find tag",
      });
    const notes = await Note.find({tags: tag._id });
    return res.status(200).json({
      notes,
    });
    console.log('notes: ', notes);
};
export {
  createNote,
  getAllNotes,
  getNote,
  updateNote,
  updateNotePart,
  deleteNote,
  searchNoteByTag,
};
