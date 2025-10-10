<?php
    require __DIR__ . '/src/controllers/CidadeController.php';

    $controller = new CidadeController();

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $action = $_POST['action'] ?? '';

        // Limpando o array dos parâmetros
        $data = $_POST;
        unset($data['action']);

        $data = [
            'nome' => $data['nome'] ?? null,
            'populacao' => (int)$data['populacao'] ?? null,
            'id_pais' => $data['id_pais'] ?? null,
            'id' => isset($data['id']) ? (int)$data['id'] : null,
        ];

        switch($action){
            case 'add':
                $ok = $controller->criarCidade($data);
                header('Location: ./cidades.php?status=' . ($ok ? 'success' : 'error'));
                break;
            case 'edit':
                $ok = $controller->editarCidade($data['id'], $data);
                header('Location: ./cidades.php?status=' . ($ok ? 'success' : 'error'));
                break;
            case 'delete':
                $ok = $controller->deletarCidade($data['id']);
                header('Location: ./cidades.php?status=' . ($ok ? 'deleted' : 'error'));
                break;
            default:
                header('Location: ./cidades.php?status=error');
                break;
        }
        exit;
    }

    else{
        die('Método inválido');
    }

?>