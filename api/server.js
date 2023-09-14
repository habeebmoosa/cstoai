import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected...')
}).catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port.`);
});