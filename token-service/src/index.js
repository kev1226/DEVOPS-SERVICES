import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import tokenRoutes from './routes/token.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Rutas del servicio de token
app.use("/api", tokenRoutes);

app.listen(4001, () => {
    console.log('Token Service is running on port 4001');
});
