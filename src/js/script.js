"use strict";

window.addEventListener('DOMContentLoaded', () => {
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
    dropdownButton();

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
    scrollNavbar();

    // modal
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

        // tab benefits

       function tabBenefits(itemSelector, parentSelector, contentSelector) {
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
       }
       tabBenefits('.tab__item', '.tabitems', '.tab__content');


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
        sliderCards('.team__slider-prev', '.team__slider-next', '.team__slider-inner');

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
    sliderTestrimonials();

        //forms
        document.querySelector('.subscribe__form').addEventListener('submit', function (e) {
            e.preventDefault();
            let form = e.target;

            form.classList.add('submited');
        });
});

