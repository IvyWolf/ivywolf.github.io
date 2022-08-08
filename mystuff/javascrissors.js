const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let yourChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = yourChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)
    if (randomNumber === 1) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'Rock'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === yourChoice) {
        result = 'Draw!'
    }
    if (computerChoice === 'Rock' && yourChoice === "Paper") {
        result = 'You Won!'
    }
    if (computerChoice === 'Rock' && yourChoice === "Scissors") {
        result = 'You Lost!'
    }
    if (computerChoice === 'Paper' && yourChoice === "Scissors") {
        result = 'You Won!'
    }
    if (computerChoice === 'Paper' && yourChoice === "Rock") {
        result = 'You Lost!'
    }
    if (computerChoice === 'Scissors' && yourChoice === "Rock") {
        result = 'You Won!'
    }
    if (computerChoice === 'Scissors' && yourChoice === "Paper") {
        result = 'You Lost!'
    }
    resultDisplay.innerHTML = result
}