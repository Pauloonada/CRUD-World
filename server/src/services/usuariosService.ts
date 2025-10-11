import pool from "../utils/db.js";

export async function login(email: string, senha_hash: string){
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1 AND senha_hash = $2', [email, senha_hash]);
    if(result.rows.length === 0) return null;
    
    return result.rows[0];
}