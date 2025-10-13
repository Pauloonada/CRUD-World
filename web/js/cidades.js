document.addEventListener('DOMContentLoaded', () => {
    // Editar cidade
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            const nome = btn.dataset.nome;
            const pais = btn.dataset.pais;
            const populacao = Number(btn.dataset.populacao);
            document.querySelector('#edit_id').value = id;
            document.querySelector('#edit_nome').value = nome;
            document.querySelector('#edit_pais').value = pais;
            document.querySelector('#edit_populacao').value = populacao;

            const modalEl = document.getElementById('modalEditarCidade');
            bootstrap.Modal.getOrCreateInstance(modalEl).show();
        });
    });

    // Excluir cidade
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            console.log(id);

            document.querySelector('#delete_id').value = id;

            const modalEl = document.getElementById('modalExcluirCidade');
            bootstrap.Modal.getOrCreateInstance(modalEl).show();
        });
    });

    // Weather cidade
    document.querySelectorAll('.btn-weather').forEach(btn => {
        btn.addEventListener('click', async() => {
            const nome = btn.dataset.nome;
            const api_url = btn.dataset.api;

            // Requesição para o backend
            try{
                const response = await fetch(`${api_url}/weather?cidade=${nome}`);
                if(!response.ok) throw new Error('Erro ao buscar dados da cidade');

                const data = await response.json();

                // Preenchendo o modal
                document.querySelector('#modalWeatherCidadeLabel').textContent = `Clima em ${nome}` || 'Clima na cidade';
                document.querySelector('#info_descricao').textContent = data.descricao || 'N/A';
                document.querySelector('#info_temperatura').textContent = data.temperatura || 'N/A';
                document.querySelector('#info_vento').textContent = data.vento || 'N/A';
                document.querySelector('#info_umidade').textContent = data.umidade || 'N/A';
                document.querySelector('#info_icone').src = data.icone || '';

                const modalEl = document.getElementById('modalWeatherCidade');
                bootstrap.Modal.getOrCreateInstance(modalEl).show();
            } catch(error){
                console.error('Erro: ', error);
                showToast('Erro ao buscar dados do país:  ' + error, 'danger');
            }
        });
    });
});
