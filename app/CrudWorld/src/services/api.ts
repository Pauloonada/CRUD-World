import Constants from "expo-constants";
import axios from "axios";

const { apiUrl } = Constants.expoConfig?.extra || {} // Pegando a URL já guardada no app.config

const api = axios.create({
    baseURL: apiUrl,
});

export default api;