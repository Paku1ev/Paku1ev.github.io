let headerBar = document.querySelector('.header__bar'),
button = document.querySelector('#header__bar_button'),
overlay = document.querySelector('.header__bar_background');

button.addEventListener('click', activationMenu);
overlay.addEventListener('click', activationMenu);

function activationMenu() {
    /*
    Проверяем, если у выпадающего меню есть класс *active, то этот класс надо удалить.
    Если этого класса нет, то нужно его добавить.
    */
    if (headerBar.classList.contains('header__bar_active')) {
        headerBar.classList.remove('header__bar_active');
    } else {
        headerBar.classList.add('header__bar_active');
    }
}