// ====== ВАЛИДАЦИЯ ФОРМЫ ======
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const contactInput = document.getElementById('contact');
const nameError = document.getElementById('nameError');
const contactError = document.getElementById('contactError');
const successMsg = document.getElementById('formSuccess');

// Очистка ошибок при вводе
nameInput.addEventListener('input', () => {
    nameInput.classList.remove('invalid');
    nameError.textContent = '';
});

contactInput.addEventListener('input', () => {
    contactInput.classList.remove('invalid');
    contactError.textContent = '';
});

// Обработка отправки
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    // Проверка имени
    const name = nameInput.value.trim();
    if (name.length < 2) {
        nameInput.classList.add('invalid');
        nameError.textContent = 'Введите имя (минимум 2 символа)';
        isValid = false;
    }

    // Проверка контакта
    const contact = contactInput.value.trim();
    if (contact.length < 5) {
        contactInput.classList.add('invalid');
        contactError.textContent = 'Введите Telegram или телефон';
        isValid = false;
    }

    if (!isValid) return;

    // Успешная отправка
    successMsg.classList.add('show');
    form.reset();

    // Через 3 секунды прячем сообщение
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 3000);
});

// ====== ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ ======
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
