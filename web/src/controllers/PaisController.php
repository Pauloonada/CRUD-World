<?php 
    require __DIR__ . '/../services/PaisService.php';

    class PaisController{
        private $service;

        public function __construct(){
            $this->service = new PaisService();
        }

        public function listarPaises(){
            return $this->service->getPaises();
        }

        public function acharPais($id){
            return $this->service->getPais($id);
        }

        public function criarPais($data){
            return $this->service->createPais($data);
        }

        public function editarPais($id, $data){
            return $this->service->updatePais($id, $data);
        }

        public function deletarPais($id){
            return $this->service->deletePais($id);
        }
    }

?>