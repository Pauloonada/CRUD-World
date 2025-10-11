<?php
    $title = "Países";
    include __DIR__ . '/views/header.php';

    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    $limit = 20;
    $offset = ($page - 1) * $limit;

    require_once __DIR__ . '/src/controllers/PaisController.php';
    $controller = new PaisController();
    $paises = $controller->listarPaises($limit, $offset);
    $totalPaises = $controller->totalPaises();
    $totalPaginas = ceil($totalPaises / $limit);
    if(isset($_GET['page']) && $_GET['page'] > $totalPaginas && $totalPaginas > 0){
        header('Location: ./paises.php?page=' . $totalPaginas);
        exit;
    }

    $nextOffset = $offset + $limit;
    $paisesProximaPagina = $controller->listarPaises($limit, $nextOffset);
    $temProximaPagina = count($paisesProximaPagina) > 0;

    include __DIR__ . '/modals/addPaisModal.php';
    include __DIR__ . '/modals/editPaisModal.php';
    include __DIR__ . '/modals/deletePaisModal.php';
?>

<h2 class="mb-4">Lista de Países</h2>

<button type="button" class="btn btn-success mb-3 btn-add" data-bs-toggle="modal" data-bs-target="#modalAdicionarPais">+ Adicionar País</button>

<table class="table table-striped table-hover table-dark table-bordered align-middle">
    <thead class="table-dark text-center">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Continente</th>
            <th>População</th>
            <th>Idioma Principal</th>
            <th>Ações</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($paises as $pais): ?>
            <tr>
                <td><?= $pais['id']; ?></td>
                <td><?= $pais['nome_oficial']; ?></td>
                <td><?= $pais['continente']; ?></td>
                <td><?= $pais['populacao']; ?></td>
                <td><?= $pais['idioma_principal']; ?></td>
                <td class="text-center">
                    <button type="button"
                        class="btn btn-warning btn-sm btn-edit"
                        data-id="<?= $pais['id'] ?>"
                        data-nome="<?= $pais['nome_oficial'] ?>"
                        data-continente="<?= $pais['continente'] ?>"
                        data-populacao="<?= $pais['populacao'] ?>"
                        data-idioma="<?= $pais['idioma_principal'] ?>"
                        data-bs-toggle="modal"
                        data-bs-target="#modalEditarPais"
                    >
                        Editar
                    </button>
                    <button type="button" class="btn btn-danger btn-sm btn-delete" data-id="<?= $pais['id'] ?>">Excluir</button>
                </td>
            </tr>
        <?php endforeach; ?>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="6" class="text-center">
                <nav aria-label="Pagination">
                    <ul class="pagination justify-content-center">
                        <li class="page-item">
                            <a href="?page=<?= $page - 1; ?>" class="page-link <?php if ($page <= 1) echo "disabled" ?>">Anterior</a>
                        </li>
                        <li class="page-item active">
                            <span class="page-link"><?= $page ?></span>
                        </li>
                        <li class="page-item">
                            <a href="?page=<?= $page + 1 ?>" class="page-link <?php if(!$temProximaPagina) echo "disabled" ?>">Próxima</a>
                        </li>
                    </ul>
                    <form method="GET" class="d-inline-flex align-items-center" style="gap: 8px;">
                        <label for="pageInput" class="form-label mb-0">Ir para página:</label>
                        <input type="number" min="1" max="<?= $totalPaginas ?>" name="page" id="pageInput" class="form-control form-control-sm" style="width: 80px;" value="<?= $page ?>">
                        <button type="submit" class="btn btn-primary btn-sm">Ir</button>
                    </form>
                </nav>
            </td>
        </tr>
    </tfoot>
</table>

<div class="toast-container position-fixed top-0 end-0 p-3" id="toast-container" style="z-index: 9999;"></div>
<?php include __DIR__ . '/views/footer.php'; ?>