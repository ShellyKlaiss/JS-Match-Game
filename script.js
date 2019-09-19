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
resetCardCount();  
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

// add delay to modal

let cardCounter = 0; // make scope not global

function checkForMatch() {
    if (firstCard.children[1].src === secondCard.children[1].src) {
        cardCounter++;
        // console.log(cardCounter);
        if(cardCounter === 6){
            modalWindow();
            delayedModalWindow();   
        }
        disableCards();
    } else {
        unflipCards();
    }
}

function modalWindow() {
    if(cardCounter === 6){
        modal = function(event){
            modal.style.display = "block";

        }            span.onclick = function() {
            modal.style.display = "none";
          }
          window = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
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
var timer = document.getElementById('myCounter').innerHTML;
var interval;

function onTimer() {
    interval = setInterval(function () {
        myCounter.innerHTML = minute + "mins " + second + "secs";
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
    var timer = document.getElementById('myCounter').innerHTML;
    myCounter.innerHTML = "0 mins 0 secs";
    clearInterval(interval)
    console.log(second)
}

function resetCardCount() {
    cardCounter = 0;
}

const timeoutID;

function delayedModalWindow() {
  timeoutID = window.setTimeout( event => {
      document.getElementsByClassName('.modal')
  },1500);
};

const myModal = document.getElementById("myModal");
const modal = document.getElementsByClassName("modal");
const span = document.getElementsByClassName("close")[0];
const window = document.getElementsByClassName("modal-content");
