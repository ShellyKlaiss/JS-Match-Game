const cards = document.querySelectorAll('.memory-card');
const card = document.querySelectorAll('.memory-game');
let images = [];

function startGame() {
    images = [
        'images/vernors.png',
        'images/vernors.png',
        'images/better_made.png',
        'images/better_made.png',
        'images/faygo.png',
        'images/faygo.png',
        'images/coney_dog.png',
        'images/coney_dog.png',
        'images/cider_donuts.png',
        'images/cider_donuts.png',
        'images/fudge.png',
        'images/fudge.png'
]

    cards.forEach(card => {
        const image = card.querySelector('.front-face');
        image.setAttribute('src', getRandomCard());
        card.addEventListener('click', flipCard);
    });
    onTimer();
}

function resetGame() {
    resetTimer();

    cards.forEach(card => {
        card.classList.remove('flip');
    })
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

var second = 0,
    minute = 0;
hour = 0;
var timer = document.getElementById('mycounter').innerHTML;
var interval;

function onTimer() {
    interval = setInterval(function () {
        mycounter.innerHTML = minute + "mins " + second + "secs";
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}

function resetTimer() {
    second = 0;
    minute = 0;
    hour = 0;
    var timer = document.getElementById('mycounter').innerHTML;
    mycounter.innerHTML = "0 mins 0 secs";
    clearInterval(interval)
    console.log(second)
}