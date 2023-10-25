import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    datetimePicker: document.getElementById('datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
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
  },
};

const picker = flatpickr("#datetime-picker", options);