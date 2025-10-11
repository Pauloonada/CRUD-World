<?php 
    require __DIR__ . '/../services/UsuarioService.php';

    class UsuarioController{
        private $service;

        public function __construct(){
            $this->service = new UsuarioService();
        }

        public function login($email, $senha){
            return $this->service->login($email, $senha);
        }
    }

?>