const grid = document.querySelector('.grid')
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const dropDown = document.querySelector('select')
const difficultySelector = document.querySelector('.difficulty')
// const mediumLevel = document.getElementById('level-2')
// const easyLevel = document.getElementById('level-1')
// const hardLevel = document.getElementById('level-3')
// const asianLevel = document.getElementById('level-4')

const timeleft = document.getElementById('time-left')
const score = document.getElementById('score')

let result = 0
let hitPosition
let currentTime = 180
let timerId = null
timeleft.textContent = 180

dropDown.addEventListener('click', () => {
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

})

function startGame() {
    grid.style.display = "grid"
    difficultySelector.style.display = "none"
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

    if (currentTime === -1){
        document.querySelector('#start-game').textContent = "START NEW GAME"
        clearInterval(timerId)
        clearInterval(countDownTimer)
        alert('GAME OVER! Your final score is' + " " + result)
        result = 0
        score.textContent = result
        squares.forEach(square  => {
            square.classList.remove('mole')
        })
        difficultySelector.style.display = "block"
        currentTime = 180
        timeleft.textContent = currentTime
        currentTime--
        result++
    }
}

let countDownTimer = setInterval(countDown, 1000)
}