import { Router } from 'express';
import AuthController from '../controller/auth.js';
const router = Router();

const { guestLogin, googleLogin, getUserByToken } = new AuthController();

router.post('/auth/guest-login', guestLogin);

router.post('/auth/google-login', googleLogin);

router.post('/auth/user', getUserByToken);

export default router;
