<?php
    require __DIR__ . '/src/controllers/PaisController.php';

    $controller = new PaisController();

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $action = $_POST['action'] ?? '';

        switch($action){
            case 'add':
                $controller->criarPais($_POST);
                break;
            case 'edit':
                $controller->editarPais($_POST['id'], $_POST);
                break;
            case 'delete':
                $controller->deletarPais($_POST['id']);
                break;
            default:
                die('Ação inválida');
        }

        header('Location: ../paises.php');
        exit;
    }

    else{
        die('Método inválido');
    }

?>