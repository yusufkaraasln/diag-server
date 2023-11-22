import Router from 'express';
import Jwt from '../middleware/security.js';
import UserDetailsController from '../controller/userDetails.js';

const router = Router();

const { updateDetail } = new UserDetailsController();

router.put('/user-details', Jwt.verify, updateDetail);

export default router;
