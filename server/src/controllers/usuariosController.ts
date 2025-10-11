import { Request, Response } from 'express';
import * as usuariosService from '../services/usuariosService.js';

export async function login(req: Request, res: Response){
    try{
        const { email, senha } = req.body;
        if(!email || !senha) return res.status(400).json({ error: 'Email and password are required' });

        const user = await usuariosService.login(email, senha);
        if(!user) return res.status(401).json({ error: 'Invalid email or password' });

        res.status(200).json(user);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error during login' });
    }
}