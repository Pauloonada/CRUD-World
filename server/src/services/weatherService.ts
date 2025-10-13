import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY= process.env.OPENWEATHER_API_KEY;

export async function getWeather(city: string){
    try{
        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                units: "metric",
                lang: "pt_br",
                appid: API_KEY
            }
        });

        const data = response.data;
        return{
            descricao: data.weather[0].description,
            temperatura: data.main.temp,
            umidade: data.main.humidity,
            vento: data.wind.speed,
            icone: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        };
    } catch(error){
        console.error("Erro ao buscar dados meteorológicos: ", error);
        return null;
    }
}