import axios from "axios";

export const generateToken = async (userId) => {
    try {
        // Hacer la llamada al microservicio de token para obtener el token
        const response = await axios.post("http://localhost:4001/api/generate-token",  { id: userId });
        return response.data.token;
    } catch (error) {
        throw new Error("Error generating token");
    }
};
