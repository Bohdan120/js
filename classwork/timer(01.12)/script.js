let startStop = document.getElementById('startStop');
let reset = document.getElementById('reset');
let display = document.getElementById('watch');
let seconds = 0;
let minutes = 0;
let interval;

startStop.addEventListener('click', function () {
    if (startStop.textContent == 'START') {
        start();
    } else {
        stop();
    }
});

reset.addEventListener('click', function () {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    display.textContent = '00:00';
    startStop.textContent = 'START';
});

function start() {
    interval = setInterval(function () {
        seconds++;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes < 10) {
            display.textContent = '0' + minutes;
          } else {
            display.textContent = minutes;
          }
          
          display.textContent += ':';
          
          if (seconds < 10) {
            display.textContent += '0' + seconds;
          } else {
            display.textContent += seconds;
          }
          
        startStop.textContent = 'STOP';
    }, 1000);
}

function stop() {
    clearInterval(interval);
    startStop.textContent = 'START';
}