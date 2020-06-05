const cards = document.querySelectorAll('.memory-card'); 

let hasFlippedCard = false;
let firstCard, secondCard; 

if (!hasFlippedCard){
  //first click
  hasFlippedCard = true;
  firstCard = this;
}
else {
  //second click
  hasFlippedCard = false;
  secondCard = this; 
}

//checking if the cards match 


function flipCard() {
  this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard))