const startingSecond = 0.50;
let time = startingSecond * 60; // Convert minutes to total seconds

const countDownSec = document.getElementById("countDown");

function updateCountDown() {
    
    const seconds = time % 60;

    countDownSec.innerHTML = `${seconds < 10 ? "0" : ""}${seconds}s`;
    
    if (time > 0) {
        time--; // Decrement time
    }
}

setInterval(updateCountDown, 1000); // Runs every second
