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
                $ok = $controller->criarPais($data);
                header('Location: ./paises.php?status=' . ($ok ? 'success' : 'error'));
                break;
            case 'edit':
                $ok = $controller->editarPais($data['id'], $data);
                header('Location: ./paises.php?status=' . ($ok ? 'success' : 'error'));
                break;
            case 'delete':
                $ok = $controller->deletarPais($data['id']);
                header('Location: ./paises.php?status=' . ($ok ? 'deleted' : 'error'));
                break;
            default:
                header('Location: ./paises.php?status=error');
                break;
        }
        exit;
    }

    else{
        die('Método inválido');
    }

?>