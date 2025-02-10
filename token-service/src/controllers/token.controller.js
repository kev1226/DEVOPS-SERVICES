import { createAccessToken } from '../libs/jwt.js';

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
