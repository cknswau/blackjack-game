let player = {
    chips: 500
}
let hasBlackjack = false
let isAlive = false
let message = ""
let sum = 0
let total = ""
let cards = []
let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.getElementById("player-el")
let btnStartGame = document.getElementById("startGame")
let btnNewCard = document.getElementById("newCard")

playerEl.textContent = `Chips: ${player.chips}`
btnNewCard.style.display = "none"
sumEl.style.display = "none"
cardsEl.style.display = "none"

function startGame() {
    !hasBlackjack
    isAlive
    player["chips"] = 495
    sum = 0
    cards.length = 0;
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    renderGame()
    sumEl.style.display = "block"
    cardsEl.style.display = "block"
}

function getRandomCard() {
    let num = Math.floor(Math.random() * 13) + 1
    return num = num === 1 ? 11 : num > 11 ? 10 : num
}

function sumCards(item) {
    sum += item
}

function renderGame () {
    cards.forEach(sumCards)
    message = sum <= 20 ? "Do you want to draw a new card?" : 
        sum === 21 && cards.length === 2 ? "Wohoo! You've got Blackjack!" : 
        sum === 21 && cards.length !== 2 ? "You have 21!" 
        : "You're out of the game!"
    hasBlackjack = sum === 21 && cards.length === 2
    isAlive = sum < 21
    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    for (let i = 0; i<cards.length; i++) {
        cardsEl.textContent += " : " + cards[i]
    }

    sumEl.textContent = "Sum: " + sum
    isAlive ? btnStartGame.style.display = "none" : btnStartGame.style.display = "block"
    !isAlive ? btnNewCard.style.display = "none" : btnNewCard.style.display = "block"
}

function newCard() {
    if ( isAlive && !hasBlackjack ) {
        sum = 0
        cards.push(getRandomCard())
        renderGame()
    }
}