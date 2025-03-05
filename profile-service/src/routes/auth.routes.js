// Para crear un enrutador
import { Router } from "express";
import { profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
// Objeto para crear multiples rutas (peticiosnes get, post...)

const router = Router()

router.get('/profile', authRequired, profile)

export default router