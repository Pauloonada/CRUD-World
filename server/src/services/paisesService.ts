import pool from "../utils/db.js";

export async function getAllPaises(limit: number = 20, offset: number = 0, search?: string){
    let query = "SELECT * FROM paises";
    const values: any[] = [];

    if(search){
        values.push(`%${search}%`);
        query += " WHERE nome_oficial ILIKE $1 OR continente ILIKE $1 OR idioma_principal ILIKE $1";
    }

    // Indicando o indice pra LIMIT e OFFSET
    const limitIndex = values.length + 1;
    const offsetIndex = values.length + 2;

    query += ` ORDER BY continente, nome_oficial LIMIT $${limitIndex} OFFSET $${offsetIndex}`; // Maldita concatenação
    values.push(limit, offset);

    const result = await pool.query(query, values);
    return result.rows;
}

export async function getTotalPaises(search?: string){
    let query = "SELECT COUNT(*) FROM paises";
    const values: any[] = [];

    if(search){
        values.push(`%${search}%`);
        query += " WHERE nome_oficial ILIKE $1 OR continente ILIKE $1 OR idioma_principal ILIKE $1";
    }

    const result = await pool.query(query, values);
    return Number(result.rows[0].count);
}

export async function getPaisById(id: number){
    const result = await pool.query('SELECT * FROM paises WHERE id = $1', [id]);
    return result.rows[0];
}

export async function createPais(nome_oficial: string, continente: string, populacao: number, idioma_principal: string, codigo_iso: string){
    const result = await pool.query(
        'INSERT INTO paises (nome_oficial, continente, populacao, idioma_principal, codigo_iso) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nome_oficial, continente, populacao, idioma_principal, codigo_iso]
    );
    return result.rows[0];
}

export async function updatePais(id: number, nome_oficial: string, continente: string, populacao: number, idioma_principal: string, codigo_iso: string){
    const result = await pool.query(
        'UPDATE paises SET nome_oficial = $1, continente = $2, populacao = $3, idioma_principal = $4, codigo_iso = $5 WHERE id = $6 RETURNING *',
        [nome_oficial, continente, populacao, idioma_principal, codigo_iso, id]
    );
    return result.rows[0];
}

export async function deletePais(id: number){
    const result = await pool.query('DELETE FROM paises WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}