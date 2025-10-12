<?php 
    require __DIR__ . '/../services/CidadeService.php';

    class CidadeController{
        private $service;

        public function __construct(){
            $this->service = new CidadeService();
        }

        public function listarCidades($limit = 20, $offset = 0, $search = null){
            return $this->service->getCidades($limit, $offset, $search);
        }

        public function totalCidades($search = null){
            return $this->service->getTotalCidades($search);
        }

        public function acharCidade($id){
            return $this->service->getCidade($id);
        }

        public function criarCidade($data){
            return $this->service->createCidade($data);
        }

        public function editarCidade($id, $data){
            return $this->service->updateCidade($id, $data);
        }

        public function deletarCidade($id){
            return $this->service->deleteCidade($id);
        }
    }

?>