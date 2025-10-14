<?php
    require_once __DIR__ . '/../config/config.php';

    class RestCountriesService{
        private $apiUrl;

        public function __construct(){
            // Pega a URL da API: Railway internal ou o fallback do .env
            $this->apiUrl = getenv('API_URL') ?: $GLOBALS['API_URL'];
        }

        // POST /restcountries?codigo={codigo_iso}
        public function getWeather($codigo_iso){
            $url = $this->apiUrl.'/restcountries?codigo=' . urlencode($codigo_iso);
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }
    }
?>