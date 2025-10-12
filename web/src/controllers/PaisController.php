<?php 
    require __DIR__ . '/../services/PaisService.php';

    class PaisController{
        private $service;

        public function __construct(){
            $this->service = new PaisService();
        }

        public function listarPaises($limit = 20, $offset = 0, $search = null){
            return $this->service->getPaises($limit, $offset, $search);
        }

        public function totalPaises($search = null){
            return $this->service->getTotalPaises($search);
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