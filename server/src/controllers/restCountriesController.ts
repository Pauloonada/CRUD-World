import { Request, Response } from 'express';
import { getPaisInfoByName } from '../services/restCountriesService.js';

export async function getPaisInfo(req: Request, res: Response){
    const { nome } = req.query;
    if(!nome || typeof nome !== 'string') return res.status(400).json({ error: 'Informe o nome do país.' });

    const info = await getPaisInfoByName(nome);
    if(!info) return res.status(404).json({ error: 'País não encontrado.' })

    res.json(info);
}