import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import { generateToken } from "../token.service.js";

export const login = async (req, res) => {
    const { email, password } = req.body
    try {

        const UserFound = await User.findOne({ email })
        if (!UserFound) return res.status(400).json({
            message:
                "User not fount"
        })

        // comparando contraseña
        const isMatch = await bcrypt.compare(password, UserFound.password)

        if (!isMatch) return res.status(400).json({
            message: "Incorrect Password"
        })

        // usando token
        const token = await generateToken({ id: UserFound._id })

        res.cookie('token', token)

        res.json({
            id: UserFound._id,
            username: UserFound.username,
            email: UserFound.email,
            createdAT: UserFound.createdAt,
            updatedAt: UserFound.updatedAt,
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    });
    return res.sendStatus(200);
}
