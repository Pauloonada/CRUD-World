<?php 
    require __DIR__ . '/../services/CidadeService.php';

    class CidadeController{
        private $service;

        public function __construct(){
            $this->service = new CidadeService();
        }

        public function listarCidades(){
            return $this->service->getCidades();
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