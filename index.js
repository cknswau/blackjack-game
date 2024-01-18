let hasBlackjack = false
let isAlive = false
let message = ""
let sum = 0
let cards = []
myChips = localStorage.getItem("myChipCount") ? localStorage.getItem("myChipCount") : localStorage.setItem("myChipCount", 500)
chips = myChips || 500
const messageEl = document.querySelector("#message-el")
const cardsEl = document.querySelector("#cards-el")
const sumEl = document.querySelector("#sum-el")
const playerEl = document.getElementById("player-el")
const btnStartGame = document.getElementById("startGame")
const btnNewCard = document.getElementById("newCard")

playerEl.textContent = `Chips: $${chips}`
btnNewCard.style.display = "none"
sumEl.style.display = "none"
cardsEl.style.display = "none"

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

    if ( hasBlackjack ) {
        chips += 15
        localStorage.setItem("myChipCount", chips)
        playerEl.textContent = `Chips: $${chips}`
    }

    sumEl.textContent = "Sum: " + sum
    isAlive ? btnStartGame.style.display = "none" : btnStartGame.style.display = "block"
    !isAlive ? btnNewCard.style.display = "none" : btnNewCard.style.display = "block"
}

btnStartGame.addEventListener("click", function () {
    !hasBlackjack
    isAlive
    chips -= 5
    localStorage.setItem("myChipCount", chips)
    sum = 0
    cards.length = 0;
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    renderGame()
    sumEl.style.display = "block"
    cardsEl.style.display = "block"
    playerEl.textContent = `Chips: $${chips}`
})


btnNewCard.addEventListener("click", function () {
    if ( isAlive && !hasBlackjack ) {
        sum = 0
        cards.push(getRandomCard())
        renderGame()
    }
})