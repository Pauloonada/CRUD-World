import pool from "../utils/db.js";

export async function getAllPaises(){
    const result = await pool.query('SELECT * FROM paises ORDER BY id');
    return result.rows;
}

export async function getPaisById(id: number){
    const result = await pool.query('SELECT * FROM paises WHERE id = $1', [id]);
    return result.rows[0];
}

export async function createPais(nome: string, continente: string, populacao: number, idioma: string){
    const result = await pool.query(
        'INSERT INTO paises (nome_oficial, continente, populacao, idioma_principal) VALUES ($1, $2, $3, $4) RETURNING *',
        [nome, continente, populacao, idioma]
    );
    return result.rows[0];
}

export async function updatePais(id: number, nome: string, continente: string, populacao: number, idioma: string){
    const result = await pool.query(
        'UPDATE paises SET nome = $1, continente = $2, populacao = $3, idioma_principal = $4 WHERE id = $5 RETURNING *',
        [nome, continente, populacao, idioma, id]
    );
    return result.rows[0];
}

export async function deletePais(id: number){
    const result = await pool.query('DELETE FROM paises WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}