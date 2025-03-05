import app from "./app.js"
import { connectDBProfile } from "./db.js"

// Conexión a la base de datos
connectDBProfile();

// servidor escuchando en
app.listen(4003)
console.log('Server on port', 4003)

