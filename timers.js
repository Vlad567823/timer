function startHourTimer() {
  let totalMinutes = 60;
  const timerDisplay = document.getElementById('timer1');

  const intervalId = setInterval(() => {
    totalMinutes--;

    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    timerDisplay.textContent =
      `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    if (totalMinutes === 30) {
      alert("Залишилось менше половини часу!");
    }

    if (totalMinutes <= 0) {
      clearInterval(intervalId);
      timerDisplay.textContent = "00:00";
      alert("Час вичерпано!");
    }
  }, 60000);
}

// ==================== Таймер 2 — секунди та мілісекунди ====================
function startSecondTimer() {
  let totalMilliseconds = 30000;
  const timerDisplay = document.getElementById('timer2');
  const startBtn = document.getElementById('startBtn');
  const animateBox = document.getElementById('animateBox');

  startBtn.disabled = true; 
  animateBox.style.transform = "translateX(0)"; 

  const intervalId = setInterval(() => {
    totalMilliseconds--;

    let seconds = Math.floor(totalMilliseconds / 1000);
    let ms = totalMilliseconds % 1000;

    timerDisplay.textContent = `${seconds}.${ms.toString().padStart(3,'0')}`;

    if (totalMilliseconds === 10000) {
      animateBox.style.transition = "all 1s linear";
      animateBox.style.transform = "translateX(200px)";
    }

    if (totalMilliseconds <= 0) {
      clearInterval(intervalId);
      timerDisplay.textContent = "0.000";
      startBtn.disabled = false; 
      animateBox.style.transform = "translateX(0)";
    }
  }, 1);
}

startHourTimer();
startSecondTimer();

document.getElementById('startBtn').addEventListener('click', () => {
  startSecondTimer();
});