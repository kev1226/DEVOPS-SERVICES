// Para crear un enrutador
import { Router } from "express";
import { login, logout } from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema } from "../schemas/auth.schema.js";
// Objeto para crear multiples rutas (peticiosnes get, post...)

const router = Router()


router.post('/login', validateSchema(loginSchema),login)

router.post('/logout', logout)

export default router