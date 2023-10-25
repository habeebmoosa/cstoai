import express from 'express';
import { createPost, readPost, readPosts, readPostsByTag, uploadImage } from '../controller/post.controller.js';

const router = express.Router();

router.post('/create', createPost);
router.get('/read', readPosts);
router.get('/getpost/:url', readPost);
router.get('/getpostbytag/:tag', readPostsByTag);
router.post('/uploadimage', uploadImage);

export { router as postRoutes}