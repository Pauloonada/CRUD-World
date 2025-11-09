import Cidade from "../@types/Cidade";

interface NovaCidade{
    nome: string;
    id_pais: number;
    populacao: number;
}

export function validarNovaCidade(cidade: NovaCidade): string | null{
    const { nome, id_pais, populacao } = cidade;

    if(!nome.trim()) return "O nome da cidade é obrigatório!";
    if(!id_pais) return "Selecione um país válido!";
    if(!populacao) return "Informe a população!";
    if(isNaN(Number(populacao)) || Number(populacao) <= 0) return "A população deve ser um numero válido!";
    if(nome.length > 100) return "O nome é muito longo! (máximo de 100 caracteres)";

    return null;
}

export function validarEditarCidade(cidade: Cidade): string | null{
    const { id, nome, id_pais, populacao } = cidade;

    if(!id) return "Informe um ID de cidade válido!";
    if(!nome.trim()) return "O nome da cidade é obrigatório!";
    if(!id_pais) return "Selecione um país válido!";
    if(!populacao) return "Informe a população!";
    if(isNaN(Number(populacao)) || Number(populacao) <= 0) return "A população deve ser um numero válido!";
    if(nome.length > 100) return "O nome é muito longo! (máximo de 100 caracteres)";

    return null;
}