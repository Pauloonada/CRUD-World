document.addEventListener('DOMContentLoaded', () => {
    // Editar país
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            const nome_oficial = btn.dataset.nome;
            const continente = btn.dataset.continente;
            const populacao = Number(btn.dataset.populacao);
            const idioma_principal = btn.dataset.idioma;
            const codigo_iso = btn.dataset.codigo;

            document.querySelector('#edit_id').value = id;
            document.querySelector('#edit_nome').value = nome_oficial;
            document.querySelector('#edit_continente').value = continente;
            document.querySelector('#edit_populacao').value = populacao;
            document.querySelector('#edit_idioma').value = idioma_principal;
            document.querySelector('#edit_codigo').value = codigo_iso;

            const modalEl = document.getElementById('modalEditarPais');
            bootstrap.Modal.getOrCreateInstance(modalEl).show();
        });
    });

    // Excluir país
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            const nome = btn.dataset.nome;
            console.log(nome);

            document.querySelector('#nomePais').textContent = nome;
            document.querySelector('#delete_id').value = id;

            const modalEl = document.getElementById('modalExcluirPais');
            bootstrap.Modal.getOrCreateInstance(modalEl).show();
        });
    });

    // Info país
    document.querySelectorAll('#info').forEach(btn => {
        btn.addEventListener('click', async() => {
            const codigo_iso = btn.dataset.codigo;
            const api_url = btn.dataset.apiurl;

            // Requesição para o backend
            try{
                const response = await fetch(`${api_url}/restcountries/${codigo_iso}`);
                if(!response.ok) throw new Error('Erro ao buscar dados do país');

                const data = await response.json();

                // Preenchendo o modal
                document.querySelector('#info_nome').textContent = data.nome_oficial || 'N/A';
                document.querySelector('#info_capital').textContent = data.capital || 'N/A';
                document.querySelector('#info_moeda').textContent = data.moeda || 'N/A';
                document.querySelector('#info_bandeira').src = data.bandeira || '';

                const modalEl = document.getElementById('modalInfoPais');
                bootstrap.Modal.getOrCreateInstance(modalEl).show();
            } catch(error){
                console.error('Erro: ', error);
                showToast('Erro ao buscar dados do país', 'danger');
            }
        });
    });
});
