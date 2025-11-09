import api from "./api";
import Cidade from "../@types/Cidade";

export async function getAllCidades(limit: number = 20, offset: number = 0, search?: string): Promise<Cidade[]>{
    const params: any = { limit, offset };
    if(search) params.search = search;

    const { data } = await api.get("/cidades", { params });
    return data;
}

export async function getTotalCidades(search?: string): Promise<number>{
    const params: any = {};
    if(search) params.search = search;

    const { data } = await api.get("/cidades/total", { params });
    return data.total;
}

export async function getCidadeById(id: number): Promise<Cidade>{
    const { data } = await api.get(`/cidades/${id}`);
    return data;
}

export async function createCidade(cidade: Cidade): Promise<Cidade>{
    const { data } = await api.post(`/cidades`, cidade);
    return data;
}

export async function updateCidade(id: number, pais: Cidade): Promise<Cidade>{
    const { data } = await api.put(`/cidades/${id}`, pais);
    return data;
}

export async function deleteCidade(id: number): Promise<Cidade>{
    const { data } = await api.delete(`/cidades/${id}`);
    return data;
}