const cards = document.querySelectorAll('.memory-card');
const deck = document.querySelectorAll('.memory-game');
let images = [];
function startGame(){
   images = [
        'https://images-na.ssl-images-amazon.com/images/I/819mKKHWtUL._SY355_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/819mKKHWtUL._SY355_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/819mKKHWtUL._SY355_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/819mKKHWtUL._SY355_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/819mKKHWtUL._SY355_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/819mKKHWtUL._SY355_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/819mKKHWtUL._SY355_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/819mKKHWtUL._SY355_.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GCPwks70MKl3kScgyAhpQpHzvWOyWihEVOVZ61pLne-hLNfKsw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GCPwks70MKl3kScgyAhpQpHzvWOyWihEVOVZ61pLne-hLNfKsw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT0RvIa8SsIscP7ycGbHXZ9HIE724NvCl8odNj3a7yIjjPqd_',
       ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT0RvIa8SsIscP7ycGbHXZ9HIE724NvCl8odNj3a7yIjjPqd_'
    ]
    cards.forEach(card =>{ 
        const image = card.querySelector('.front-face');
        image.setAttribute('src' ,getRandomCard());
        card.addEventListener('click', flipCard)
    });
}

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;

    checkForMatch();

}


function checkForMatch() {
    if (firstCard.children[1].src === secondCard.children[1].src) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function getRandomCard() {
    const index = Math.floor(Math.random() * images.length);
    return images.splice(index, 1);
}


