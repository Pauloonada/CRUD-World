import { Request, Response } from 'express';
import * as paisesService from '../services/paisesService.js';

export async function getAll(req: Request, res: Response){
    try{
        const paises = await paisesService.getAllPaises();
        res.json(paises);
    }catch(error){
        res.status(500).json({ error: 'Error retrieving countries'});
    }
}

export async function getById(req: Request, res: Response){
    try{
        const pais = await paisesService.getPaisById(Number(req.params.id));
        if(!pais) return res.status(404).json({ error: 'Country not found' });
        res.json(pais);
    }catch(error){
        res.status(500).json({ error: 'Error retrieving country' });
    }
}

export async function create(req: Request, res: Response){
    try{
        const { nome, continente, populacao, idioma } = req.body;
        const newPais = await paisesService.createPais(nome, continente, populacao, idioma);
        res.status(201).json(newPais);
    }catch(error){
        res.status(500).json({ error: 'Error creating country' });
    }
}

export async function update(req: Request, res: Response){
    try{
        const id = Number(req.params.id);
        const { nome, continente, populacao, idioma } = req.body;

        const updatedPais = await paisesService.updatePais(id, nome, continente, populacao, idioma);
        if(!updatedPais) return res.status(404).json({ error: 'Country not found' });

        res.json(updatedPais);
    }catch(error){
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
        res.status(500).json({ error: 'Error deleting country' });
    }
}