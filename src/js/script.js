"use strict";
import forms from './modules/forms';
import dropDown from './modules/dropdown';
import modal from './modules/modal';
import navbar from './modules/navbar';
import {sliderCards, sliderTestrimonials} from "./modules/slider";
import {tabBenefits, tabsCourses} from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {
    forms();
    dropDown();
    modal();
    navbar();
    sliderCards('.team__slider-prev', '.team__slider-next', '.team__slider-inner');
    sliderTestrimonials();
    tabBenefits('.tab__item', '.tabitems', '.tab__content');
    tabsCourses();
});

