<?php
    $title = "Cidades";
    include __DIR__ . '/views/header.php';

    require_once __DIR__ . '/src/controllers/CidadeController.php';
    $controller = new CidadeController();
    $cidades = $controller->listarCidades();

    include __DIR__ . '/modals/addCidadeModal.php';
    include __DIR__ . '/modals/editCidadeModal.php';
    include __DIR__ . '/modals/deleteCidadeModal.php';

    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    $limit = 20;
    $offset = ($page - 1) * $limit;
?>

<h2 class="mb-4">Lista de Cidades</h2>

<button type="button" class="btn btn-success mb-3 btn-add" data-bs-toggle="modal" data-bs-target="#modalAdicionarCidade">+ Adicionar Cidade</button>

<table class="table table-striped table-hover table-dark table-bordered align-middle">
    <thead class="table-dark text-center">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>População</th>
            <th>País</th>
            <th>Ações</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($cidades as $cidade): ?>
            <tr>
                <td><?php echo $cidade['id']; ?></td>
                <td><?php echo $cidade['nome']; ?></td>
                <td><?php echo $cidade['populacao']; ?></td>
                <td><?php echo $cidade['nome_pais'] ?>
                </td>
                <td class="text-center">
                    <button type="button"
                        class="btn btn-warning btn-sm btn-edit"
                        data-id="<?= $cidade['id'] ?>"
                        data-nome="<?= $cidade['nome'] ?>"
                        data-pais="<?= $cidade['id_pais'] ?>"
                        data-populacao="<?= $cidade['populacao'] ?>"
                        data-bs-toggle="modal"
                        data-bs-target="#modalEditarCidade"
                    >
                        Editar
                    </button>
                    <button type="button" class="btn btn-danger btn-sm btn-delete" data-id="<?= $cidade['id'] ?>" data-bs-toggle="modal" data-bs-target="#modalExcluirCidade">Excluir</button>
                </td>
            </tr>
        <?php endforeach; ?>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="5" class="text-center">
                <nav aria-label="Pagination">
                    <ul class="pagination justify-content-center">
                        <?php if($page > 1): ?>
                            <li class="page-item">
                                <a href="?page=<?= $page - 1; ?>" class="page-link">Anterior</a>
                            </li>
                        <?php endif; ?>
                        <li class="page-item active">
                            <span class="page-link"><?= $page ?></span>
                        </li>
                        <?php if(count($cidades) == $limit): ?>
                            <li class="page-item">
                                <a href="?page=<?= $page + 1 ?>" class="page-link">Próxima</a>
                            </li>
                        <?php endif; ?>
                    </ul>
                </nav>
            </td>
        </tr>
    </tfoot>
</table>

<div class="toast-container position-fixed top-0 end-0 p-3" id="toast-container" style="z-index: 9999;"></div>
<?php include __DIR__ . '/views/footer.php'; ?>