<?php
    if(session_status() === PHP_SESSION_NONE) session_start();
    if(!isset($_SESSION['user'])){
        header('Location: ./login.php?status=error');
        exit;
    }
    
    $title = "Cidades";
    include __DIR__ . '/views/header.php';

    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    $limit = 20;
    $offset = ($page - 1) * $limit;

    require_once __DIR__ . '/src/controllers/CidadeController.php';
    $controller = new CidadeController();

    $search = $_GET['search'] ?? null;
    $cidades = $controller->listarCidades($limit, $offset, $search);
    $totalCidades = $controller->totalCidades($search);
    $totalPaginas = ceil($totalCidades / $limit);
    if(isset($_GET['page']) && $_GET['page'] > $totalPaginas && $totalPaginas > 0){
        header('Location: ./cidades.php?page=' . $totalPaginas);
        exit;
    }

    $nextOffset = $offset + $limit;
    $cidadesProximaPagina = $controller->listarCidades($limit, $nextOffset, $search);
    $temProximaPagina = count($cidadesProximaPagina) > 0;

    include __DIR__ . '/modals/addCidadeModal.php';
    include __DIR__ . '/modals/editCidadeModal.php';
    include __DIR__ . '/modals/deleteCidadeModal.php';
    include __DIR__ . '/modals/weatherCidadeModal.php';

    $env = parse_ini_file(__DIR__ . '/.env');
    $API_KEY = getenv('OPENWEATHER_API_KEY') ?: $env['OPENWEATHER_API_KEY'];
?>
<div class="row text-center">
    <a href="cidades.php"><h2 class="mb-4">Lista de Cidades</h2></a>
</div>

<button type="button" class="btn btn-success mb-3 btn-add" data-bs-toggle="modal" data-bs-target="#modalAdicionarCidade"><i class="bi bi-database-add" style="font-size: 2rem;"></i> Adicionar Cidade</button>

<div class="col-md-6 mb-3">
    <form method="GET" class="d-flex" role="search">
        <input class="form-control me-2" type="search" name="search" placeholder="Pesquisar cidade..." aria-label="Search" value="<?= isset($_GET['search']) ? htmlspecialchars($_GET['search']) : '' ?>">
        <button class="btn btn-outline-success" type="submit"><i class="bi bi-search" style="width: 1.5rem; height: 1.5rem;"></i></button>
    </form>
</div>

<script src="./js/cidades.js"></script>

<table class="table table-striped table-hover table-dark table-bordered align-middle">
    <thead class="table-dark text-center">
        <tr>
            <th>
                <h3>Nome</h3>
            </th>
            <th>
                <h3>População</h3>
            </th>
            <th>
                <h3>País</h3>
            </th>
            <th>
                <h3>Ações</h3>
            </th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($cidades as $cidade): ?>
            <tr>
                <td class="text-center"><?php echo $cidade['nome']; ?></td>
                <td class="text-center"><?php echo $cidade['populacao']; ?></td>
                <td class="text-center"><?php echo $cidade['nome_pais'] ?></td>
                <td class="text-center">
                    <div class="col-sm-12 d-flex justify-content-center flex-wrap">
                        <div class="col-sm-4 justify-content-center flex-wrap">
                            <button type="button" class="btn btn-primary btn-weather btn-sm text-white" data-nome="<?= $cidade['nome'] ?>" data-key="<?= $API_KEY ?>" data-bs-toggle="modal" data-bs-target="#modalWeatherCidade">info <i class="bi bi-info-circle" style="font-size: 1rem;"></i></button>
                        </div>
                        <div class="col-sm-6 justify-content-center flex-wrap">
                            <button type="button"
                                class="btn btn-warning btn-sm btn-edit text-white"
                                data-id="<?= $cidade['id'] ?>"
                                data-nome="<?= $cidade['nome'] ?>"
                                data-pais="<?= $cidade['id_pais'] ?>"
                                data-populacao="<?= $cidade['populacao'] ?>"
                                data-bs-toggle="modal"
                                data-bs-target="#modalEditarCidade">
                                <i class="bi bi-pencil-square" style="font-size: 1rem; color: white"></i> Editar
                            </button>
                            <button type="button" class="btn btn-danger btn-sm btn-delete" data-id="<?= $cidade['id'] ?>" data-bs-toggle="modal" data-bs-target="#modalExcluirCidade"><i class="bi bi-trash3" style="font-size: 1rem;"></i> Excluir</button>
                        </div>
                    </div>
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
                            <a href="?page=<?= $page - 1; ?>&search=<?= $search; ?>" class="page-link <?php if ($page <= 1) echo "disabled" ?>"><i class="bi bi-caret-left"></i> Anterior</a>
                        </li>
                        <li class="page-item active">
                            <span class="page-link"><?= $page ?></span>
                        </li>
                        <li class="page-item">
                            <a href="?page=<?= $page + 1 ?>&search=<?= $search; ?>" class="page-link <?php if(!$temProximaPagina) echo "disabled" ?>">Próxima <i class="bi bi-caret-right"></i></a>
                        </li>
                    </ul>
                    <form method="GET" class="d-inline-flex align-items-center" style="gap: 8px;">
                        <label for="pageInput" class="form-label mb-0">Ir para página:</label>
                        <input type="number" min="1" max="<?= $totalPaginas ?>" name="page" id="pageInput" class="form-control form-control-sm" style="width: 80px;" value="<?= $page ?>">
                        <input type="hidden" name="search" value="<?= htmlspecialchars($search) ?>">
                        <button type="submit" class="btn btn-primary btn-sm"><i class="bi bi-arrow-return-right" style="font-size: 1rem"></i></button>
                    </form>
                </nav>
            </td>
        </tr>
    </tfoot>
</table>

<div class="toast-container position-fixed top-0 end-0 p-3" id="toast-container" style="z-index: 9999;"></div>
<?php include __DIR__ . '/views/footer.php'; ?>