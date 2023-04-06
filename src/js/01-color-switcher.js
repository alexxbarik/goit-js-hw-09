
const startBtn = document.querySelector(`button[data-start]`);
const stopBtn = document.querySelector(`button[data-stop]`);
const bodyEl = document.body;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  startBtn.addEventListener(`click`, onStartBtnClick);
  stopBtn.addEventListener(`click`, onStopBtnClick);

  let colorId = null;

  function onStartBtnClick(evt){
   colorId = setInterval(() =>{
    bodyEl.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
   }, 1000);
  }

  function onStopBtnClick(evt){
    clearInterval(colorId);
    startBtn.disabled = false;
  }