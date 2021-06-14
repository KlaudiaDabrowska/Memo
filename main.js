const images= document.querySelectorAll("img");
const cards=document.querySelectorAll(".card");

let openedCards=[];
let matchedCards=[];

function displayCard(){
    this.classList.add("disable");
    this.children[0].classList.toggle("visible");
    openCard(this)
}

function openCard(card){
    openedCards.push(card);
    if(openedCards.length===2){
        if(openedCards[0].className===openedCards[1].className){
            matched();
    }
        else{
            unmatched();
        }
    }
}
    

const matched=()=>{
        disable();
        openedCards[0].children[0].classList.add("match");
        openedCards[1].children[0].classList.add("match");
        openedCards.forEach(openedCard=>{matchedCards.push(openedCard)});
        matchedCards.forEach(matchedCard=>{matchedCard.classList.add("disable")});
        openedCards=[];
        setTimeout(enable, 250);
}


const unmatched=()=>{
    disable();
        setTimeout(function(){
        openedCards[0].children[0].classList.remove("visible");
        openedCards[1].children[0].classList.remove("visible");
        openedCards=[];
        enable();
    }, 500)
}

const disable=()=>{
    cards.forEach(card=>card.classList.add('disable'));
}

const enable=()=>{
    cards.forEach(card=>card.classList.remove('disable'));
    matchedCards.forEach(matchedCard=>{matchedCard.classList.add("disable")});
}

const startGame=()=>{
    cards.forEach(card=>{card.addEventListener("click", displayCard)});  
}

startGame()

