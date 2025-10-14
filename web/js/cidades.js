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
            const API_KEY = btn.dataset.key;

            // Requesição para o backend
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(nome)}&units=metric&lang=pt_br&appid=${API_KEY}`);
                if(!response.ok) throw new Error('Erro ao buscar dados da cidade');

                const data = await response.json();

                // Preenchendo o modal
                document.querySelector('#modalWeatherCidadeLabel').textContent = `Clima em ${nome}` || 'Clima na cidade';
                document.querySelector('#info_descricao').textContent = data.weather?.[0]?.description || 'N/A';
                document.querySelector('#info_temperatura').textContent = `${data.main?.temp ?? 'N/A'} °C`;
                document.querySelector('#info_vento').textContent = `${data.wind?.speed ?? 'N/A'} m/s`;
                document.querySelector('#info_umidade').textContent = `${data.main?.humidity ?? 'N/A'}%`;
                document.querySelector('#info_icone').src = `https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}@2x.png` || '';

                const modalEl = document.getElementById('modalWeatherCidade');
                bootstrap.Modal.getOrCreateInstance(modalEl).show();
            } catch(error){
                console.error('Erro: ', error);
                showToast('Erro ao buscar dados do país:  ' + error, 'danger');
            }
        });
    });
});
