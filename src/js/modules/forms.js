//forms

function forms () {
    document.querySelector('.subscribe__form').addEventListener('submit', function (e) {
        e.preventDefault();
        let form = e.target;

        form.classList.add('submited');
    });
}

module.exports = forms;
