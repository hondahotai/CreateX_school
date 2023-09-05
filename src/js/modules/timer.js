// timer

// const deadline = '2023-09-30';
// timer remaining. return obj

function timer () {
    try {
        function getTimeRemaining(deadline) {
            const t = Date.parse(deadline) - new Date(),
                days = Math.floor ( (t/(1000*60*60*24)) ),
                hours = Math.floor ( (t/(1000*60*60) % 24) ),
                minutes = Math.floor ( (t/1000/60) % 60),
                seconds = Math.floor ( (t/1000) % 60);

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds,
            }
        }

        function setClock (selector, deadline) {
            const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);
            updateClock ()

            function updateClock () {
                const t = getTimeRemaining(deadline);
                days.innerHTML = t.days;
                hours.innerHTML = t.hours;
                minutes.innerHTML = t.minutes;
                seconds.innerHTML = t.seconds;
            }

        }
        setClock('.promo__countdown', '2023-09-30');
    } catch (e) {
        console.log(e.name);
        console.log(e);
    }

}


export default timer;