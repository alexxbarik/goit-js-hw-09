
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector(`#datetime-picker`);
const startBtn = document.querySelector(`button[data-start]`);

startBtn.addEventListener(`click`, onStartBtnClick);
startBtn.disabled = true;

let TIMER_DEADLINE = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0] < options.defaultDate){
            alert ("Please choose a date in the future");
        }
        startBtn.disabled = false;
      console.log(selectedDates[0].getTime());
      TIMER_DEADLINE = selectedDates[0];
    },
  };
 
  console.log(TIMER_DEADLINE);

  flatpickr(input, options);
  
  

  function onStartBtnClick(evt){
    const now = Date.now();
    const diff = TIMER_DEADLINE - now;
    setInterval(() =>{
        const currenttime = Date.now();
        const targettime = currenttime - diff;
        const timeComponents = convertMs(targettime)
        console.log(timeComponents);
    }, 1000);
//    console.log(diff);
    
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
  
    return { days, hours, minutes, seconds };
  }
  
//   addLeadingZero(value) {
//     return String(value).padStart(2, "0");
//   }

  
