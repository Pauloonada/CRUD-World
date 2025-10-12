import * as cidadesService from '../services/cidadesService.js';
import { Request, Response } from 'express';

export async function getAll(req: Request, res: Response){
    try{
        const limit = Number(req.query.limit) || 20;
        const offset = Number(req.query.offset) || 0;
        const search = req.query.search as string | undefined;

        const cidades = await cidadesService.getCidades(limit, offset, search);
        res.json(cidades);
    }catch(error){
        res.status(500).json({ error: 'Error retrieving cities' });
    }
}

export async function getTotalCidades(req: Request, res: Response){
    try{
        const search = req.query.search as string | undefined;
        const total = await cidadesService.getTotalCidades(search);
        res.json({ total });
    }catch(error){
        res.status(500).json({ error: 'Error getting the number of cities' })
    }
}

export async function getById(req: Request, res: Response){
    try{
        const id = Number(req.params.id);
        const cidade = await cidadesService.getCidadeById(id);
        if(!cidade) return res.status(404).json({ error: 'City not found' });
        res.json(cidade);
    }catch(error){
        res.status(500).json({ error: 'Error retrieving city' });
    }
}

export async function create(req: Request, res: Response){
    try{
        const { nome, populacao, id_pais } = req.body;
        const newCidade = await cidadesService.createCidade(nome, populacao, id_pais);
        res.status(201).json(newCidade);
    }catch(error){
        res.status(500).json({ error: 'Error creating city' });
    }
}

export async function update(req: Request, res: Response){
    try{
        const id = Number(req.params.id);
        const { nome, populacao, id_pais } = req.body;
        const updatedCidade = await cidadesService.updateCidade(id, nome, populacao, id_pais);
        if(!updatedCidade) return res.status(404).json({ error: 'City not found' });
        res.json(updatedCidade);
    }catch(error){
        res.status(500).json({ error: 'Error updating city' });
    }
}

export async function remove(req: Request, res: Response){
    try{
        const id = Number(req.params.id);
        const deletedCidade = await cidadesService.deleteCidade(id);
        if(!deletedCidade) return res.status(404).json({ error: 'City not found' });
        res.json({ message: 'City deleted succesfully', cidade: deletedCidade });
    }catch(error){
        res.status(500).json({ error: 'Error deleting city' })
    }
}