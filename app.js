const grid = document.querySelector('.grid')
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

const timeleft = document.getElementById('time-left')
const score = document.getElementById('score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function startGame() {
    grid.style.display = "grid"

function randomSquare() {
   squares.forEach(square  => {
        square.classList.remove('mole')
    })

    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
         if (square.id === hitPosition) {
             result++
             score.textContent = result
             hitPosition = null
         }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 800)
}
moveMole()

function countDown() {

    currentTime--
    timeleft.textContent = currentTime

    if (currentTime === 0){
        document.querySelector('#start-game').textContent = "START NEW GAME"
        clearInterval(timerId)
        clearInterval(countDownTimer)
        result = 0
        score.textContent = result
        result++
        currentTime = 60
        timeleft.textContent = currentTime
        currentTime--
        alert('GAME OVER! Your final score is' + " " + result)
    }
}

let countDownTimer = setInterval(countDown, 1000)
}