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


//tabs (courses page)
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

        // console.log(tabsContentBadge[0].parentElement.parentElement.parentElement.classList.remove('hide'));
    // console.log(tabsItems[0].textContent.trim().slice(0, 3));
    // console.log(tabsContentBadge[1].innerHTML === 'Management')
    // console.log(tabsContentBadge[1].innerHTML === tabTextContent);
    // console.log(tabsContent);
    // console.log(tabsContent.children[i]);
    // for (let i = 0; i < tabsContent.length; i++) {
    //     if (tabTextContent === tabsItems[0].textContent.trim().slice(0, 3)) {
    //         tabsContent.forEach(item => {
    //            item.classList.remove('hide');
    //         });
    //         // console.log(123123);
    //     }
    //     if (tabsItems[i].textContent.replace(/[0-9\s]/g, '') === tabTextContent) {
    //         console.log(123);
    //     }
    // }
    // console.log(ContentBadge[0].innerHTML);
    // function filterCards(str) {
    //     if (str === )
    // }


    // for (let i = 0; i < tabsContent.children.length; i++) {
    //     if (tabsContent.children[i].closest('.card-item__badge-text').innerHTML === "Marketing") {
    //         console.log(123);
    //     }
    // }

// console.log(ContentBadge[0].innerHTML);
    // console.log(tabsContent.children[1].firstElementChild.closest('.card-item__badge'))


    // tabsParent.addEventListener('click', (e) => {
    //     const clickedTab = e.target.closest('.courses-tab__item');
    //     const clickedTabWrapper = e.target.closest('.courses-tab__item-wrapper');
    //
    //     if (clickedTab) {
    //         tabsItems.forEach(item => {
    //             item.classList.remove('courses-tab__item_active');
    //             if (e.target === item) {
    //                 item.classList.add('courses-tab__item_active');
    //             }
    //         });
    //     } else if (clickedTabWrapper) {
    //         tabsItems.forEach(item => {
    //             item.classList.remove('courses-tab__item_active');
    //             if (e.target === item) {
    //                 item.classList.add('courses-tab__item_active');
    //             }
    //         })
    //     }
    // });

    // tabsParent.addEventListener('click', (e) => {
    //     const clickedTab = e.target.closest('.courses-tab__item');
    //     const clickedTabWrapper = e.target.closest('.courses-tab__item-wrapper');
    //
    //     if (clickedTab) {
    //         tabsItems.forEach(item => {
    //             item.classList.remove('courses-tab__item_active');
    //         });
    //         clickedTab.classList.add('courses-tab__item_active');
    //     }
    //
    //     if (clickedTabWrapper) {
    //         tabsItems.forEach(item => {
    //             item.classList.remove('courses-tab__item_active');
    //         });
    //         clickedTabWrapper.classList.add('courses-tab__item_active');
    //     }
    // });

    // for (let i = 0; i < tabsCategoryItem.length; i++) {
    //     tabsCategoryItem[i].closest('.courses-tab__item-wrapper').addEventListener('click', (e) => {
    //         tabsCategoryItem[i].parentElement.dispatchEvent(new Event("click"));
    //     })
    // }
});
