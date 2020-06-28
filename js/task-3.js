const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

const timer = {
  start() {
    const targetDate = new Date("Jul 17, 2020");

    this.timerId = setInterval(() => {
      const startDate = new Date();
      const deltaTime = startDate - targetDate;

      const date = new Date(deltaTime);
      updateClockFase(date);
    }, 1000);
  },
};

function updateClockFase(time) {
  const days = pad(
    Math.abs(Math.floor(time / (1000 * 60 * 60 * 24))));
  const hours = pad(
    Math.floor(Math.abs((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  );
  const mins = pad(
    Math.abs(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
  );
  const secs = pad(
    Math.abs(Math.floor((time % (1000 * 60)) / 1000)));

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, 0);
}

timer.start();

/* new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
}); */
