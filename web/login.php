<?php
    require_once __DIR__ . '/src/controllers/UsuarioController.php';
    if(session_status() === PHP_SESSION_NONE) session_start();
    if(isset($_SESSION['user'])){
        header('Location: ./index.php');
        exit;
    }

    $title = "Login";
    include __DIR__ . '/views/header.php';

    $status = $_GET['status'] ?? '';
    $statusMessage = '';
    switch($status){
        case 'error':
            $statusMessage = 'Erro no login. Verifique as informações e tente novamente.';
            break;
        case 'logged_out':
            $statusMessage = 'Desconectado com sucesso.';
            break;
        default:
            $statusMessage = '';
            break;
    }

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $email = $_POST['email'] ?? '';
        $senha = $_POST['senha'] ?? '';
        $controller = new UsuarioController();

        $user = $controller->login($email, $senha);
        if($user){
            $_SESSION['user'] = $user;
            header('Location: ./index.php');
            exit;
        }
        else{
            header('Location: ./login.php?status=error');
            exit;
        }
    }
?>

<div class="container mt-5">
    <h2 class="mb">Login</h2>
    <?php if($statusMessage): ?>
        <div class="alert alert-info"><?= $statusMessage; ?></div>
    <?php endif; ?>
    <form action="login.php" method="POST">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="mb-3">
            <label for="senha" class="form-label">Senha</label>
            <input type="password" class="form-control" id="senha" name="senha" required>
        </div>
        <button type="submit" class="btn btn-primary">Entrar</button>
    </form>