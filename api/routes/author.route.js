import express from 'express';
import { createAuthor, getAuthor } from '../controller/author.controller.js';

const router = express.Router();

router.get('/:username', getAuthor);
router.post('/create', createAuthor);

export { router as authorRoutes}