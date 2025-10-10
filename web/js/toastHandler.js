document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');

    if(status === 'success'){
        showToast('Operação realizada com sucesso!', 'success');
    }

    else if(status === 'error'){
        showToast('Ocorreu um erro ao realizar a operação.', 'danger');
    }

    else if(status === 'deleted'){
        showToast('Dado excluído com sucesso!', 'warning');
    }

    // Limpa o parâmetro da URL
    if(status){
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});