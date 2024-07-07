function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Закрытие модального окна при нажатии вне его
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}

// Простая регистрация и вход
const registeredUsers = [];

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Проверка на существование пользователя
    const userExists = registeredUsers.some(user => user.username === username);

    if (!userExists) {
        registeredUsers.push({ username, password });
        alert('Регистрация успешна!');
        closeModal('registerModal');
    } else {
        alert('Пользователь уже существует!');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Проверка на существование пользователя и правильность пароля
    const user = registeredUsers.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Вход успешен!');
        closeModal('loginModal');
        // Здесь можно добавить логику для перехода на страницу профиля или что-то подобное
    } else {
        alert('Неверное имя пользователя или пароль!');
    }
});
