import { Request, Response } from 'express';
import { getPaisInfoByCode } from '../services/restCountriesService.js';

export async function getPaisInfo(req: Request, res: Response){
    const { codigo } = req.query;
    if(!codigo || typeof codigo !== 'string') return res.status(400).json({ error: 'Informe o código do país.' });

    const info = await getPaisInfoByCode(codigo);
    if(!info) return res.status(404).json({ error: 'País não encontrado.' })

    res.json(info);
}