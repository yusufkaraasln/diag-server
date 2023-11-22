import Router from 'express';
import UserSettingsController from '../controller/userSettings.js';
import Jwt from '../middleware/security.js';

const router = Router();

const { deleteUser } = new UserSettingsController();

router.delete('/user-settings', Jwt.verify, deleteUser);

export default router;
