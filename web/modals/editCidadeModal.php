<div class="modal fade" id="modalEditarCidade" tabindex="-1" aria-labelledby="modalEditarCidadeLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content bg-dark text-light">
            <div class="modal-header">
                <h5 class="modal-title" id="modalEditarCidadeLabel">Editar Cidade</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <form id="formEditarCidade" method="POST" action="./CidadeRequestHandler.php">
                <input type="hidden" name="action" value="edit">
                <input type="hidden" id="edit_id" name="id">
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="edit_nome" class="form-label">Nome</label>
                        <input type="text" name="nome" id="edit_nome" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="edit_populacao" class="form-label">População</label>
                        <input type="number" name="populacao" id="edit_populacao" class="form-control" required step="5" min="100">
                    </div>
                    <div class="mb-3">
                        <label for="edit_pais" class="form-label">País</label>
                        <select name="id_pais" id="edit_pais" class="form-select">
                            <?php 
                                require_once __DIR__ . '/../src/services/PaisService.php';
                                $paisService = new PaisService();
                                $paises = $paisService->getPaises();
                                foreach($paises as $pais){
                                    echo "<option value='{$pais['id']}' class='form-control'>" . $pais['nome_oficial'] . "</option>";
                                }
                            ?>
                        </select> 
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-warning">Salvar Alterações</button>
                </div>
            </form>
        </div>
    </div>
</div>