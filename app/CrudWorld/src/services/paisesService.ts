import api from "./api";
import Pais from "../@types/Pais";

export async function getAllPaises(limit: number = 20, offset: number = 0, search?: string): Promise<Pais[]>{
    const params: any = { limit, offset };
    if(search) params.search = search;

    const { data } = await api.get("/paises", { params });
    return data;
}

export async function getTotalPaises(search?: string): Promise<number>{
    const params: any = {};
    if(search) params.search = search;

    const { data } = await api.get("/paises/total", { params });
    return data.total;
}

export async function getPaisById(id: number): Promise<Pais>{
    const { data } = await api.get(`/paises/${id}`);
    return data;
}

export async function createPais(pais: Pais): Promise<Pais>{
    const { data } = await api.post(`/paises`, pais);
    return data;
}

export async function updatePais(id: number, pais: Pais): Promise<Pais>{
    const { data } = await api.put(`/paises/${id}`, pais);
    return data;
}

export async function deletePais(id: number): Promise<Pais>{
    const { data } = await api.delete(`/paises/${id}`);
    return data;
}