import { Request, Response } from 'express';
import * as usuariosService from '../services/usuariosService.js';

export async function login(req: Request, res: Response){
    try{
        const { email, senha_hash } = req.body;
        const user = await usuariosService.login(email, senha_hash);
        if(!user) return res.status(401).json({ error: 'Invalid email or password' });

        res.json(user);
    }
    catch(error){
        res.status(500).json({ error: 'Error during login' });
    }
}