class Memorama{
    constructor(){
    this.canplay = false;
    this.card1 =null;
    this.card2 = null;

    }
}



document.addEventListener("DOMContentLoaded", () =>{  
    const cards = document.querySelectorAll("figure");
    cards.forEach(card =>{
        card.addEventListener("click", flipCard);
    })

    new Memorama();
});