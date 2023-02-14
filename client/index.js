const inputs = document.querySelector(".inputs")
const hint = document.querySelector(".hint span")
const guessesLeft = document.querySelector(".guess-left span")
const wrongLetters = document.querySelector(".wrong-letter span")
const resetBtn = document.querySelector(".reset-btn")
const typingInput = document.querySelector(".typing-input")

let word
let maxGuesses
let incorrectLetters = []
let correctLetters = []

const randomWord = () => {
    let randomItem = wordList[Math.floor(Math.random() * wordList.length)]
    word = randomItem.word
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []
    incorrectLetters = []

    hint.innerText = randomItem.hint
    guessesLeft.innerText = maxGuesses
    wrongLetters.innerText = incorrectLetters

    let html = ""
    for (let i = 0; i < word.length; i++) {
        html += '<input type="text" disabled >'
        inputs.innerHTML = html
    }
}

// Functions to run on initialization
randomWord()

resetBtn.addEventListener('click', randomWord)
typingInput.addEventListener('input', initGame)
inputs.addEventListener('click', () => typingInput.focus())
document.addEventListener("keydown", () => typingInput.focus())