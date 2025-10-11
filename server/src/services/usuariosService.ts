import pool from "../utils/db.js";
import crypto from "crypto";

export async function login(email: string, senha: string){
    // Gerando o hash
    const senha_hash = crypto.createHash('md5').update(senha).digest('hex');

    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1 AND senha_hash = $2', [email, senha_hash]);
    if(result.rows.length === 0) return null;

    const usuario = result.rows[0];
    delete usuario.senha_hash; // Remove o hash antes de retornar
    
    return usuario;
}