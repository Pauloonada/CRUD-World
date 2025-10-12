document.addEventListener('DOMContentLoaded', () => {
    // Editar país
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            const nome_oficial = btn.dataset.nome;
            const continente = btn.dataset.continente;
            const populacao = Number(btn.dataset.populacao);
            const idioma_principal = btn.dataset.idioma;

            document.querySelector('#edit_id').value = id;
            document.querySelector('#edit_nome').value = nome_oficial;
            document.querySelector('#edit_continente').value = continente;
            document.querySelector('#edit_populacao').value = populacao;
            document.querySelector('#edit_idioma').value = idioma_principal;

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
});
