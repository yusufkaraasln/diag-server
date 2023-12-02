import Router from 'express';
import Jwt from '../middleware/security.js';
import DiagnoController from '../controller/diagnoController.js';

const router = Router();

const { makeDiagno } = new DiagnoController();

router.post('/diagno', Jwt.verify, makeDiagno);

export default router;
