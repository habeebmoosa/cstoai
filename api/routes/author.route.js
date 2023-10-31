import express from 'express';
import { changePosition, deleteAuthor, getAuthor, getAuthorProfile, getAuthors, updateAuthor } from '../controller/author.controller.js';
import { verifyAuth } from '../middlewares/verifyAuth.js'

const router = express.Router();

// public routes ---------------------------------------------------------
router.get('/user/:username', getAuthor);

// private routes --------------------------------------------------------
router.delete('/delete/:username',verifyAuth, deleteAuthor);
router.get('/get', verifyAuth, getAuthors);
router.put('/update', verifyAuth, updateAuthor);
router.get('/profile', verifyAuth, getAuthorProfile);
router.put('/position/:username', verifyAuth, changePosition);

export { router as authorRoutes }