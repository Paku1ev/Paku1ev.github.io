const prev = document.getElementById('btn__prev'), //Получаем кнопку "Назад"
next = document.getElementById('btn__next'), //Получаем кнопку "Вперёд"
slides = document.querySelectorAll('.portfolio__slide'), //Получаем фотографии в слайдере
dots = document.querySelectorAll('.portfolio__dot'), //Получаем навигационные точки под слайдером
portfolioSlider = document.querySelectorAll('.portfolio__slider'); //Получаем контейнер слайдера (Стоит ли исп. &All ???)

let index = 0;

const activeSlide = n => {
    for(i of slides) {
        i.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
     } else {
        index++;
        activeSlide(index);
     }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        activeSlide(index);
     } else {
        index--;
        activeSlide(index);
     }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);