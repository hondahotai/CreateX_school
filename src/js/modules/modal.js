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

export default modal;
