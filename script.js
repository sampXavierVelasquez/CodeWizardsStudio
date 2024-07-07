function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    const registerModal = document.getElementById('registerModal');
    const loginModal = document.getElementById('loginModal');

    if (event.target === registerModal) {
        registerModal.style.display = "none";
    }

    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
}
