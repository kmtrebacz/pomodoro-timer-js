const display = document.querySelector('.timer-display')
const message = document.querySelector('.timer-message')
const startBtn = document.querySelector('.timer-start')
const pauseBtn = document.querySelector('.timer-pause')
const resetBtn = document.querySelector('.timer-reset')

const workTime = 25 * 60 // 25 minutes in seconds
const breakTime = 5 * 60 // 5 minutes in seconds

let timerInterval
let remainingTime = workTime
let isWorking = true // true for work, false for break

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000)
}

function pauseTimer() {
  clearInterval(timerInterval)
}

function resetTimer() {
  clearInterval(timerInterval)
  remainingTime = workTime
  isWorking = true
  updateInfo()
  updateTimer()
}

function updateTimer() {
  remainingTime--
  updateTimerDisplay()
  if (remainingTime <= 0) {
    switchTimer()
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(remainingTime / 60)
  const seconds = remainingTime % 60
  const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes
  const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds
  display.textContent = `${minutesDisplay}:${secondsDisplay}`
}

function switchTimer() {
  isWorking = !isWorking
  remainingTime = isWorking ? workTime : breakTime
  updateInfo()
  updateTimerDisplay()
}

function updateInfo() {
  message.textContent = isWorking ? "Work" : "Break"
}

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resetBtn.addEventListener("click", resetTimer)

resetTimer()
