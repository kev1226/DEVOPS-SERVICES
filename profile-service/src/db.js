//m Módulo que permite concetar a mongodb
// pero tambien modelar los datos
import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
// Crea una db cuando se inserte un datos

export const connectDBProfile = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log(">>>DB is connected");
    } catch (error) {
        console.log("ERROR DB");
    }

};