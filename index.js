
let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message
let messageEl = document.getElementById("message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")

function startGame () {
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
    cardsEl.textContent = "Cards: " + firstCard + " & " + secondCard
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    console.log("New Card!")
}