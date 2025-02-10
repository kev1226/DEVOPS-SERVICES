import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

import { generateToken } from "../token.service.js";

export const register = async (req, res) => {
    const { email, password, username } = req.body
    try {
        // encriptando contraseña
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        // usando token
        const userSaved = await newUser.save();

      // Ahora generamos el token con nuestro servicio
      const token = await generateToken(userSaved._id);

        res.cookie("token", token)

        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAT: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

