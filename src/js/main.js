// Custom scripts
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active-burger');
    body.classList.toggle('locked');
});

const BURGER_BREAKPOINT = 992;

window.addEventListener('resize', () => {
    if (window.innerWidth > BURGER_BREAKPOINT) {
        menu.classList.remove('active');
        burger.classList.remove('active-burger');
        body.classList.remove('locked');
    }
});

const headerItems = document.querySelectorAll('.header-right-item');

headerItems.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        console.log(e.target);
    });
});
