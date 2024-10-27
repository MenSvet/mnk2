// Получаем элементы модального окна и его содержимого
const modal = document.getElementById("modal2");
const modalImg = document.getElementById("modal2-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Получаем все изображения в галерее
const images = document.querySelectorAll(".gallery2-img");

// Добавляем событие клика на каждое изображение для открытия модалки
images.forEach((img) => {
    img.addEventListener("click", function () {
        modal.style.display = "block";  // Показываем модальное окно
        modalImg.src = this.src;        // Устанавливаем путь к изображению
        captionText.innerHTML = this.alt; // Устанавливаем текст подписи
    });
});

// Закрываем модальное окно при нажатии на крестик
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне изображения
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}