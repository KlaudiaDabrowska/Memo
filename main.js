const images = document.querySelectorAll("img");
const cards = document.querySelectorAll(".card");
const moves = document.querySelector(".move");
const time = document.querySelector(".time");

let openedCards = [];
let matchedCards = [];

let countTime;
let seconds = 0;
let minutes = 0;
// let timesArr=[];


function displayCard() {
    this.classList.add("disable");
    this.children[0].classList.toggle("visible");
    openCard(this)
}


function openCard(card) {
    openedCards.push(card);
    if (openedCards.length === 2) {
        if (openedCards[0].className === openedCards[1].className) {
            matched();
        } else {
            unmatched();
        }
    }
}


const matched = () => {
    disable();
    openedCards[0].children[0].classList.add("match");
    openedCards[1].children[0].classList.add("match");
    openedCards.forEach(openedCard => {
        matchedCards.push(openedCard)
    });
    matchedCards.forEach(matchedCard => {
        matchedCard.classList.add("disable")
    });
    openedCards = [];
    setTimeout(enable, 250);
}


const unmatched = () => {
    disable();
    setTimeout(function () {
        openedCards[0].children[0].classList.remove("visible");
        openedCards[1].children[0].classList.remove("visible");
        openedCards = [];
        enable();
    }, 500)
}


const disable = () => {
    cards.forEach(card => card.classList.add('disable'));
}


const enable = () => {
    cards.forEach(card => card.classList.remove('disable'));
    matchedCards.forEach(matchedCard => {
        matchedCard.classList.add("disable")
    });
}


const flashCards = () => {
    cards.forEach(card => {
        card.children[0].classList.add("visible")
    });
    setTimeout(function () {
        cards.forEach(card => {
            card.children[0].classList.remove("visible")
        })
    }, 1000)
}


const startTime = () => {
    // clearInterval(countTime);
    countTime = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        checkSeconds();
    }, 1000);
}


const checkSeconds = () => {
    if (seconds < 10) {
        time.textContent = `${minutes}:0${seconds}`
    } else {
        time.textContent = `${minutes}:${seconds}`
    }
}


window.onload = function () {
    setTimeout(flashCards, 400);
    startTime();
}


cards.forEach(card => {
    card.addEventListener("click", displayCard)
});