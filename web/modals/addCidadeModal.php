<div class="modal fade" id="modalAdicionarCidade" tabindex="-1" aria-labelledby="modalAdicionarCidadeLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content bg-dark text-light">
            <div class="modal-header">
                <h5 class="modal-title" id="modalAdicionarCidadeLabel">Adicionar Nova Cidade</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <form id="formAddCidade" method="POST" action="./CidadeRequestHandler.php">
                <input type="hidden" name="action" value="add">
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome da Cidade</label>
                        <input type="text" name="nome" id="nome" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="pais" class="form-label">Continente</label>
                        <select name="id_pais" id="id_pais" class="form-select" required>
                            <?php 
                                require_once __DIR__ . '/../src/services/PaisService.php';
                                $paisService = new PaisService();
                                $paises = $paisService->getPaises();
                                foreach($paises as $pais){
                                    echo "<option value='{$pais['id']}'>" . $pais['nome_oficial'] . "</option>";
                                }
                            ?>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="populacao" class="form-label">População</label>
                        <input type="number" name="populacao" id="populacao" class="form-control" required step="5" min="100">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-success">Salvar</button>
                </div>
            </form>
        </div>
    </div>
</div>