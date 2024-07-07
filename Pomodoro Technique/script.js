let countdown;
let time = 1500; // 25 minutes in seconds
const screen = document.querySelector('.screen');

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  screen.value = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

let start = document.querySelector('.start');
start.addEventListener('click', function startTimer() {
  clearInterval(countdown);
  countdown = setInterval(() => {
    time--;
    updateDisplay();
    if (time < 0) {
      clearInterval(countdown);
      screen.value = "Time's up!";
    }
  }, 1000);
});

let pause = document.querySelector('.pause');
pause.addEventListener('click', function pauseTimer() {
  clearInterval(countdown);
});

let reset = document.querySelector('.reset');
reset.addEventListener('click',function resetTimer() {
    clearInterval(countdown);
  screen.value = "Timer has been Reset";

  setTimeout(() => {
    time = 1500; // Reset to 25 minutes
    updateDisplay(); // Update the display to show 25:00
  }, 2000);
  
  
});
