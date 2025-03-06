import { Router } from 'express';
import { generateToken, verifyToken } from '../controllers/token.controller.js';

const router = Router();

// Ruta para generar el token
router.post('/generate-token', generateToken);
router.get('/verify', verifyToken)

export default router;
