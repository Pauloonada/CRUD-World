<div class="modal fade" id="modalWeatherCidade" tabindex="-1" aria-labelledby="modalWeatherCidadeLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content bg-dark text-light">
            <div class="modal-header">
                <h5 class="modal-title" id="modalWeatherCidadeLabel">Clima na cidade</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>

            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row mb-3">
                        <div class="col-md-4">
                            <strong>Descrição:</strong>
                            <p id="info_descricao">N/A</p>
                        </div>
                        <div class="col-md-4">
                            <strong>Temperatura:</strong>
                            <p id="info_temperatura">N/A</p>
                        </div>
                        <div class="col-md-4">
                            <strong>Vento:</strong>
                            <p id="info_vento">N/A</p>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-6">
                            <strong>Umidade:</strong>
                            <p id="info_umidade">N/A</p>
                        </div>
                        <div class="col-md-6 text-center">
                            <img id="info_icone" src="" alt="Weather Icon" class="img-fluid rounded" style="max-height: 120px;">
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
