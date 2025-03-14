import express from 'express'
import clientRoutes from './routes/clients.router.js'
import {errorHandler} from './middleware/errorHandler.js'
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());
app.use('/clientes', clientRoutes);
app.use(errorHandler);

export default app