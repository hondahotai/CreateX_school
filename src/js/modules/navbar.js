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

export default scrollNavbar;