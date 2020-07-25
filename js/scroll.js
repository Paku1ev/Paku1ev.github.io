const btnPortfolio = document.querySelector('.cover__buttons__btn-2'),
portfolio = document.querySelector('.portfolio'),
btnForm = document.querySelector('.cover__buttons__btn-1'),
form = document.querySelector('.form'),
btnCustomers = document.querySelector('#nav-link-customers'),
customers = document.querySelector('.customers');

scrollToDiv(btnCustomers, customers);
scrollToDiv(btnPortfolio, portfolio);
scrollToDiv(btnForm, form);

function scrollToDiv(btn, div) {

    const scrollTo = elem => {
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    });
    }

    btn.addEventListener('click', () => {
    scrollTo(div);
});
}