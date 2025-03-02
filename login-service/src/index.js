import app from "./app.js"
import { connectDBLogin } from "./db.js"

// Conexión a la base de datos
connectDBLogin();

// servidor escuchando en
app.listen(4002)
console.log('Server on port', 4002)


