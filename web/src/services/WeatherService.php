<?php
    require_once __DIR__ . '/../config/config.php';

    class WeatherService{
        private $apiUrl;

        public function __construct(){
            // Pega a URL da API: Railway ou o fallback do .env
            $this->apiUrl = getenv('API_URL') ?: $GLOBALS['API_URL'];
        }

        // POST /weather?cidade=$cidade
        public function getWeather($cidade){
            $url = $this->apiUrl.'/weather?cidade=' . urlencode($cidade);
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }
    }
?>