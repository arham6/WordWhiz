import express from 'express';
import {loginUser, signupUser,verifyUser} from '../controllers/userController.js';
// import requireAuth from '../middlewares/requireAuth.js';
const router = express.Router();






//login route
router.post('/login',loginUser)


//signup route
router.post('/signup',signupUser)

//verify user token
router.get('/verify',verifyUser)

export default router;