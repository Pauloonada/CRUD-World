import pool from "../utils/db.js";

export async function getAllPaises(){
    const result = await pool.query('SELECT * FROM paises ORDER BY id');
    return result.rows;
}

export async function getPaisById(id: number){
    const result = await pool.query('SELECT * FROM paises WHERE id = $1', [id]);
    return result.rows[0];
}

export async function createPais(nome: string, sigla: string){
    const result = await pool.query(
        'INSERT INTO paises (nome, sigla) VALUES ($1, $2) RETURNING *',
        [nome, sigla]
    );
    return result.rows[0];
}

export async function updatePais(id: number, nome: string, sigla: string){
    const result = await pool.query(
        'UPDATE paises SET nome = $1, sigla = $2 WHERE id = #3 RETURNING *',
        [nome, sigla, id]
    );
    return result.rows[0];
}

export async function deletePais(id: number){
    const result = await pool.query('DELETE FROM paises WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}