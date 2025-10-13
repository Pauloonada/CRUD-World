<?php
    require_once __DIR__ . '/../config/config.php';

    class PaisService{
        private $apiUrl;

        public function __construct(){
            // Pega a URL da API: Railway ou o fallback do .env
            $this->apiUrl = getenv('API_URL') ?: $GLOBALS['API_URL'];
            if(!$this->apiUrl) die("API_URL não definida.");
        }

        // GET /paises
        public function getPaises($limit = 20, $offset = 0, $search = null){
            $url = $this->apiUrl."/paises?limit=$limit&offset=$offset";
            if($search) $url .= "&search=".urlencode($search);

            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }

        // GET /paises/total
        public function getTotalPaises($search = null){
            $url = $this->apiUrl."/paises/total";
            if($search) $url .= "?search=".urlencode($search);

            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $res = curl_exec($ch);
            curl_close($ch);
            $data = json_decode($res, true);
            return $data['total'] ?? 0;
        }

        // GET /paises/{id}
        public function getPais($id){
            $ch = curl_init($this->apiUrl.'/paises/'.$id);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }

        // POST /paises
        public function createPais($data){
            $data.unlink('id');
            $ch = curl_init($this->apiUrl.'/paises');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }

        // PUT /paises/{id}
        public function updatePais($id, $data){
            $ch = curl_init($this->apiUrl.'/paises/'.$id);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }

        public function deletePais($id){
            $ch = curl_init($this->apiUrl.'/paises/'.$id);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
            $res = curl_exec($ch);
            curl_close($ch);
            return json_decode($res, true);
        }
    }


?>