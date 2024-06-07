window.addEventListener("DOMContentLoaded", () => {
  const deadline = new Date("2024-06-30");

  function remainingTime(deadline) {
    const time = Math.abs(deadline.getTime() - new Date().getTime()),
      days = Math.floor(time / (1000 * 60 * 60 * 24)),
      hours = Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((time / (1000 * 60)) % 60),
      seconds = Math.floor((time / 100) % 60);

    return {
      time,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function setTimeClock(selector, deadline) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds");

    const updateClockInterval = setInterval(updateClock, 1000);

    updateClock();
    function updateClock() {
      (days.innerHTML = remainingTime(deadline).days),
        (hours.innerHTML = remainingTime(deadline).hours);
      minutes.innerHTML = remainingTime(deadline).minutes;
      seconds.innerHTML = remainingTime(deadline).seconds;

      if (remainingTime().time <= 0) {
        clearInterval(updateClockInterval);
      }
    }
  }
  setTimeClock(".timer", deadline);
});
