import express from 'express';
import { readContactInfo, sendContactInfo } from '../../controller/pagesController/contact.controller.js';

const router = express.Router();

router.post('/create', sendContactInfo);
router.get('/read', readContactInfo);

export { router as contactRoutes }