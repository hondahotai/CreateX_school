"use strict";

window.addEventListener('DOMContentLoaded', () => {
   // dropdown navbar
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

});