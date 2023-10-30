import express from 'express';
import { deleteAuthor, getAuthor, getAuthors } from '../controller/author.controller.js';
import { verifyAuth } from '../middlewares/verifyAuth.js'

const router = express.Router();

router.get('/user/:username', getAuthor);
router.delete('/delete',verifyAuth, deleteAuthor);
router.get('/get', verifyAuth, getAuthors);

export { router as authorRoutes }