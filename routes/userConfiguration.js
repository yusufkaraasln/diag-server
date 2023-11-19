import Router from 'express';
import UserConfigurationController from '../controller/userConfiguration.js';
import Jwt from '../middleware/security.js';

const router = Router();

const { updateConfigurationSteps } = new UserConfigurationController();

router.put('/user-configuration/steps', Jwt.verify, updateConfigurationSteps);


export default router;
