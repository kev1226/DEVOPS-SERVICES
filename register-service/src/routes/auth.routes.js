// Para crear un enrutador
import { Router } from "express";
import { register} from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import {registerSchema } from "../schemas/auth.schema.js";
// Objeto para crear multiples rutas (peticiosnes get, post...)

const router = Router()

router.post('/register', validateSchema(registerSchema), register)

export default router