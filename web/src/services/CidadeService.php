<?php
    require_once __DIR__ . '/../config/config.php';

    class CidadeService{
        private $apiUrl;

        public function __construct(){
            // Pega a URL da API: Railway ou o fallback do .env
            $this->apiUrl = getenv('API_URL') ?: $GLOBALS['API_URL'];
            if(!$this->apiUrl) die("API_URL não definida.");
        }

        // GET /cidades
        public function getCidades(){
            $ch = curl_init($this->apiUrl.'/cidades');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }

        // GET /cidades/{id}
        public function getCidade($id){
            $ch = curl_init($this->apiUrl.'/cidades/'.$id);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }

        // POST /cidades
        public function createCidade($data){
            $ch = curl_init($this->apiUrl.'/cidades');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }

        // PUT /cidades/{id}
        public function updateCidade($id, $data){
            $ch = curl_init($this->apiUrl.'/cidades/'.$id);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }

        public function deleteCidade($id){
            $ch = curl_init($this->apiUrl.'/cidades/'.$id);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }
    }


?>