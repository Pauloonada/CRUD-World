<?php
    require_once __DIR__ . '/../config/config.php';

    class UsuarioService{
        private $apiUrl;

        public function __construct(){
            // Pega a URL da API: Railway ou o fallback do .env
            $this->apiUrl = getenv('API_URL') ?: $GLOBALS['API_URL'];
            if(!$this->apiUrl) die("API_URL não definida.");
        }

        // POST /login
        public function login($email, $senha){
            $ch = curl_init($this->apiUrl.'/login');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['email' => $email, 'senha' => $senha]));
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-type: application/json']);
            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }
    }


?>