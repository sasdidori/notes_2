import { Tag } from '../models/tags.js';
import router from '../routes/tag.route.js';

const createTag = async (req, res) => {
  try {
    const { title } = req.body;
    console.log('title: ', title);
    const tag = await Tag.create({
      title,
    });
    res.status(201).json({
      message: 'Tag created successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};

export { createTag };
