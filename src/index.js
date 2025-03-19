import express from 'express'
import clientRoutes from './routes/clients.router.js'
import categoryRoutes from './routes/category.router.js'
import invoiceRoutes from './routes/invoice.router.js'
import invoiceDetailsRoutes from './routes/invoice.detail.router.js'
import paymentMethodRoutes from './routes/payment.method.router.js'
import productRoutes from './routes/products.router.js'
import taxesRoutes from './routes/taxes.router.js'
import userRoutes from './routes/user.router.js'

import {errorHandler} from './middleware/errorHandler.js'
import cors from 'cors'

const app = express();

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


app.use(cors())
app.use(express.json());
app.use('/clientes', clientRoutes);
app.use('/categorias', categoryRoutes);
app.use('/facturas', invoiceRoutes);
app.use('/detallesFactura', invoiceDetailsRoutes);
app.use('/metodosPago', paymentMethodRoutes);
app.use('/productos', productRoutes);
app.use('/impuestos', taxesRoutes);
app.use('/usuarios', userRoutes);

app.use(errorHandler);

export default app