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




export {scrollNavbar, eventPageView};