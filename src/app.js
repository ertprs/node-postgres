import express from 'express';
import morgan from 'morgan';
import bodyParse from 'body-parser'

// cors
//import cors from './config/cors'

// Importing routes
import authRoutes from './routes/user';
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())
//app.use(cors)

// routes
app.use('/api', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;