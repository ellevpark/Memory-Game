const cards = document.querySelectorAll('.memory-card'); 

let hasFlippedCard = false;
let firstCard, secondCard; 

function flipCard() {
  this.classList.add('flip');
  if (!hasFlippedCard){
    //first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
    //second click
    hasFlippedCard = false;
    secondCard = this; 
    checkMatch();
}

function checkMatch() {
  let isMatch = firstCard.dataset.painting === secondCard.dataset.painting; 

  isMatch ? disableCards() : unflipCards();
}

function disableCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){ 
  setTimeout(() => {
    firstCard.classList.remove('flip'); 
    secondCard.classList.remove('flip');
  }, 500)
}

cards.forEach(card => card.addEventListener('click', flipCard))