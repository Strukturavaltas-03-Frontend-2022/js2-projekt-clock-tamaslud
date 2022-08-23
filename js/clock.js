'use strict'

const showActualTime = () => {
    let timeValue = new Date().toLocaleTimeString('hu').split('');
    timeValue.length == 7 ? timeValue.unshift(' ') : {};

    document.querySelector('span.hours1').innerHTML = timeValue[0];
    document.querySelector('span.hours2').innerHTML = timeValue[1];
    document.querySelector('span.minutes1').innerHTML = timeValue[3];
    document.querySelector('span.minutes2').innerHTML = timeValue[4];
    document.querySelector('span.seconds1').innerHTML = timeValue[6];
    document.querySelector('span.seconds2').innerHTML = timeValue[7];
};

setInterval(showActualTime, 1000);

