const display = document.querySelector('.timer-display')
const startBtn = document.querySelector('.timer-start')
const pauseBtn = document.querySelector('.timer-pause')
const resetBtn = document.querySelector('.timer-reset')

let seconds = 1500
let timer

function updateDisplay() {
  const minutes = Math.floor(seconds / 60)
  const remainderSeconds = seconds % 60
  const displayText = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
  display.textContent = displayText
}

function startTimer() {
  timer = setInterval(() => {
    seconds--
    updateDisplay()
    if (seconds === 0) {
      clearInterval(timer)
    }
  }, 1000)
}

function pauseTimer() {
  clearInterval(timer)
}

function resetTimer() {
  clearInterval(timer)
  seconds = 1500
  updateDisplay()
}

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resetBtn.addEventListener('click', resetTimer)
