const prev = document.getElementById('btn__prev'), //Получаем кнопку "Назад"
next = document.getElementById('btn__next'), //Получаем кнопку "Вперёд"
slides = document.querySelectorAll('.portfolio__slide'), //Получаем фотографии в слайдере
dots = document.querySelectorAll('.portfolio__dot') //Получаем навигационные точки под слайдером

let index = 0; //Индекс элемента по умолчанию

// 4а. Функция пробегает по псевдо-массиву и удаляет класс 'active' у всех слайдов,
//а затем добавляет класс 'active' слайду по текущему индексу
const activeSlide = n => {
    for(i of slides) {
        i.classList.remove('active');
    }
    slides[n].classList.add('active');
}

// 4б. Функция пробегает по псевдо-массиву и удаляет класс 'active' у всех точек,
//а затем добавляет класс 'active' точке по текущему индексу
const activeDot = n => {
    for(i of dots) {
        i.classList.remove('active');
    }
    dots[n].classList.add('active');
}

// 3. Функция активирует функции отвечающие за изменение активного слайда и активной навигационной точки
const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

// 2а. Функция проверяет, является ли слайд последним по текущему индексу. Если да, то пролистывание вперёд начинается с самого начала
const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
     } else {
        index++;
        prepareCurrentSlide(index);
     }
}

// 2б. Функция проверяет, является ли слайд первым. Если да, то пролистывание назад начинается с самого конца
const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
     } else {
        index--;
        prepareCurrentSlide(index);
     }
}

// 5. Функция переключает слайдер при нажатии на произвольную навигационную точку
dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

// 1. Обработчики событий срабатывают при нажатии на соответствующую кнопку
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);