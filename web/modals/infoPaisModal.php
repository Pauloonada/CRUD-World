<div class="modal fade" id="modalInfoPais" tabindex="-1" aria-labelledby="modalInfoPaisLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content bg-dark text-light">
            <div class="modal-header">
                <h5 class="modal-title" id="modalInfoPaisLabel">Informações do País</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>

            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <strong>Nome Oficial:</strong>
                            <p id="info_nome">N/A</p>
                        </div>
                        <div class="col-md-6">
                            <strong>Capital:</strong>
                            <p id="info_capital">N/A</p>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-6">
                            <strong>Moeda:</strong>
                            <p id="info_moeda">N/A</p>
                        </div>
                        <div class="col-md-6 text-center">
                            <strong>Bandeira:</strong>
                            <br>
                            <img id="info_bandeira" src="" alt="Bandeira do país" class="img-fluid rounded" style="max-height: 120px;">
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
