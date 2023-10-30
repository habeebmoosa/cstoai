import express from 'express';
import { createPost, deletePost, readPost, readPosts, readPostsBySearch, readPostsByTag, readPostsByUser, updatePost, uploadImage } from '../controller/post.controller.js';
import { verifyAuth } from '../middlewares/verifyAuth.js';

const router = express.Router();

//public routes
router.get('/read', readPosts);
router.get('/getpost/:url', readPost);
router.get('/getpostbytag/:tag', readPostsByTag);
router.get('/search/:search', readPostsBySearch);

//private routes
router.post('/create', verifyAuth, createPost);
router.put('/update/:url',verifyAuth, updatePost);
router.delete('/delete/:url',verifyAuth, deletePost);
router.post('/uploadimage', verifyAuth, uploadImage);
router.get('/readbyuser', verifyAuth, readPostsByUser);


export { router as postRoutes }