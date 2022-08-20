'use strict'

const showActualTime = () => {
    let timeValue = new Date().toLocaleTimeString('hu');
    document.querySelector('.timeDigital').innerHTML = timeValue;    
};

setInterval(showActualTime, 1000);

