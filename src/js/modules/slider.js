
// slider cards (team section)
function sliderCards(prevSelector, nextSelector, inner) {
    const prev = document.querySelector(prevSelector),
        next = document.querySelector(nextSelector),
        slideInner = document.querySelector(inner);

    let offset = 0;
    slideInner.style.transition = '0.5s all';

    next.addEventListener('click', () => {
        offset = offset + 315;
        if (offset > 1260) {
            offset = 0;
        }
        slideInner.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        offset = offset - 315;
        if (offset < 0) {
            offset = 1260;
        }
        slideInner.style.transform = `translateX(-${offset}px)`;
    });
}

// slider testimonials
function sliderTestrimonials() {
    const inner = document.querySelector('.testimonials-inner'),
        prev = document.querySelector('.testimonials-prev'),
        next = document.querySelector('.testimonials-next'),
        firstDot = document.querySelector('#first'),
        secondDot = document.querySelector('#second');

    let offset = 0;
    let indexDots = 0;
    inner.style.transition = '0.5s all';

    next.addEventListener('click', () => {
        offset = offset + 1020;
        firstDot.classList.remove('testimonials-dots-active');
        secondDot.classList.add('testimonials-dots-active');
        if (offset > 1020) {
            offset = 0;
            firstDot.classList.add('testimonials-dots-active');
            secondDot.classList.remove('testimonials-dots-active');
        }
        inner.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        offset = offset - 1020;
        firstDot.classList.add('testimonials-dots-active');
        secondDot.classList.remove('testimonials-dots-active');
        if (offset < 0) {
            offset = 1020;
            firstDot.classList.remove('testimonials-dots-active');
            secondDot.classList.add('testimonials-dots-active');
        }
        inner.style.transform = `translateX(-${offset}px)`;
    });
}

export {sliderCards, sliderTestrimonials};