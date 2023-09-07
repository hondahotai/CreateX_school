/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/dropdown.js":
/*!************************************!*\
  !*** ./src/js/modules/dropdown.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
                            <a href="events.html" id="listView">Events list</a>
                            <a href="events.html" id="gridView">Events grid</a>
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formPromo: () => (/* binding */ formPromo),
/* harmony export */   formsSub: () => (/* binding */ formsSub)
/* harmony export */ });
//forms

function formsSub (formSelector) {
   try {
       document.querySelector(formSelector).addEventListener('submit', function (e) {
           e.preventDefault();
           let form = e.target;

           form.classList.add('submited');
       });
   } catch (e) {
       console.log(e.name);
   }
}

function formPromo (formSelector) {
    try {
        document.querySelector(formSelector).addEventListener('submit', function (e) {
            e.preventDefault();
            let form = e.target;

            form.classList.add('submited');

            if (form.checkValidity()) {
                form.reset();
                form.classList.remove('submited');
                location.reload();
            }
        });
    } catch (e) {
        console.log(e.name);
    }
}







/***/ }),

/***/ "./src/js/modules/lesson.js":
/*!**********************************!*\
  !*** ./src/js/modules/lesson.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleLesson: () => (/* binding */ toggleLesson)
/* harmony export */ });
function toggleLesson () {
   try {
      const programList = document.querySelectorAll('.program__wrapper'),
          programItem = document.querySelectorAll('.program__item'),
          Text = document.querySelectorAll('.program__text'),
          Mark = document.querySelectorAll('.program__mark'),
          programTitle = document.querySelectorAll('.program__title'),

          // svg plus/minus
          minusSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833252 9.99935C0.833252 9.53911 1.20635 9.16602 1.66659 9.16602V9.99935V10.8327C1.20635 10.8327 0.833252 10.4596 0.833252 9.99935ZM18.3333 9.99935L18.3332 10.8327H1.66659V9.99935V9.16602H18.3327L18.3333 9.99935ZM18.3333 9.99935L18.3332 10.8327C18.7934 10.8327 19.1666 10.4596 19.1666 9.99935C19.1666 9.53911 18.793 9.16602 18.3327 9.16602L18.3333 9.99935Z" fill="#FF3F3A"/>
    </svg>`,
          plusSvg = ` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_2492_17832)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 0.833984C10.4602 0.833984 10.8333 1.20708 10.8333 1.66732V9.16732H18.3333C18.7935 9.16732 19.1666 9.54041 19.1666 10.0007C19.1666 10.4609 18.7935 10.834 18.3333 10.834H10.8333V18.334C10.8333 18.7942 10.4602 19.1673 9.99992 19.1673C9.53968 19.1673 9.16658 18.7942 9.16658 18.334V10.834H1.66659C1.20635 10.834 0.833252 10.4609 0.833252 10.0007C0.833252 9.54041 1.20635 9.16732 1.66659 9.16732H9.16658V1.66732C9.16658 1.20708 9.53968 0.833984 9.99992 0.833984Z" fill="#FF3F3A"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2492_17832">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>`;


// toggle items


      programList.forEach((lesson, i) => {
         Text.forEach((item, i) => {
            if (i === 0) {
               item.classList.remove('hide');
               programTitle[i].style.cssText = `color: #FF3F3A`;
            } else {
               item.classList.add('hide');
            }
         })
         lesson.addEventListener('click', (e) => {
            changeItem();
            Text[i].classList.toggle('hide');
            changeMark();
         });
      });

      function changeMark () {
         Text.forEach((item, j) => {
            // item.classList.add('hide');
            if (item.classList.contains('hide')) {
               Mark[j].innerHTML = `${plusSvg}`;
               programTitle[j].style.cssText = `color: #1E212C`;
            } else {
               Mark[j].innerHTML = `${minusSvg}`;
               programTitle[j].style.cssText = `color: #FF3F3A`;
            }
         })
      }

      function changeItem() {
         Text.forEach((item, i) => {
            item.classList.add('hide');
         });
      }
   } catch (e) {
      console.log(e);
   }

}


