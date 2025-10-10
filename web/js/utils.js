function showToast(message, type = 'success'){
    const toastContainer = document.getElementById('toast-container');
    const toastEl = document.createElement('div');

    let bgClass, icon;
    switch(type){
        case 'success':
            bgClass = 'bg-success text-white';
            icon = '✅';
            break;
        case 'danger':
            bgClass = 'bg-danger text-white';
            icon = '❌';
            break;
        case 'warning':
            bgClass = 'bg-warning text-dark';
            icon = '⚠️';
            break;
        default:
            bgClass = 'bg-secondary text-white';
            icon = '💬';
    }
    toastEl.className = `toast align-items-center ${bgClass} border-0 shadow mb-2`;
    toastEl.role = 'alert';
    toastEl.ariaLive = 'assertive';
    toastEl.ariaAtomic = 'true';
    toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <strong>${icon}</strong> ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;

    toastContainer.appendChild(toastEl);

    // Inicializando e mostando o toast
    const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    toast.show();

    // Removenndo do DOM após esconder
    toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
}