import * as cidadesService from '../services/cidadesService.js';
import { Request, Response } from 'express';

export async function getAll(req: Request, res: Response){
    try{
        const cidades = await cidadesService.getCidades();
        res.json(cidades);
    }catch(error){
        res.status(500).json({ error: 'Error retrieving cities' });
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
        const { nome, pais_id } = req.body;
        const newCidade = await cidadesService.createCidade(nome, pais_id);
        res.status(201).json(newCidade);
    }catch(error){
        res.status(500).json({ error: 'Error creating city' });
    }
}

export async function update(req: Request, res: Response){
    try{
        const id = Number(req.params.id);
        const { nome, pais_id } = req.body;
        const updatedCidade = await cidadesService.updateCidade(id, nome, pais_id);
        if(!updatedCidade) return res.status(404).json({ error: 'City not found' });
        res.json(updatedCidade);
    }catch(error){
        res.status(500).json({ error: 'Error updating city' })
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