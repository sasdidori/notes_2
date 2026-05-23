import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const TagSchema = new Schema({
  title: {
    type: String,
    //enum: ['household', 'personal', 'other'],
  },
});

export const Tag = model('Tag', TagSchema);
