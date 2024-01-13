let player = {
    name: "Chris",
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

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    hasBlackjack = false
    isAlive = true
    player["chips"] = 495
    sum = 0
    cards.length = 0;
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    renderGame()
}

function getRandomCard() {
    let num = Math.floor(Math.random() * 13) + 1
    if ( num === 1 ) {
        return 11
    } else if ( num > 11 ) {
        return 10
    } else { 
        return num
    }
}

function sumCards(item) {
    sum += item
}

function renderGame () {
    cards.forEach(sumCards)
    if ( sum <= 20 ) {
        message = "Do you want to draw a new card?"
    } else if ( sum === 21 ) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    for (let i = 0; i<cards.length; i++) {
        cardsEl.textContent += " : " + cards[i]
    }

    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if ( isAlive === true && hasBlackjack === false ) {
        sum = 0
        cards.push(getRandomCard())
        renderGame()
    }
}