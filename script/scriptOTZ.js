let currentPage = 0;
const pages = document.querySelectorAll('.OTZ_BLK_STR');
const totalPages = pages.length;
let autoScroll; // Переменная для автоматической прокрутки
let isScrolling = true; // Переменная для отслеживания состояния автопрокрутки

// Функция для отображения страницы по индексу
function showPage(index) {
    const offset = -index * 100; // Сдвиг влево на index * 100%
    document.querySelector('.OTZ_BLK').style.transform = `translateX(${offset}%)`;
}

// Функция для следующей страницы
function nextPage() {
    currentPage = (currentPage + 1) % totalPages;
    showPage(currentPage);
}

// Функция для предыдущей страницы
function prevPage() {
    currentPage = (currentPage - 1 + totalPages) % totalPages;
    showPage(currentPage);
}

// Функция запуска автоматического переключения страниц каждые 5 секунд
function startAutoScroll() {
    autoScroll = setInterval(nextPage, 5000); // Автоматическое переключение страниц
}

// Функция остановки автоматического переключения
function stopAutoScroll() {
    clearInterval(autoScroll); // Остановка автоматической прокрутки
}

// Функция переключения автопрокрутки
function toggleAutoScroll(button) {
    if (isScrolling) {
        stopAutoScroll();
        button.textContent = "Продолжить";
    } else {
        startAutoScroll();
        button.textContent = "Стоп";
    }
    isScrolling = !isScrolling;
}

// Автоматический запуск прокрутки при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    startAutoScroll();
});

