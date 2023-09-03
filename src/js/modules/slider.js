
// slider cards (team section)
function sliderCards(prevSelector, nextSelector, inner) {
    try {
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
    } catch (e) {
        console.log(e.name);
    }
}

// slider testimonials
function sliderTestimonials(innerSelector, prevSelector, nextSelector, firstDotSelector, secondDotSelector) {
    try {
        const inner = document.querySelector(innerSelector),
            prev = document.querySelector(prevSelector),
            next = document.querySelector(nextSelector),
            firstDot = document.querySelector(firstDotSelector),
            secondDot = document.querySelector(secondDotSelector);

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
    } catch (e) {
        console.log(e.name);
    }


}

export {sliderCards, sliderTestimonials};