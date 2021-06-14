const images= document.querySelectorAll("img");
const cards=document.querySelectorAll(".card");

let openedCards=[];

function displayCard(){
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
    

console.log(openedCards)
const matched=()=>{
        openedCards[0].children[0].classList.add("match");
        openedCards[1].children[0].classList.add("match");
        openedCards=[]
}


const unmatched=()=>{
    setTimeout(function(){
        openedCards[0].children[0].classList.toggle("visible");
        openedCards[1].children[0].classList.toggle("visible");
        openedCards=[]
    }, 500)
}


const startGame=()=>{
    cards.forEach(card=>{card.addEventListener("click", displayCard)});  
}

startGame()

