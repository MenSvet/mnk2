const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

function updateSlider() {
    const offset = -currentIndex * 100; // Переключаем по 100% ширины изображения
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 10000); // Меняем изображение каждые 3 секунды
