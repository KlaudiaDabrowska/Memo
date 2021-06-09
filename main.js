const images= document.querySelectorAll("img");
const hiddenImages=document.querySelectorAll(".hidden");

const displayCard=(e)=>{
    for(let i=0; i<images.length; i++){
        if(images[i].id === e.target.id){
                images[i].style.display="grid";
        }
    }
    setTimeout(hiddenCard, 2000);
}

const hiddenCard=(e)=>{
    for(let i=0; i<images.length; i++){
                images[i].style.display="none";
    }
}

const startGame=()=>{
    hiddenImages.forEach(hiddenImage=>{hiddenImage.addEventListener("click", displayCard)});  
}

startGame()


