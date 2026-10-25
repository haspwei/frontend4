// Завдання 1

// Елемент №1 (заголовок h1) знаходимо через getElementById.
// При кліку додаємо клас з кольорами з style.css, при повторному кліку прибираємо його
var first = document.getElementById('first');
first.onclick = function () {
    first.classList.toggle('changed-by-id');
};

// Наступний елемент (заголовок h2) знаходимо через querySelector
var next = document.querySelector('h2');
next.onclick = function () {
    next.classList.toggle('changed-by-query');
};

// Завдання 2

var images = document.getElementById('images');

// Повертає останнє зображення в блоці #images (або undefined, якщо зображень немає).
// З ним працюють кнопки "Збільшити", "Зменшити" і "Видалити"
function lastImage() {
    var list = images.getElementsByTagName('img');
    return list[list.length - 1];
}

// Додати: створює ще одне таке саме фото (з тим самим src і alt) і ставить його в кінець блоку
document.getElementById('btn-add').onclick = function () {
    var img = document.createElement('img');
    img.src = 'odesa.jpeg';
    img.alt = 'Фото Одеси';
    images.appendChild(img);
};

// Збільшити: ширина останнього фото на 10% більша
document.getElementById('btn-increase').onclick = function () {
    var img = lastImage();
    if (img) {
        img.width = img.width * 1.1;
    }
};

// Зменшити: ширина останнього фото на 10% менша
document.getElementById('btn-decrease').onclick = function () {
    var img = lastImage();
    if (img) {
        img.width = img.width * 0.9;
    }
};

// Видалити: прибирає останнє фото. Спочатку це додані копії, а коли вони
// закінчилися, видаляється початкове фото. Перевірка if потрібна, щоб після
// видалення всіх фото повторне натискання не давало помилку
document.getElementById('btn-delete').onclick = function () {
    var img = lastImage();
    if (img) {
        img.remove();
    }
};