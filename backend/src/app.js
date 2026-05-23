import express from 'express';

const app = express();
app.use(express.json());

import noteRouter from './routes/note.route.js';
import tagRouter from './routes/tag.route.js';

app.use('/notes', noteRouter);
app.use('/tags', tagRouter);

//route: http://localhost:4000/tags/create

export default app;