/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

    function togglePassBtn () {
        const eye = document.querySelectorAll('.modal-eye');

        eye.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('change');
                if (item.classList.contains('change')) {
                    item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.21764 18.959C8.74744 19.115 9.30336 18.8119 9.45932 18.2821L10.1857 15.8142C11.3894 16.0615 12.6109 16.0615 13.8146 15.8143L14.5407 18.282C14.6966 18.8118 15.2525 19.115 15.7823 18.9591C16.3121 18.8032 16.6152 18.2473 16.4593 17.7175L15.7208 15.2074C16.7092 14.7775 17.6625 14.1765 18.5641 13.413L20.2609 15.2748C20.6329 15.683 21.2654 15.7123 21.6736 15.3403C22.0818 14.9683 22.1111 14.3358 21.7391 13.9276L19.9957 12.0146C20.6511 11.2825 21.2708 10.4533 21.848 9.52974C22.1407 9.0614 21.9983 8.44445 21.53 8.15174C21.0617 7.85903 20.4447 8.00141 20.152 8.46974C19.4567 9.58221 18.7081 10.5192 17.9278 11.2869C16.7309 12.4644 15.463 13.2404 14.1934 13.6493C12.7433 14.1164 11.2571 14.1164 9.80701 13.6493C8.53734 13.2404 7.26942 12.4644 6.07248 11.2869C5.29207 10.5191 4.54328 9.58218 3.84801 8.46974C3.5553 8.0014 2.93835 7.85903 2.47001 8.15174C2.00168 8.44445 1.8593 9.0614 2.15201 9.52974C2.72933 10.4534 3.34915 11.2825 4.00455 12.0146L2.26095 13.9275C1.88891 14.3357 1.9182 14.9682 2.32637 15.3402C2.73454 15.7123 3.36703 15.683 3.73907 15.2748L5.43615 13.4129C6.33782 14.1764 7.29112 14.7774 8.27954 15.2074L7.54071 17.7174C7.38476 18.2472 7.68783 18.8031 8.21764 18.959Z" fill="#1E212C"/></svg>`;
                    item.previousElementSibling.type = `text`;
                } else {
                    item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none"><path d="M1.64064 5.51786C4.34475 3.26187 7.45784 2 10.75 2C14.0422 2 17.1553 3.26187 19.8594 5.51786C20.2835 5.87166 20.9141 5.81469 21.2679 5.39061C21.6217 4.96654 21.5647 4.33594 21.1406 3.98214C18.1338 1.47356 14.5795 0 10.75 0C6.92058 0 3.36628 1.47356 0.35941 3.98214C-0.0646686 4.33594 -0.12164 4.96654 0.232162 5.39061C0.585964 5.81469 1.21656 5.87166 1.64064 5.51786Z" fill="#1E212C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.10078 6.68903C4.89931 5.17064 7.46444 3.75 10.375 3.75C13.2856 3.75 15.8507 5.17064 17.6492 6.68903C18.5559 7.45445 19.2992 8.27045 19.8245 8.99929C20.0866 9.36298 20.3053 9.71988 20.4626 10.0508C20.6072 10.3547 20.75 10.7383 20.75 11.125C20.75 11.5117 20.6072 11.8953 20.4626 12.1992C20.3053 12.5301 20.0866 12.887 19.8245 13.2507C19.2992 13.9796 18.5559 14.7956 17.6492 15.561C15.8507 17.0794 13.2856 18.5 10.375 18.5C7.46444 18.5 4.89931 17.0794 3.10078 15.561C2.19415 14.7956 1.4508 13.9796 0.925489 13.2507C0.663353 12.887 0.444735 12.5301 0.287379 12.1992C0.142841 11.8953 1.09139e-09 11.5117 1.09139e-09 11.125C1.09139e-09 10.7383 0.142841 10.3547 0.287379 10.0508C0.444735 9.71988 0.663353 9.36298 0.925489 8.99929C1.4508 8.27045 2.19415 7.45445 3.10078 6.68903ZM2.00709 11.125C2.01721 11.1589 2.04055 11.2288 2.09355 11.3403C2.18597 11.5346 2.33571 11.7868 2.54798 12.0813C2.97147 12.6689 3.60106 13.3659 4.39097 14.0328C5.98553 15.379 8.10789 16.5 10.375 16.5C12.6421 16.5 14.7645 15.379 16.359 14.0328C17.1489 13.3659 17.7785 12.6689 18.202 12.0813C18.4143 11.7868 18.564 11.5346 18.6564 11.3403C18.7094 11.2289 18.7328 11.1589 18.7429 11.125C18.7328 11.0911 18.7094 11.0211 18.6564 10.9097C18.564 10.7154 18.4143 10.4632 18.202 10.1687C17.7785 9.58113 17.1489 8.88411 16.359 8.21724C16.0236 7.93408 15.6649 7.66089 15.2864 7.40599C15.4253 7.87134 15.5 8.36445 15.5 8.875C15.5 11.7055 13.2055 14 10.375 14C7.54454 14 5.25 11.7055 5.25 8.875C5.25 8.36445 5.32465 7.87135 5.46364 7.40599C5.08511 7.66089 4.72636 7.93408 4.39097 8.21724C3.60106 8.88411 2.97147 9.58113 2.54798 10.1687C2.33571 10.4632 2.18597 10.7154 2.09355 10.9097C2.04055 11.0211 2.01721 11.0911 2.00709 11.125ZM7.25 8.875C7.25 7.14911 8.64911 5.75 10.375 5.75C12.1009 5.75 13.5 7.14911 13.5 8.875C13.5 10.6009 12.1009 12 10.375 12C8.64911 12 7.25 10.6009 7.25 8.875Z" fill="#1E212C"/></svg>`;
                    item.previousElementSibling.type = `password`;
                }

            })
        })
    }
    togglePassBtn();
}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/js/modules/navbar.js":
/*!**********************************!*\
  !*** ./src/js/modules/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventPageView: () => (/* binding */ eventPageView),
