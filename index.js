let firstCard;
let secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum;
let sums;
let cardsa;

let player = {
    name: "Rajesh",
    chips: 150
}

// // generate a random number between 2 and 11
function generateRandomNumber() {
    let value = Math.floor(Math.random() * 13) + 1;
    if (value > 10) {
        return 10;
    } else if (value === 1) {
        return 11;
    }
    return value;
}

let val = document.getElementById("message-el")
let sumel = document.querySelector("#sum-el")
let cardsel = document.querySelector("#cards-el")
let newcard = document.querySelector("#newcard-el")
let exitcard = document.querySelector("#exit-el")
let value = document.querySelector("#value")

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true;
    } else {
        isAlive = false;
        message = "You're out of the game! 😭"
    }
    val.textContent = message
    sumel.textContent = sums
    cardsel.textContent = cardsa
}

function closeSlowly() {
    var opacity = 1;
    var timer = setInterval(function () {
        if (opacity <= 0.1) {
            clearInterval(timer);
            window.close();
        }
        window.document.body.style.opacity = opacity;
        opacity -= 0.1;
    }, 50);
}


document.getElementById("button").addEventListener("click", () => {
    isAlive = true;
    hasBlackJack = false;
    if (player.chips < 50) {
        alert("You don't have enough chips to play")
        return;
    } else {
        firstCard = generateRandomNumber();
        secondCard = generateRandomNumber();
        sum = firstCard + secondCard
        cardsa = "Cards: " + firstCard + " " + secondCard;
        sums = "Sum: " + sum;
        player.chips = player.chips - 50;
        renderGame();
        adder();
    }
})

newcard.addEventListener("click", () => {
    if (isAlive && !hasBlackJack) {
        let num = generateRandomNumber()
        cardsa = cardsa + " " + num
        sum = sum + num
        sums = "Sums: " + sum
        console.log("Drawing new card")
        renderGame();
        adder();
    }
})

exitcard.addEventListener("click", () => {
    closeSlowly();
})

function adder() {
    if (hasBlackJack) {
        player.chips = player.chips + 100;
    }
    value.textContent = player.name + ": $" + player.chips;
}

adder();