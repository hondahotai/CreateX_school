"use strict";
import {formsSub, formPromo} from './modules/forms';
import dropDown from './modules/dropdown';
import modal from './modules/modal';
import navbar from './modules/navbar';
import {sliderCards, sliderTestimonials} from "./modules/slider";
import {tabBenefits, tabsCourses} from './modules/tabs';
import timer from './modules/timer';
import {toggleLesson} from './modules/lesson';


window.addEventListener('DOMContentLoaded', () => {
    formsSub('.subscribe__form');
    formPromo('.promo__form');
    dropDown();
    modal();
    navbar();
    sliderCards('.team__slider-prev', '.team__slider-next', '.team__slider-inner');
    sliderTestimonials('.testimonials-inner', '.testimonials-prev', '.testimonials-next', '#first', '#second');
    tabBenefits('.tab__item', '.tabitems', '.tab__content');
    tabsCourses();
    timer();
    toggleLesson();
});

