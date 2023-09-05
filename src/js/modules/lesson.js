function toggleLesson () {
   const programList = document.querySelectorAll('.program__wrapper'),
       programItem = document.querySelectorAll('.program__item'),
       Text = document.querySelectorAll('.program__text'),
       Mark = document.querySelectorAll('.program__mark'),
       programTitle = document.querySelectorAll('.program__title'),

       // svg plus/minus
       minusSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833252 9.99935C0.833252 9.53911 1.20635 9.16602 1.66659 9.16602V9.99935V10.8327C1.20635 10.8327 0.833252 10.4596 0.833252 9.99935ZM18.3333 9.99935L18.3332 10.8327H1.66659V9.99935V9.16602H18.3327L18.3333 9.99935ZM18.3333 9.99935L18.3332 10.8327C18.7934 10.8327 19.1666 10.4596 19.1666 9.99935C19.1666 9.53911 18.793 9.16602 18.3327 9.16602L18.3333 9.99935Z" fill="#FF3F3A"/>
    </svg>`,
       plusSvg = ` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clip-path="url(#clip0_2492_17832)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99992 0.833984C10.4602 0.833984 10.8333 1.20708 10.8333 1.66732V9.16732H18.3333C18.7935 9.16732 19.1666 9.54041 19.1666 10.0007C19.1666 10.4609 18.7935 10.834 18.3333 10.834H10.8333V18.334C10.8333 18.7942 10.4602 19.1673 9.99992 19.1673C9.53968 19.1673 9.16658 18.7942 9.16658 18.334V10.834H1.66659C1.20635 10.834 0.833252 10.4609 0.833252 10.0007C0.833252 9.54041 1.20635 9.16732 1.66659 9.16732H9.16658V1.66732C9.16658 1.20708 9.53968 0.833984 9.99992 0.833984Z" fill="#FF3F3A"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2492_17832">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>`;


// toggle items


   programList.forEach((lesson, i) => {
      Text.forEach((item, i) => {
         if (i === 0) {
            item.classList.remove('hide');
         } else {
            item.classList.add('hide');
         }
      })
      lesson.addEventListener('click', (e) => {
         changeItem();
         Text[i].classList.toggle('hide');
         changeMark();
      });
   });

function changeMark () {
   Text.forEach((item, j) => {
      // item.classList.add('hide');
      if (item.classList.contains('hide')) {
         Mark[j].innerHTML = `${plusSvg}`;
         programTitle[j].style.cssText = `color: #1E212C`;
      } else {
         Mark[j].innerHTML = `${minusSvg}`;
         programTitle[j].style.cssText = `color: #FF3F3A`;

      }
   })
}

function changeItem() {
   Text.forEach((item, i) => {
      item.classList.add('hide');
   });
}

}
export {toggleLesson};