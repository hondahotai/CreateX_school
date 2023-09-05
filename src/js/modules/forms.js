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
            console.log(123);
            let form = e.target;

            form.classList.add('submited');

        });
    } catch (e) {
        console.log(e.name);
    }
}

export {formsSub, formPromo};



