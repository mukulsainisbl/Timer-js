let timer;
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');

function startTimer() {
  let hours = parseInt(hoursInput.value) || 0;
  let minutes = parseInt(minutesInput.value) || 0;
  let seconds = parseInt(secondsInput.value) || 0;
  
  let totalSeconds = hours * 3600 + minutes * 60 + seconds;
  
  timer = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      alert("Time's up!");
    } else {
      totalSeconds--;
      hours = Math.floor(totalSeconds / 3600);
      minutes = Math.floor((totalSeconds % 3600) / 60);
      seconds = totalSeconds % 60;
      
      hoursInput.value = String(hours).padStart(2, '0');
      minutesInput.value = String(minutes).padStart(2, '0');
      secondsInput.value = String(seconds).padStart(2, '0');
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  hoursInput.value = '00';
  minutesInput.value = '00';
  secondsInput.value = '00';
}