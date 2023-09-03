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
