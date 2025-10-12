import { Request, Response } from "express";
import { getWeather } from "../services/weatherService.js";

export async function getWeatherInfo(req: Request, res: Response){
    const { cidade } = req.query;
    if(!cidade || typeof cidade !== 'string') return res.status(400).json({ error: 'Informe o nome da cidade.' });

    const info = await getWeather(String(cidade));
    if(!info || info instanceof Error) return res.status(500).json({ error: info?.message || 'Erro ao buscar o clima.' });

    res.json(info);
}