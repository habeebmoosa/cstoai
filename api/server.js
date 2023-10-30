import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { postRoutes } from './routes/post.route.js';
import cors from 'cors';
import { contactRoutes } from './routes/contact.route.js';
import { authorRoutes } from './routes/author.route.js';
import { authRoutes } from './routes/auth.route.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(express.static('public'))

// Routes
app.use('/auth', authRoutes);
app.use('/post', postRoutes);
app.use('/pages/contact', contactRoutes);
app.use('/author', authorRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected...')
}).catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port.`);
});