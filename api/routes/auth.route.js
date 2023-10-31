import express from 'express';
import { resetPassword, signin, signup } from '../controller/auth.controller.js';
import { verifyAuth } from '../middlewares/verifyAuth.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/reset', verifyAuth, resetPassword);

export { router as authRoutes}