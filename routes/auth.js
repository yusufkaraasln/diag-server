import { Router } from 'express';
import AuthController from '../controller/auth.js';
const router = Router();

const { guestLogin, googleLogin, getUserByToken, appleLogin } = new AuthController();

router.post('/auth/guest-login', guestLogin);

router.post('/auth/google-login', googleLogin);
router.post('/auth/apple-login', appleLogin);

router.post('/auth/user', getUserByToken);

export default router;
