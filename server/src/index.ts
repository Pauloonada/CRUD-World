import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import paisesRoutes from './routes/paisesroutes.js';
import cidadesRoutes from './routes/cidadesRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/paises', paisesRoutes);
app.use('/cidades', cidadesRoutes);

app.listen(PORT, () => console.log('Server running on port ' + PORT));