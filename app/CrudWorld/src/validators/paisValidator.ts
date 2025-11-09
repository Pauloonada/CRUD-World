import Pais from "../@types/Pais";

interface NovoPais{
    nome_oficial: string;
    continente: string;
    populacao: number;
    idioma_principal: string;
    codigo_iso: string;
}

export function validarNovoPais(pais: NovoPais): string | null{
    const { nome_oficial, continente, populacao, idioma_principal, codigo_iso } = pais;

    if(!nome_oficial.trim()) return "O nome do país é obrigatório!";
    if(!continente) return "Selecione um continente!";
    if(!populacao) return "Informe a população!";
    if(isNaN(Number(populacao)) || Number(populacao) <= 0) return "A população deve ser um numero válido!";
    if(!idioma_principal.trim()) return "O idioma principal é obrigatório!";
    if(!codigo_iso.trim() || codigo_iso.length !== 2 || !/^[A-Za-z]{2}$/.test(codigo_iso)) return "O código ISO deve conter exatamente 2 letras!";
    if(nome_oficial.length > 150) return "O nome oficial é muito longo! (máximo de 150 caracteres)";

    return null;
}

export function validarEditarPais(pais: Pais): string | null{
    const { id, nome_oficial, continente, populacao, idioma_principal, codigo_iso } = pais;

    if(!id) return "Informe um ID de cidade válido!";
    if(!nome_oficial.trim()) return "O nome do país é obrigatório!";
    if(!continente) return "Selecione um continente!";
    if(!populacao) return "Informe a população!";
    if(isNaN(Number(populacao)) || Number(populacao) <= 0) return "A população deve ser um numero válido!";
    if(!idioma_principal.trim()) return "O idioma principal é obrigatório!";
    if(!codigo_iso.trim() || codigo_iso.length !== 2 || !/^[A-Za-z]{2}$/.test(codigo_iso)) return "O código ISO deve conter exatamente 2 letras!";
    if(nome_oficial.length > 150) return "O nome oficial é muito longo! (máximo de 150 caracteres)";

    return null;
}