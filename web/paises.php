<?php
    $title = "Países";
    include __DIR__ . '/views/header.php';

    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    $limit = 20;
    $offset = ($page - 1) * $limit;

    require_once __DIR__ . '/src/controllers/PaisController.php';
    $controller = new PaisController();

    $search = $_GET['search'] ?? null;
    $paises = $controller->listarPaises($limit, $offset, $search);
    $totalPaises = $controller->totalPaises($search);
    $totalPaginas = ceil($totalPaises / $limit);
    if (isset($_GET['page']) && $_GET['page'] > $totalPaginas && $totalPaginas > 0) {
        header('Location: ./paises.php?page=' . $totalPaginas);
        exit;
    }

    $nextOffset = $offset + $limit;
    $paisesProximaPagina = $controller->listarPaises($limit, $nextOffset, $search);
    $temProximaPagina = count($paisesProximaPagina) > 0;

    include __DIR__ . '/modals/addPaisModal.php';
    include __DIR__ . '/modals/editPaisModal.php';
    include __DIR__ . '/modals/deletePaisModal.php';
?>
<div class="row text-center">
    <h2 class="mb-4 align-center">Lista de Países</h2>
</div>

<button type="button" class="btn btn-success mb-3 btn-add" data-bs-toggle="modal" data-bs-target="#modalAdicionarPais">+ Adicionar País</button>

<div class="col-md-6 mb-3">
    <form method="GET" class="d-flex" role="search">
        <input class="form-control me-2" type="search" name="search" placeholder="Pesquisar país..." aria-label="Search" value="<?= isset($_GET['search']) ? htmlspecialchars($_GET['search']) : '' ?>">
        <button class="btn btn-outline-success" type="submit">Pesquisar</button>
    </form>
</div>

<table class="table table-striped table-hover table-dark table-bordered align-middle">
    <thead class="table-dark text-center">
        <tr>
            <th>
                <h3>País</h3>
            </th>
            <th>
                <h3>Continente</h3>
            </th>
            <th>
                <h3>População</h3>
            </th>
            <th>
                <h3>Idioma Principal</h3>
            </th>
            <th>
                <h3>Ações</h3>
            </th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($paises as $pais): ?>
            <tr>
                <td class="text-center"><?= $pais['nome_oficial']; ?></td>
                <td class="text-center"><?= $pais['continente']; ?></td>
                <td class="text-center"><?= $pais['populacao']; ?></td>
                <td class="text-center"><?= $pais['idioma_principal']; ?></td>
                <td class="text-center">
                    <button type="button"
                        class="btn btn-warning btn-sm btn-edit"
                        data-id="<?= $pais['id'] ?>"
                        data-nome="<?= $pais['nome_oficial'] ?>"
                        data-continente="<?= $pais['continente'] ?>"
                        data-populacao="<?= $pais['populacao'] ?>"
                        data-idioma="<?= $pais['idioma_principal'] ?>"
                        data-bs-toggle="modal"
                        data-bs-target="#modalEditarPais">
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
                            <a href="?page=<?= $page - 1; ?>&search=<?= $search; ?>" class="page-link <?php if($page <= 1) echo "disabled" ?>">Anterior</a>
                        </li>
                        <li class="page-item active">
                            <span class="page-link"><?= $page ?></span>
                        </li>
                        <li class="page-item">
                            <a href="?page=<?= $page + 1 ?>&search=<?= $search; ?>" class="page-link <?php if(!$temProximaPagina) echo "disabled" ?>">Próxima</a>
                        </li>
                    </ul>
                    <form method="GET" class="d-inline-flex align-items-center" style="gap: 8px;">
                        <label for="pageInput" class="form-label mb-0">Ir para página:</label>
                        <input type="number" min="1" max="<?= $totalPaginas ?>" name="page" id="pageInput" class="form-control form-control-sm" style="width: 80px;" value="<?= $page ?>">
                        <input type="hidden" name="search" value="<?= htmlspecialchars($search) ?>">
                        <button type="submit" class="btn btn-primary btn-sm">Ir</button>
                    </form>
                </nav>
            </td>
        </tr>
    </tfoot>
</table>

<div class="toast-container position-fixed top-0 end-0 p-3" id="toast-container" style="z-index: 9999;"></div>
<?php include __DIR__ . '/views/footer.php'; ?>