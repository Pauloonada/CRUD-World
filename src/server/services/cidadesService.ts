import pool from '../utils/db.js';

export async function getCidades(){
    const result = await pool.query(
        `SELECT * FROM cidades
        JOIN paises ON cidades.id_pais = paises.id
        ORDER BY cidades.id`
    );
    return result.rows;
}

export async function getCidadeById(id: number){
    const result = await pool.query(
        `SELECT * FROM cidades
        JOIN paises ON cidades.id_pais = paises.id
        WHERE cidades.id = $1`, [id]
    );
    return result.rows[0];
}

export async function createCidade(nome: string, id_pais: number){
    const result = await pool.query(
        `INSERT INTO cidades (nome, id_pais) VALUES ($1, $2) RETURNING *`,
        [nome, id_pais]
    );
    return result.rows[0];
}

export async function updateCidade(id: number, nome: string, id_pais: number){
    const result = await pool.query(
        `UPDATE cidades SET nome = $1, id_pais = $2 WHERE id = $3 RETURNING *`,
        [nome, id_pais, id]
    );
    return result.rows[0];
}

export async function deleteCidade(id: number){
    const result = await pool.query(
        `DELETE FROM cidades WHERE id = $1 RETURNING *`,
        [id]
    );
    return result.rows[0];
}