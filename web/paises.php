<?php
    $title = "Países";
    include __DIR__ . '/views/header.php';

    require_once __DIR__ . '/src/controllers/PaisController.php';

    $controller = new PaisController();
    $paises = $controller->listarPaises();
?>

<h2 class="mb-4">Lista de Países</h2>

<a href="#" class="btn btn-success mb-3">+ Adicionar País</a>

<table class="table table-striped table-hover table-dark table-bordered align-middle">
    <thead class="table-dark text-center">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Continente</th>
            <th>Ações</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($paises as $pais): ?>
            <tr>
                <td><?php echo $pais['id']; ?></td>
                <td><?php echo $pais['nome_oficial']; ?></td>
                <td><?php echo $pais['continente']; ?></td>
                <td class="text-center">
                    <a href="#" class="btn btn-warning btn-sm">Editar</a>
                    <a href="#" class="btn btn-danger btn-sm">Excluir</a>
                </td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>

<?php include __DIR__ . '/views/footer.php'; ?>