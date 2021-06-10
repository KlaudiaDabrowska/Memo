const images= document.querySelectorAll("img");
const cards=document.querySelectorAll(".card");

function displayCard(){
    console.log(this.children)
    this.children[0].classList.toggle("visible");
}


const startGame=()=>{
    cards.forEach(card=>{card.addEventListener("click", displayCard)});  
}

startGame()

