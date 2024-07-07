import express from 'express';
import { getRandomWord } from '../controllers/wordController.js';
import requireAuth from '../middleware/requireAuth.js';
const router = express.Router();


//implement requireAuth middleware before fetching a word
router.use(requireAuth);

// Route to get a random word
router.get('/random', getRandomWord);

export default router;
