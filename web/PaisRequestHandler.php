<?php
    require __DIR__ . '/src/controllers/PaisController.php';

    $controller = new PaisController();

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $action = $_POST['action'] ?? '';

        // Limpando o array dos parâmetros
        $data = $_POST;
        unset($data['action']);

        $data = [
            'nome_oficial' => $data['nome_oficial'] ?? null,
            'continente' => $data['continente'] ?? null,
            'populacao' => (int)$data['populacao'] ?? null,
            'idioma_principal' => $data['idioma_principal'] ?? null,
            'id' => isset($data['id']) ? (int)$data['id'] : null,
        ];

        switch($action){
            case 'add':
                $controller->criarPais($data);
                break;
            case 'edit':
                $controller->editarPais($data['id'], $data);
                break;
            case 'delete':
                $controller->deletarPais($data['id']);
                break;
            default:
                die('Ação inválida');
        }
                

        header('Location: ./paises.php');
        exit;
    }

    else{
        die('Método inválido');
    }

?>