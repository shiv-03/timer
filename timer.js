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
    initialcountdown = ++initialcountdown;

    countdownElement.innerHTML = initialcountdown;
    if (initialcountdown == 5) {
        initialcountdown = 0;
        initialcountdown = ++initialcountdown;

        mincount = ++mincount;
        countminElement.innerHTML = mincount;

    } else if (mincount == 15) {
        initialcountdown = 0;
        initialcountdown = ++initialcountdown;
        mincount = 0;
        mincount = ++mincount;

        hourcount = ++hourcount;
        counthourElement.innerHTML = hourcount;
    }
}


function startfunction() {
    startInterval = setInterval(timerStart, 1000);
    startButton.style.opacity = '0';
    startButton.style.visibility = 'hidden';
    setTimeout(function() {
        startButton.style.display = 'none';
        pauseButton.style.display = 'block';
        pauseButton.style.opacity = '1';
        pauseButton.style.visibility = 'visible';
    }, 500);

}

function pausefunction() {
    //sec = countdownElement.innerHTML;
    //min = countminElement.innerHTML;
    //hour = counthourElement.innerHTML;
    clearInterval(startInterval);



    pauseButton.style.opacity = '0';
    pauseButton.style.visibility = 'hidden';
    setTimeout(function() {
        startButton.style.display = 'block';
        startButton.style.opacity = '1';
        startButton.style.visibility = 'visible';
        pauseButton.style.display = 'none';
    }, 500);

}

function resetfunction() {
    clearInterval(startInterval);
    initialcountdown = 0;
    if (initialcountdown == 0) {
        countminElement.innerHTML = 0;
        counthourElement.innerHTML = 0;
        countdownElement.innerHTML = 0;
    }


}