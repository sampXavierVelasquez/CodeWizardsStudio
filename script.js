let registeredUsers = [];
let currentUser = null;

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
        currentUser = user;
        closeModal('loginModal');
        // Здесь можно добавить логику для перехода на страницу профиля или что-то подобное
    } else {
        alert('Неверное имя пользователя или пароль!');
    }
});

document.getElementById('newTopicForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!currentUser) {
        alert('Вам нужно войти в систему, чтобы создать тему.');
        return;
    }

    const title = document.getElementById('topicTitle').value;
    const content = document.getElementById('topicContent').value;

    const topic = {
        title,
        content,
        author: currentUser.username,
        date: new Date().toLocaleString()
    };

    addTopic(topic);
    closeModal('newTopicModal');
});

function addTopic(topic) {
    const topicsDiv = document.getElementById('topics');
    const topicDiv = document.createElement('div');
    topicDiv.className = 'topic';
    topicDiv.innerHTML = `
        <h3>${topic.title}</h3>
        <p>${topic.content}</p>
        <small>Автор: ${topic.author} | Дата: ${topic.date}</small>
    `;
    topicsDiv.appendChild(topicDiv);
}
