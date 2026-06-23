import express from 'express';
import noteRouter from './routes/note.route.js';
import tagRouter from './routes/tag.route.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  const start = Date.now();

  (res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration} ms`,
    );
  }),
    next());
});
app.use('/api/v1/notes', noteRouter);
app.use('/api/v1/tags', tagRouter);

app.use(errorHandler)

//route: http://localhost:4000/tags

export default app;
