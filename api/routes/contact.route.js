import express from 'express';
import { sendContactInfo } from '../controller/public/contact.controller.js';
import { readContactInfo } from '../controller/admin/contact.controller.js';
import { verifyAuth } from '../middlewares/verifyAuth.js';

const router = express.Router();

router.post('/create', sendContactInfo);
router.get('/read', verifyAuth, readContactInfo);

export { router as contactRoutes }