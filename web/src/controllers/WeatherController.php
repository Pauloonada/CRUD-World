<?php 
    require __DIR__ . '/../services/WeatherService.php';

    class WeatherController{
        private $service;

        public function __construct(){
            $this->service = new WeatherService();
        }

        public function getWeather($cidade){
            return $this->service->getWeather($cidade);
        }
    }

?>