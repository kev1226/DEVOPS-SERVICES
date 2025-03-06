import { createAccessToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js";
import User from "../models/user.model.js"

export const generateToken = async (req, res) => {
    const { id } = req.body;
    console.log("Received ID:", id);  // Asegúrate de que el ID esté llegando correctamente
    if (!id) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    try {
        const token = await createAccessToken({ id });
        console.log("Generated Token:", token);  // Asegúrate de que el token se genera
        return res.json({ token });
    } catch (error) {
        console.error("Error:", error);  // Más detalles del error
        return res.status(500).json({ message: 'Error generating token', error: error.message });
    }
};



export const verifyToken = async (req, res) => {
    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: "Unauthorizated" })

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({ message: "Unauthorizated" })

        const userFound = await User.findById(user.id.id)
        if (!userFound) return res.status(401).json({ message: "Unauthorizated" })

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        })
    })
}