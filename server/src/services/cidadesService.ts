import pool from '../utils/db.js';

export async function getCidades(limit: number = 20, offset: number = 0, search?: string){
    let query = "SELECT cidades.id, nome, cidades.populacao, id_pais, nome_oficial as nome_pais FROM cidades JOIN paises ON cidades.id_pais = paises.id";
    const values: any[] = [];

    if(search){
        values.push(`%${search}%`);
        query += "WHERE nome ILIKE $1 OR nome_oficial ILIKE $1";
    }

    // Indicando o indice pra LIMIT e OFFSET
    const limitIndex = values.length + 1;
    const offsetIndex = values.length + 2;

    query += ` ORDER BY id LIMIT $${limitIndex} OFFSET $${offsetIndex}`;
    values.push(limit, offset);

    const result = await pool.query(query, values);
    return result.rows;
}

export async function getTotalCidades(){
    const result = await pool.query('SELECT COUNT(*) FROM cidades;');
    return Number(result.rows[0].count);
}

export async function getCidadeById(id: number){
    const result = await pool.query(
        `SELECT cidades.id, nome, cidades.populacao, id_pais, nome_oficial as nome_pais FROM cidades
        JOIN paises ON cidades.id_pais = paises.id
        WHERE cidades.id = $1;`, [id]
    );
    return result.rows[0];
}

export async function createCidade(nome: string, populacao: number, id_pais: number){
    const result = await pool.query(
        `INSERT INTO cidades (nome, populacao, id_pais) VALUES ($1, $2, $3) RETURNING *`,
        [nome, populacao, id_pais]
    );
    return result.rows[0];
}

export async function updateCidade(id: number, nome: string, populacao: number, id_pais: number){
    const result = await pool.query(
        `UPDATE cidades SET nome = $1, populacao = $2, id_pais = $3 WHERE id = $4 RETURNING *`,
        [nome, populacao, id_pais, id]
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