/* harmony export */   scrollNavbar: () => (/* binding */ scrollNavbar)
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

// event list/grid
function eventPageView() {
    try {
        const gridView = document.querySelector('#gridView'),
            ViewButton = document.querySelectorAll('.toolbar-button-wrap'),
            toolBarBtn = document.querySelectorAll('.toolbar-button'),
            EventsContentList = document.querySelector('.events__wrapper');

        EventsContentList.style.cssText = `transition: 0.3s all;`;

        ViewButton.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                if(i === 0) {
                    toolBarBtn[0].classList.add('active');
                    toolBarBtn[1].classList.remove('active');
                    EventsContentList.classList.remove('events__wrapper_grid');
                }
                if(i === 1) {
                    toolBarBtn[1].classList.add('active');
                    toolBarBtn[0].classList.remove('active');
                    EventsContentList.classList.add('events__wrapper_grid');
                }
            })
        })
    } catch (e) {
        console.log(e);
    }
}






/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   miniCards: () => (/* binding */ miniCards),
/* harmony export */   miniGridCards: () => (/* binding */ miniGridCards),
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

function miniCards (innerSelector, prevSelector, nextSelector) {
    try {
        const inner = document.querySelector(innerSelector),
            prev = document.querySelector(prevSelector),
            next = document.querySelector(nextSelector);

        let offset = 0;
        inner.style.transition = '0.5s all';

        next.addEventListener('click', () => {
            offset = offset + 630;
            if (offset > 2520) {
                offset = 0;
            }
            inner.style.transform = `translateX(-${offset}px`;
        });

        prev.addEventListener('click', () => {
            offset = offset - 630;
            if (offset < 0) {
                offset = 2520;
            }
            inner.style.transform = `translateX(-${offset}px`;
        });
    } catch (e) {
        console.log(e);
        console.log(e.name);
    }
}

// cards from events
function miniGridCards (innerSelector, prevSelector, nextSelector) {
    try {
        const inner = document.querySelector(innerSelector),
            prev = document.querySelector(prevSelector),
            next = document.querySelector(nextSelector);

        let offset = 0;
        let maxOffset;
        inner.style.transition = '0.5s all';

        if (inner.children.length === 6) {
            maxOffset = 1260;
        } else {
            maxOffset = 2520;
        }

        next.addEventListener('click', () => {
            offset = offset + 420;
            if (offset > maxOffset) {
                offset = 0;
            }
            inner.style.transform = `translateX(-${offset}px`;
        });

        prev.addEventListener('click', () => {
            offset = offset - 420;
            if (offset < 0) {
                offset = maxOffset;
            }
            inner.style.transform = `translateX(-${offset}px`;
        });
    } catch (e) {
        console.log(e);
    }
}

// // cards from blog page (carousel)
// function miniCarousel (innerSelector, prevSelector, nextSelector) {
//     try {
//         const inner = document.querySelector(innerSelector),
//             prev = document.querySelector(prevSelector),
//             next = document.querySelector(nextSelector);
//
//         let offset = 0;
//         inner.style.transition = '0.5s all';
//
//         next.addEventListener('click', () => {
//             offset = offset + 420;
//             if (offset > 2520) {
//                 offset = 0;
//             }
//             inner.style.transform = `translateX(-${offset}px`;
//         });
//
//         prev.addEventListener('click', () => {
//             offset = offset - 420;
//             if (offset < 0) {
//                 offset = 2520;
//             }
//             inner.style.transform = `translateX(-${offset}px`;
//         });
//     } catch (e) {
//         console.log(e);
//     }
// }



