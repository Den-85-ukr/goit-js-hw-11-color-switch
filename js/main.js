import colors from "/js/colors.js";

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

refs.startBtn.addEventListener("click", changeColor);

let interval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  refs.stopBtn.addEventListener("click", stopColor);
  interval = setInterval(randomColor, 1000);
  refs.startBtn.disabled = true;
}

function randomColor() {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = `${color}`;
}

function stopColor() {
  clearInterval(interval);
  refs.startBtn.disabled = false;
}