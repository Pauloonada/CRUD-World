import { Request, Response } from 'express';
import * as paisesService from '../services/paisesService.js';

export async function getAll(req: Request, res: Response){
    try{
        const limit = Number(req.query.limit) || 20;
        const offset = Number(req.query.offset) || 0;
        const search = req.query.search as string | undefined;

        const paises = await paisesService.getAllPaises(limit, offset, search);
        res.json(paises);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error retrieving countries'});
    }
}

export async function getTotalPaises(req: Request, res: Response){
    try{
        const search = req.query.search as string | undefined;
        const total = await paisesService.getTotalPaises(search);
        res.json({ total });
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error getting the number of cities' })
    }
}

export async function getById(req: Request, res: Response){
    try{
        const pais = await paisesService.getPaisById(Number(req.params.id));
        if(!pais) return res.status(404).json({ error: 'Country not found' });
        res.json(pais);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error retrieving country' });
    }
}

export async function create(req: Request, res: Response){
    try{
        const { nome_oficial, continente, populacao, idioma_principal } = req.body;
        const newPais = await paisesService.createPais(nome_oficial, continente, populacao, idioma_principal);
        res.status(201).json(newPais);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error creating country' });
    }
}

export async function update(req: Request, res: Response){
    try{
        const id = Number(req.params.id);
        const { nome_oficial, continente, populacao, idioma_principal } = req.body;

        const updatedPais = await paisesService.updatePais(id, nome_oficial, continente, populacao, idioma_principal);
        if(!updatedPais) return res.status(404).json({ error: 'Country not found' });

        res.json(updatedPais);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error updating country' });
    }
}

export async function remove(req: Request, res: Response){
    try{
        const id = Number(req.params.id);

        const deletedPais = await paisesService.deletePais(id);
        if(!deletedPais) return res.status(404).json({ error: 'Country not found' });

        res.json({ message: 'Country deleted succesfully', pais: deletedPais });
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error deleting country' });
    }
}