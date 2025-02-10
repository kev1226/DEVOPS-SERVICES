import { Router } from 'express';
import { generateToken } from '../controllers/token.controller.js';

const router = Router();

// Ruta para generar el token
router.post('/generate-token', generateToken);

export default router;
