import 'dotenv/config';

export default{
    expo: {
        name: "CrudWorld",
        slug: "CrudWorld",
        extra: {
            apiUrl: process.env.API_URL, // Puxando a URL da API do arquivo .env
        },
    },
};