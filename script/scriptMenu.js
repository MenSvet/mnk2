// Функция переключения меню (например, для мобильной навигации)
function toggleMenu() {
    // Находим элемент с классом 'navbar'
    const navbar = document.querySelector('.navbar');
    
    // Переключаем класс 'active' у элемента 'navbar'.
    // Если класс уже есть, он удалится; если его нет, он добавится.
    navbar.classList.toggle('active');
}