/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabBenefits: () => (/* binding */ tabBenefits),
/* harmony export */   tabsBlogs: () => (/* binding */ tabsBlogs),
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


//tabs (blogs page) |  don't forget to remove duplication in the future
function tabsBlogs() {
    try {
        const tabsParent = document.querySelector('.blogs-tabs'),
            tabsItems = document.querySelectorAll('.blogs-tab'),
            tabsContent = document.querySelectorAll('.blog__item');
        let tabTextContent = 'All';

        tabsParent.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('blogs-tab')) {
                tabsItems.forEach(item => {
                    item.classList.remove('blogs-tab_active');
                    if (e.target === item) {
                        item.classList.add('blogs-tab_active');
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
                        document.querySelector('#bigBlogItemImg').style.width = '495px';
                        document.querySelector('#wideBlogItem').style.gridColumn = `1/3`;
                    });
                }
                if (tabsContent[i].firstElementChild.lastElementChild.textContent.trim().replaceAll(' ', '') === str.substring(0, str.length - 1)) {
                    tabsContent[i].classList.remove('hide');
                    if (str.substring(0, str.length - 1) === 'Video') {
                        document.querySelector('#bigBlogItem').style.gridColumn = `auto`;
                        document.querySelector('#bigBlogItem').style.width = 'auto';
                        document.querySelector('#bigBlogItemImg').style.width = '390px';
                    }
                    if (str.substring(0, str.length - 1) === 'Article') {
                        document.querySelector('#wideBlogItem').style.gridColumn = `2/4`;
                    }
                } else {
                    tabsContent[i].classList.add('hide');
                }
            }
        }
    } catch (e) {
        console.log(e.name);
    }
}





/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// timer

// const deadline = '2023-09-30';
// timer remaining. return obj

function timer () {
    try {
        function getTimeRemaining(deadline) {
            const t = Date.parse(deadline) - new Date(),
                days = Math.floor ( (t/(1000*60*60*24)) ),
                hours = Math.floor ( (t/(1000*60*60) % 24) ),
                minutes = Math.floor ( (t/1000/60) % 60),
                seconds = Math.floor ( (t/1000) % 60);

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds,
            }
        }

        function setClock (selector, deadline) {
            const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);
            updateClock ()

            function updateClock () {
                const t = getTimeRemaining(deadline);
                days.innerHTML = t.days;
                hours.innerHTML = t.hours;
                minutes.innerHTML = t.minutes;
                seconds.innerHTML = t.seconds;
            }

        }
        setClock('.promo__countdown', '2023-09-30');
    } catch (e) {
        console.log(e.name);
        console.log(e);
    }

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropdown */ "./src/js/modules/dropdown.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/navbar */ "./src/js/modules/navbar.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_lesson__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/lesson */ "./src/js/modules/lesson.js");











document.addEventListener('DOMContentLoaded', () => {
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__.formsSub)('.subscribe__form');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__.formPromo)('.promo__form');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__.formPromo)('.reg__form');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__.formPromo)('.speaker-promo__form');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__.formPromo)('.contacts__form');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__.formPromo)('.modal-form');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__.formPromo)('.modal-form_second');
    (0,_modules_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_navbar__WEBPACK_IMPORTED_MODULE_3__.scrollNavbar)();
    (0,_modules_navbar__WEBPACK_IMPORTED_MODULE_3__.eventPageView)();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.sliderCards)('.team__slider-prev', '.team__slider-next', '.team__slider-inner');
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.sliderTestimonials)('.testimonials-inner', '.testimonials-prev', '.testimonials-next', '#first', '#second');
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.miniCards)('.related-slide__inner', '.slider-prev', '.slider-next');
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.miniGridCards)('.events__inner', '.slider-prev', '.slider-next');
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.miniGridCards)('.blog-mini__inner', '.slider-prev', '.slider-next');
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__.tabBenefits)('.tab__item', '.tabitems', '.tab__content');
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__.tabsCourses)();
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__.tabsBlogs)();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_modules_lesson__WEBPACK_IMPORTED_MODULE_7__.toggleLesson)();
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map