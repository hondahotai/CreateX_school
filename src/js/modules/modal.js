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




export default modal;
