<?php include __DIR__ . '../../modals/sairModal.php'; ?>

<!DOCTYPE html>
<html lang="pt-br" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($title) ? $title . " - CRUD World" : "CRUD World" ?></title>
    <link rel="shortcut icon" href="../assets/favicon.ico" type="image/x-icon">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="bg-dark">
    <header class="bg-dark text-white p-3 mb-4">
        <div class="container d-flex justify-content-between align-items-center">
            <a href="index.php"><h1 class="h3">🌍 CRUD World</h1></a>
            <nav>
                <a href="index.php" class="text-white me-3">Início</a>
                <?php if(isset($_SESSION['user'])) echo "<button type='button' class='btn btn-outline-danger btn-sm btn-sair' data-bs-toggle='modal' data-bs-target='#modalSair'><i class='bi bi-power' style='font-size: 1rem;'></i> Desconectar</button>"?>
            </nav>
        </div>
    </header>
</body>