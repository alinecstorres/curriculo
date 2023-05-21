const cards = document.querySelector ('.projectCard');
let hasFlippedCard = false;
let selectedCard;

cards.addEventListener('click', flipCard)

function flipCard() {

    this.classList.add('flip');
    selectedCard = this;
    return;

}

