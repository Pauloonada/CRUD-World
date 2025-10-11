import pool from "../utils/db.js";

export async function getAllPaises(limit: number = 20, offset: number = 0){
    const result = await pool.query('SELECT * FROM paises ORDER BY id LIMIT $1 OFFSET $2', [limit, offset]);
    return result.rows;
}

export async function getTotalPaises(){
    const result = await pool.query('SELECT COUNT(*) FROM paises;');
    return Number(result.rows[0].count);
}

export async function getPaisById(id: number){
    const result = await pool.query('SELECT * FROM paises WHERE id = $1', [id]);
    return result.rows[0];
}

export async function createPais(nome_oficial: string, continente: string, populacao: number, idioma_principal: string){
    const result = await pool.query(
        'INSERT INTO paises (nome_oficial, continente, populacao, idioma_principal) VALUES ($1, $2, $3, $4) RETURNING *',
        [nome_oficial, continente, populacao, idioma_principal]
    );
    return result.rows[0];
}

export async function updatePais(id: number, nome_oficial: string, continente: string, populacao: number, idioma_principal: string){
    const result = await pool.query(
        'UPDATE paises SET nome_oficial = $1, continente = $2, populacao = $3, idioma_principal = $4 WHERE id = $5 RETURNING *',
        [nome_oficial, continente, populacao, idioma_principal, id]
    );
    return result.rows[0];
}

export async function deletePais(id: number){
    const result = await pool.query('DELETE FROM paises WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}