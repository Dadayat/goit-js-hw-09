import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class CountdownTimer {
  constructor() {
    this.refs = {
      datetimePicker: document.getElementById('datetime-picker'),
      startBtn: document.querySelector('button[data-start]'),
      dataDays: document.querySelector('span[data-days]'),
      dataHours: document.querySelector('span[data-hours]'),
      dataMinutes: document.querySelector('span[data-minutes]'),
      dataSeconds: document.querySelector('span[data-seconds]'),
    };

    this.options = {
      enableTime: true,
      time_24hr: true,
      defaultDate: new Date(),
      minuteIncrement: 1,
      onClose: this.onClose.bind(this),
    };

    this.picker = flatpickr('#datetime-picker', this.options);
    this.refs.startBtn.addEventListener('click', this.onClick.bind(this));
  }

  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    this.refs.startBtn.disabled = false;
  }

  onClick() {
  const intervalId = setInterval(() => {
    const selectedDate = this.picker.selectedDates[0];
    const counter = selectedDate - new Date();
    console.log(counter);
    const time = this.convertMs(counter);
    this.render(time);

    if (counter <= 0) {
      clearInterval(intervalId);
      this.render("00:00:00:00");
      return;
    }
  }, 1000);
}

  render(time) {
    const [days, hours, minutes, seconds] = time.split(':');
    this.refs.dataDays.textContent = days;
    this.refs.dataHours.textContent = hours;
    this.refs.dataMinutes.textContent = minutes;
    this.refs.dataSeconds.textContent = seconds;
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return `${this.addLeadingZero(days)}:${this.addLeadingZero(
      hours
    )}:${this.addLeadingZero(minutes)}:${this.addLeadingZero(seconds)}`;
  }

  addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
}

new CountdownTimer();
