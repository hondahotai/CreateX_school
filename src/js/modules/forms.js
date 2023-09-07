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

export {formsSub, formPromo};



