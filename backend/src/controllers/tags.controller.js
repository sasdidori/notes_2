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

const deleteTag = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(404).json({
        message: 'Tag not found',
      });
    }
    const deletedTag = await Tag.findByIdAndDelete(id);
    console.log('id: ', id);
    res.status(200).json({
      message: 'Tag is successfully deleted',
      deletedTag,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

export { createTag, deleteTag };
