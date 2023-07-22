const swiper = new Swiper('.swiper', {
    speed: 400,

    spaceBetween: 100,
    autoplay: {
        delay: 5000
    },
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    parallax: true,

    pagination: {
        el: '.swiper-pagination'
    },

    navigation: {
        nextEl: '.swiper-button-next'
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 40
        }
    }
});

const burger = () => {
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
};

burger();

const dropdownMenu = () => {
    const sections = document.querySelectorAll('.section');
    const header = document.querySelector('.header-right');
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    const popover = document.querySelector('.popover');
    const content = document.querySelector('.content');
    const arrow = document.querySelector('.arrow');
    const background = document.querySelector('.background');

    const dimensions = {
        products: { width: 405, height: 380, x: 0 },
        developers: { width: 390, height: 266, x: 100 },
        company: { width: 260, height: 296, x: 200 }
    };

    const popoverLeft = popover.getBoundingClientRect().x;

    dropdownLinks.forEach((navLink) => {
        let section = navLink.getAttribute('data-nav');
        let rect = navLink.getBoundingClientRect();
        dimensions[section].arrowX = rect.left + rect.width / 2 - popoverLeft;
    });

    arrow.style.transform = `
  translateX(${dimensions.products.arrowX}px)
  rotate(45deg)`;

    function showSection(section) {
        popover.classList.add('open');
        sections.forEach((el) => el.classList.remove('active'));
        document.querySelector(`.section-${section}`).classList.add('active');

        arrow.style.transform = `
    translateX(${dimensions[section].arrowX}px)
    rotate(45deg)`;

        background.style.transform = `
    translateX(${dimensions[section].x}px)
    scaleX(${dimensions[section].width / dimensions['products'].width})
    scaleY(${dimensions[section].height / dimensions['products'].height})
  `;

        content.style.width = dimensions[section].width + 'px';
        content.style.height = dimensions[section].height + 'px';

        content.style.transform = `translateX(${dimensions[section].x}px)`;
    }

    dropdownLinks.forEach((navLink) => {
        navLink.addEventListener('mouseenter', (event) => {
            let targetPopover = event.target.getAttribute('data-nav');
            showSection(targetPopover);
        });
    });

    header.addEventListener('mouseleave', () => {
        popover.classList.remove('open');
        sections.forEach((el) => el.classList.remove('active'));
    });
};

dropdownMenu();

const changeMonth = () => {
    const items = document.querySelectorAll('.news-item-date span');

    const MOBILE_BREAKPOINT = 476;

    if (!window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches) return;

    items.forEach((item) => {
        const text = item.textContent;
        item.textContent = text?.slice(0, 3);
    });
};

changeMonth();
