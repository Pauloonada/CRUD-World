import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

export async function getPaisInfoByName(name: string){
    try{
        const response = await axios.get(`${BASE_URL}/name/${encodeURIComponent(name)}?fullText=true`);
        const data = response.data[0];

        return {
            nome_oficial: data.name.official,
            capital: data.capital ? data.capital[0] : "N/A",
            moeda: data.currencies ? Object.keys(data.currencies)[0] : "N/A",
            bandeira: data.flags?.svg || data.flags?.png || ""
        };
    } catch(error){
        console.error("Erro ao buscar informações do país:", error);
        return null;
    }
}