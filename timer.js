var countdownElement = document.getElementById('countdown-sec');
var countminElement = document.getElementById('countdown-min');
var counthourElement = document.getElementById('countdown-hour');

var startButton = document.getElementById('start-btn');
var pauseButton = document.getElementById('pause-btn');
var resetButton = document.getElementById('reset-btn');

var initialcountdown = countdownElement.innerHTML;
var mincount = countminElement.innerHTML;
var hourcount = counthourElement.innerHTML;

var min = 0;
var hour = 0;
var sec = 0;

var startInterval;

function timerStart() {
    initialcountdown = parseInt(initialcountdown) + 1;

    if (initialcountdown < 10) {
        countdownElement.innerHTML = '0' + initialcountdown;
    } else {
        countdownElement.innerHTML = initialcountdown;
    }

    if (initialcountdown == 5) {
        initialcountdown = 0;

        mincount = parseInt(mincount) + 1;
        if (mincount < 10) {
            countminElement.innerHTML = '0' + mincount;
        } else {
            countminElement.innerHTML = mincount;
        }

    } else if (mincount == 15) {
        initialcountdown = 0;
        initialcountdown = initialcountdown + 1;
        mincount = 0;
        mincount = mincount + 1;

        hourcount = parseInt(hourcount) + 1;
        if (hourcount < 10) {
            counthourElement.innerHTML = '0' + hourcount;
        } else {
            counthourElement.innerHTML = hourcount;
        }
    }
}
function startfunction() {
    startInterval = setInterval(timerStart, 1000);
    startButton.style.opacity = '0';
    startButton.style.visibility = 'hidden';
    setTimeout(function () {
        startButton.style.display = 'none';
        pauseButton.style.display = 'block';
        pauseButton.style.opacity = '1';
        pauseButton.style.visibility = 'visible';
    }, 500);
}

function pausefunction() {
    clearInterval(startInterval);
    pauseButton.style.opacity = '0';
    pauseButton.style.visibility = 'hidden';
    setTimeout(function () {
        startButton.style.display = 'block';
        startButton.style.opacity = '1';
        startButton.style.visibility = 'visible';
        pauseButton.style.display = 'none';
    }, 500);
}

function resetfunction() {
    clearInterval(startInterval);
    pausefunction();
    initialcountdown = 0;
    if (initialcountdown == 0) {
        countminElement.innerHTML = '00';
        counthourElement.innerHTML = '00';
        countdownElement.innerHTML = '00';
    }
}
