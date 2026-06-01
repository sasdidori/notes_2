import mongoose from 'mongoose';
import { Tag } from './tags.js';

const { Schema, model } = mongoose;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      //unique: true,
      lowercase: true,
      trim: true,
      minLength: 1,
      maxLength: 50,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Note = model('Note', noteSchema);
