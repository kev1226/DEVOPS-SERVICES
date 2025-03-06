import app from "./app.js"
import { connectDBToken } from "./db.js"

// Conexión a la base de datos
connectDBToken();

// servidor escuchando en
app.listen(4001)
console.log('Token Service is running on port', 4001)