<div class="modal fade" id="modalEditarPais" tabindex="-1" aria-labelledby="modalEditarPaisLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content bg-dark text-light">
            <div class="modal-header">
                <h5 class="modal-title" id="modalEditarPaisLabel">Editar País</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <form id="formEditarPais" method="POST" action="./PaisRequestHandler.php">
                <input type="hidden" name="action" value="edit">
                <input type="hidden" id="edit_id" name="id">
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="edit_nome" class="form-label">Nome Oficial</label>
                        <input type="text" name="nome_oficial" id="edit_nome" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="edit_continente" class="form-label">Continente</label>
                        <select name="continente" id="edit_continente" class="form-select" required>
                            <option value="" disabled selected>--SELECIONE UMA OPÇÃO--</option>
                            <option value="África" class="form-control">África</option>
                            <option value="Américas" class="form-control">Américas</option>
                            <option value="Ásia" class="form-control">Ásia</option>
                            <option value="Europa" class="form-control">Europa</option>
                            <option value="Oceania" class="form-control">Ocenia</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="edit_populacao" class="form-label">População</label>
                        <input type="number" name="populacao" id="edit_populacao" class="form-control" required step="10" min="1000">
                    </div>
                    <div class="mb-3">
                        <label for="edit_idioma" class="form-label">Idioma Principal</label>
                        <input type="text" name="idioma_principal" id="edit_idioma" class="form-control" required>
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