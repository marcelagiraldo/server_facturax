import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    user:'postgres',
    password:'AutonomaSQL123.',
    database:'facturaya',
    host: '127.0.0.1',
    port:'5432'
})

pool.connect((err,Connection)=>{
    if(err) return err;
    console.log(`Conexion correcta`);
})

export default pool