const grid = document.querySelector('.grid')
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const dropDown = document.querySelector('select')
const difficultySelector = document.querySelector('.difficulty')
const startGameBtn = document.getElementById('start-game')
const userTime = document.getElementById('select-time')

const timeleft = document.getElementById('time-left')
const score = document.getElementById('score')

let result = 0
let hitPosition
let currentTime = 60
timeleft.textContent = currentTime
let timerId = null

function setTime() {
    let userCustomTime = userTime.value 
    currentTime = userCustomTime 
    timeleft.textContent = currentTime
}

/* dropDown.addEventListener('click', () => {
    if (dropDown.selectedIndex === 0) {
        currentTime = 180
    } else if (dropDown.selectedIndex === 1) {
        currentTime = 120
        timeleft.textContent = currentTime
    }  else if (dropDown.selectedIndex === 2) {
        currentTime = 60
        timeleft.textContent = currentTime
    } else {
        currentTime = 30
        timeleft.textContent = currentTime
    }

}) */

function startGame() {
    grid.style.display = "grid"
    difficultySelector.style.display = "none"
    startGameBtn.style.visibility = 'hidden'
    moveMole()

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
    if (dropDown.selectedIndex === 0) {
        timerId = setInterval(randomSquare, 1000)
    } else if (dropDown.selectedIndex === 1) {
        timerId = setInterval(randomSquare, 800)
    }  else if (dropDown.selectedIndex === 2) {
        timerId = setInterval(randomSquare, 600)
    } else if (dropDown.selectedIndex === 3) {
        timerId = setInterval(randomSquare, 400)
    } else {
        timerId = setInterval(randomSquare, 200)
    }

 }



function countDown() {
    currentTime--
    timeleft.textContent = currentTime
    
    if (currentTime === -1){
            startGameBtn.style.visibility ='visible'
            startGameBtn.textContent = "START NEW GAME"
        clearInterval(timerId)
        clearInterval(countDownTimer)
        alert('GAME OVER! Your final score is' + " " + result)
        result = 0
        score.textContent = result
        squares.forEach(square  => {
            square.classList.remove('mole')
        })
        setTime()
        currentTime--
        result++
    }
}

dropDown.addEventListener('click', moveMole)
let countDownTimer = setInterval(countDown, 1000)
}