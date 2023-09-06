"use strict";
import {formsSub, formPromo} from './modules/forms';
import dropDown from './modules/dropdown';
import modal from './modules/modal';
import {scrollNavbar, eventPageView} from './modules/navbar';
import {sliderCards, sliderTestimonials, miniCards, miniGridCards} from "./modules/slider";
import {tabBenefits, tabsCourses} from './modules/tabs';
import timer from './modules/timer';
import {toggleLesson} from './modules/lesson';


document.addEventListener('DOMContentLoaded', () => {
    formsSub('.subscribe__form');
    formPromo('.promo__form');
    formPromo('.reg__form');
    formPromo('.speaker-promo__form')
    dropDown();
    modal();
    scrollNavbar();
    eventPageView();
    sliderCards('.team__slider-prev', '.team__slider-next', '.team__slider-inner');
    sliderTestimonials('.testimonials-inner', '.testimonials-prev', '.testimonials-next', '#first', '#second');
    miniCards('.related-slide__inner', '.slider-prev', '.slider-next');
    miniGridCards('.events__inner', '.slider-prev', '.slider-next');
    tabBenefits('.tab__item', '.tabitems', '.tab__content');
    tabsCourses();
    timer();
    toggleLesson();
});

