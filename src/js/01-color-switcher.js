const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.body,
}

let initTime;
refs.startBtn.addEventListener('click', () => {
    initTime = Date.now();
    setInterval(() => {
        const currentTime = Date.now();
        const diff = currentTime - initTime;
        con

    }, 1000)
})
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
