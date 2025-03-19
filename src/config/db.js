import pg from 'pg'
import {config} from 'dotenv';

config();

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
})

pool.connect((err,Connection)=>{
    if(err) return err;
    console.log(`Conexion correcta`);
})

export default pool