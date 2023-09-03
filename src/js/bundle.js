/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/dropdown.js":
/*!************************************!*\
  !*** ./src/js/modules/dropdown.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// dropdown navbar

function dropdownButton() {
    const dropdown = document.querySelectorAll('.dropdown');
    const dropdownIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289Z" fill="#1E212C"/>
</svg>`;


    dropdown.forEach((item, i) => {
        if (i === 0) {
            item.innerHTML = `<a href="#">Courses ${dropdownIcon}</a>
                        <div class="dropdown-menu">
                            <a href="courses.html">All courses</a>
                            <a href="course.html">Courses single</a>
                        </div>`;
        }
        if (i === 1) {
            item.innerHTML = `<a href="#">Events ${dropdownIcon}</a>
                        <div class="dropdown-menu">
                            <a href="events.html">Events list</a>
                            <a href="events.html">Events grid</a>
                            <a href="event.html">Event single</a>
                        </div>`;
        }
        if (i === 2) {
            item.innerHTML = `<a href="#">Blog ${dropdownIcon}</a>
                        <div class="dropdown-menu">
                            <a href="blogs.html">All blogs</a>
                            <a href="blog.html">Single post</a>
                        </div>`;
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropdownButton);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((module) => {

//forms

function forms () {
   try {
       document.querySelector('.subscribe__form').addEventListener('submit', function (e) {
           e.preventDefault();
           let form = e.target;

           form.classList.add('submited');
       });
   } catch (e) {
       console.log(e.name);
   }
}

module.exports = forms;


/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// modal
function modal() {
    const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal-backdrop'),
        modalCloseBtn = document.querySelectorAll('[data-close]'),
        modalSignUpBtn = document.querySelector('#sign-up'),
        modalSignInBtn = document.querySelector('#sign-in'),
        modalSignIn = document.querySelector('.modal__content_in'),
        modalSignUp = document.querySelector('.modal__content_up');

    function openModal () {
        modalTrigger.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hidden');
            modalSignIn.classList.add('show');
            modalSignIn.classList.remove('hide');
            modalSignUp.classList.remove('show');
            modalSignUp.classList.add('hide')
            document.body.style.overflow = 'hidden';
        });
    }
    openModal();


    function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('show');
        modalSignIn.classList.remove('show');
        modalSignIn.classList.add('hide')
        modalSignUp.classList.remove('show');
        modalSignUp.classList.add('hide')

        document.body.style.overflow = '';
    }

    modalCloseBtn.forEach(item => {
        item.addEventListener('click', closeModal);
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    })

    function changeWindowModal () {
        modalSignUpBtn.addEventListener('click', () => {
            modalSignIn.classList.remove('show');
            modalSignIn.classList.add('hide');
            modalSignUp.classList.add('show');
            modalSignUp.classList.remove('hide');
        });
        modalSignInBtn.addEventListener('click', () => {
            modalSignIn.classList.add('show');
            modalSignIn.classList.remove('hide');
            modalSignUp.classList.remove('show');
            modalSignUp.classList.add('hide');
        });
    }
    changeWindowModal();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/js/modules/navbar.js":
/*!**********************************!*\
  !*** ./src/js/modules/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// scrolled navbar
function scrollNavbar() {
    window.addEventListener('scroll', e => {
        let navbar = document.querySelector('#navbar').classList;
        let navbarBackground = document.querySelector('.navbar-large').classList;
        let active_class = "navbar_scrolled";

        if (pageYOffset > 400) {
            navbar.add(active_class);
            navbarBackground.add(active_class)
        } else {
            navbar.remove(active_class);
            navbarBackground.remove(active_class);
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollNavbar);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sliderCards: () => (/* binding */ sliderCards),
/* harmony export */   sliderTestimonials: () => (/* binding */ sliderTestimonials)
/* harmony export */ });

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



/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabBenefits: () => (/* binding */ tabBenefits),
/* harmony export */   tabsCourses: () => (/* binding */ tabsCourses)
/* harmony export */ });
// tab benefits

function tabBenefits(itemSelector, parentSelector, contentSelector) {
    try {
        const tabItem = document.querySelectorAll(itemSelector),
            tabParent = document.querySelector(parentSelector),
            tabContent = document.querySelectorAll(contentSelector);

        function hideTabContent () {
            tabContent.forEach(item => {
                item.classList.add('hidden');
                item.classList.remove('show');
            });

            tabItem.forEach(item => {
                item.classList.remove('tab__item_active');
            });
        }

        function showTabContent (i = 0) {
            tabContent[i].classList.add('show');
            tabContent[i].classList.remove('hidden');
            tabItem[i].classList.add('tab__item_active');
        }
        hideTabContent();
        showTabContent();

        tabParent.addEventListener('click', (e) => {
            let target = e.target;

            if (target && target.classList.contains('tab__item')) {
                tabItem.forEach((item, i) => {
                    if (target === item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    } catch (e) {
        console.log(e.name);
    }
}


//tabs (courses page)
function tabsCourses() {
   try {
       const tabsParent = document.querySelector('.courses-tabs'),
           tabsItems = document.querySelectorAll('.courses-tab__item'),
           tabsContent = document.querySelectorAll('.card-item');
       let tabTextContent = 'All';

       tabsParent.addEventListener('click', (e) => {
           if (e.target && e.target.classList.contains('courses-tab__item')) {
               tabsItems.forEach(item => {
                   item.classList.remove('courses-tab__item_active');
                   if (e.target === item) {
                       item.classList.add('courses-tab__item_active');
                       tabTextContent = e.target.textContent;
                       tabTextContent = tabTextContent.replace(/[0-9\s]/g, '');
                       console.log(tabTextContent);
                       // console.log(tabsContentBadge[1].innerHTML !== tabTextContent);
                       filterCards(tabTextContent);
                   }
               })
           }
       });


       function filterCards (str) {
           for (let i = 0; i < tabsContent.length; i++) {
               if (str === tabsItems[0].textContent.trim().slice(0, 3)) {
                   tabsContent.forEach(item => {
                       item.classList.remove('hide');
                   });
               }
               if (tabsContent[i].children[1].children[0].textContent.trim().replaceAll(' ', '') === str) {
                   tabsContent[i].classList.remove('hide');
               } else {
                   tabsContent[i].classList.add('hide');
               }
           }
       }
   } catch (e) {
       console.log(e.name);
   }
}





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropdown */ "./src/js/modules/dropdown.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/navbar */ "./src/js/modules/navbar.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");









window.addEventListener('DOMContentLoaded', () => {
    _modules_forms__WEBPACK_IMPORTED_MODULE_0___default()();
    (0,_modules_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_navbar__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.sliderCards)('.team__slider-prev', '.team__slider-next', '.team__slider-inner');
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.sliderTestimonials)('.testimonials-inner', '.testimonials-prev', '.testimonials-next', '#first', '#second');
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__.tabBenefits)('.tab__item', '.tabitems', '.tab__content');
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__.tabsCourses)();
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map