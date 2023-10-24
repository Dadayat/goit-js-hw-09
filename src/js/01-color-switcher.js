function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

class ColorChanger {
  constructor() {
    this.refs = {
      startBtn: document.querySelector('button[data-start]'),
      stopBtn: document.querySelector('button[data-stop]'),
      body: document.body,
    };
    this.intervalID = null;
    this.changeColor = this.changeColor.bind(this);
    this.startChangingColor = this.startChangingColor.bind(this);
    this.stopChangingColor = this.stopChangingColor.bind(this);
    this.init();
  }

  init() {
    this.refs.startBtn.addEventListener('click', this.startChangingColor);
    this.refs.stopBtn.addEventListener('click', this.stopChangingColor);
  }

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  changeColor() {
    this.refs.body.style.backgroundColor = this.getRandomHexColor();
  }

  startChangingColor() {
    this.intervalID = setInterval(this.changeColor, 1000);
    this.refs.startBtn.disabled = true;
  }

  stopChangingColor() {
    clearInterval(this.intervalID);
    this.refs.startBtn.disabled = false;
  }
}

new ColorChanger();