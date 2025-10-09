document.addEventListener('DOMContentLoaded', () => {
    // Editar país
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const nome = btn.dataset.nome;
            const continente = btn.dataset.continente;
            const populacao = btn.dataset.populacao;
            const idioma = btn.dataset.idioma;

            document.querySelector('#edit_id').value = id;
            document.querySelector('#edit_nome').value = nome;
            document.querySelector('#edit_continente').value = continente;
            document.querySelector('#edit_populacao').value = populacao;
            document.querySelector('#edit_idioma').value = idioma;

            const modalEl = document.getElementById('modalEditarPais');
            bootstrap.Modal.getOrCreateInstance(modalEl).show();
        });
    });

    // Excluir país
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            document.querySelector('#delete_id').value = id;

            const modalEl = document.getElementById('modalExcluirPais');
            bootstrap.Modal.getOrCreateInstance(modalEl).show();
        });
    });
});
