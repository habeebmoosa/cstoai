import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { postRoutes } from './routes/post.route.js';
import cors from 'cors';
import { contactRoutes } from './routes/pagesRoutes/contact.route.js';
import { authorRoutes } from './routes/author.route.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

// Routes
app.use('/post', postRoutes);
app.use('/pages/contact', contactRoutes);
app.use('/author', authorRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected...')
}).catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port.`);
});