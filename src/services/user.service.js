import pool from "../config/db.js"

export async function getUsertById(id) {
    const result = await pool.query(`select * from proyecto.obtener_usuario($1)`, [id])
    return result.rows[0]
}

export async function createUser(documento, nombre, apellido, email, telefono, contraseia) {
    const query = 'call proyecto.crear_usuario($1,$2,$3,$4,$5,$6)'
    const values = [documento, nombre, apellido, email, telefono, contraseia]
    await pool.query(query, values)
    return { message: 'Usuario creado exitosamente' };
}

export async function updateUser(documento, nombre, apellido, email, telefono, contraseia) {
    const query = 'call proyecto.modificar_usuario($1,$2,$3,$4,$5,$6)'
    const values = [documento, nombre, apellido, email, telefono, contraseia]
    const result = await pool.query(query, values)
    return result.rows[0]
}
