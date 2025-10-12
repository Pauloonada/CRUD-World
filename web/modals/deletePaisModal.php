<div class="modal fade" id="modalExcluirPais" tabindex="-1" aria-labelledby="modalExcluirPaisLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark text-light border-danger border-3">
            <div class="modal-header bg-dange text-white">
                <h5 class="modal-title" id="modalExecluirPaisLabel">⚠️ EXCLUSÃO DE PAÍS ⚠️</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <form id="formDeletePais" method="POST" action="./PaisRequestHandler.php">
                <input type="hidden" name="action" value="delete">
                <input type="hidden" name="id" id="delete_id">
                <div class="modal-body text-center">
                    <h4 class="text-danger fw-bold">Você está prestes a EXCLUIR o país <span id="nomePais"></span>!</h4>
                    <p class="mt-3 fs-5">
                        Isso também irá <strong>EXCLUIR TODAS AS CIDADES ASSOCIADAS A ELE</strong>.
                        <br><br>
                        Essa ação é <u><bold>IRREVERSÍVEL</bold></u>. Deseja continuar?
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-danger fw-bold">Excluir</button>
                </div>
            </form>
        </div>
    </div>
</div>