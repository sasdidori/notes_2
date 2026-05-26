import express from 'express';
import noteRouter from './routes/note.route.js';
import tagRouter from './routes/tag.route.js';

const app = express();

app.use(express.json());

app.use('/api/v1/notes', noteRouter);
app.use('/api/v1/tags', tagRouter);

//route: http://localhost:4000/tags

export default app;
