<div class="modal fade" id="modalAdicionarPais" tabindex="-1" aria-labelledby="modalAdicionarPaisLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content bg-dark text-light">
            <div class="modal-header">
                <h5 class="modal-title" id="modalAdicionarPaisLabel">Adicionar Novo País</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <form id="formAddPais" method="POST" action="./PaisRequestHandler.php">
                <input type="hidden" name="action" value="add">
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="nome_oficial" class="form-label">Nome Oficial</label>
                        <input type="text" name="nome_oficial" id="nome_oficial" class="form-control" required placeholder="Nome do país">
                    </div>
                    <div class="mb-3">
                        <label for="codigo_iso" class="form-label">Código ISO (2 Dígitos)</label>
                        <input type="text" onkeydown="return /[a-zA-Z]/i.test(event.key)" name="codigo_iso" id="codigo_iso" class="form-control" required placeholder="Exemplo: BR" maxlength="2">
                    </div>
                    <div class="mb-3">
                        <label for="continente" class="form-label">Continente</label>
                        <select name="continente" id="continente" class="form-select" required>
                            <option value="" disabled selected>--SELECIONE UMA OPÇÃO--</option>
                            <option value="África" class="form-control">África</option>
                            <option value="Américas" class="form-control">Américas</option>
                            <option value="Ásia" class="form-control">Ásia</option>
                            <option value="Europa" class="form-control">Europa</option>
                            <option value="Oceania" class="form-control">Ocenia</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="populacao" class="form-label">População</label>
                        <input type="number" name="populacao" id="populacao" class="form-control" required step="10" min="1000">
                    </div>
                    <div class="mb-3">
                        <label for="idioma_principal" class="form-label">Idioma Principal</label>
                        <input type="text" name="idioma_principal" id="idioma_principal" class="form-control" required placeholder="Principal idioma falado">
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