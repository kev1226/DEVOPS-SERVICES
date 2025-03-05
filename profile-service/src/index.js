import app from "./app.js"
import { connectDBLogin } from "./db.js"

// Conexión a la base de datos
connectDBLogin();

// servidor escuchando en
app.listen(4003)
console.log('Server on port', 4003)

