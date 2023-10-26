import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    datetimePicker: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
    dataClockface: document.querySelectorAll('.timer [data-days], .timer [data-hours], .timer [data-minutes], .timer [data-seconds]'),
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
       if (selectedDate < new Date()) {
        Notify.failure("Please choose a date in the future");
         return;
      }
      refs.startBtn.disabled = false;
  },
};

const picker = flatpickr("#datetime-picker", options);



refs.startBtn.addEventListener("click", () => {
  setInterval(() => {
    const selectedDate = picker.selectedDates[0];
    const counter = selectedDate - new Date();
    console.log(counter);
    const time = convertMs(counter);
    render(time);
  }, 1000);
});

function render(time) {
  refs.dataClockface.textContent = time;
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return `${addLeadingZero(days)}:${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;;
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

