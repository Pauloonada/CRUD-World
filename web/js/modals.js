document.addEventListener('DOMContentLoaded', () => {
    // Abre um modal genérico
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-bs-target');
            const modalEl = document.querySelector(modalId);
            if (modalEl) {
                const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
                modal.show();
            }
        });
    });

    // Fecha o modal
    document.querySelectorAll('.btn-cancel').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalEl = btn.closest('.modal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
        });
    });
});
