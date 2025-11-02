import Constants from "expo-constants";
import axios from "axios";

const { apiUrl } = Constants.expoConfig?.extra; // Pegando a URL já guardada no app.config
console.info("Input da URL da API: ", apiUrl);

const api = axios.create({
    baseURL: apiUrl,
});

export default api;