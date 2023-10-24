import express from 'express';
import { createPost, readPost, readPosts, readPostsByTag } from '../controller/post.controller.js';

const router = express.Router();

router.post('/create', createPost);
router.get('/read', readPosts);
router.get('/getpost/:url', readPost);
router.get('/getpostbytag/:tag', readPostsByTag)

export { router as postRoutes}