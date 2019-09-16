const cards = document.querySelectorAll('.memory-card');
const card = document.querySelectorAll('.memory-game');
let images = [];

function startGame() {
    images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlUXJX9-N-gWxdKEC0uBnhsPl-UA1chnxyiA3osoZ7IKf2IgN4w',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlUXJX9-N-gWxdKEC0uBnhsPl-UA1chnxyiA3osoZ7IKf2IgN4w',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7gtGKGkDC21XIkpQpLcEPBmLffDYyWR7TOla4s3WtQnVfV8z',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7gtGKGkDC21XIkpQpLcEPBmLffDYyWR7TOla4s3WtQnVfV8z',
        'https://media2.fdncms.com/metrotimes/imager/u/original/9315911/background-of-valentine_s-day-conversation-hearts-candy-870964280_1258x838.jpeg',
        'https://media2.fdncms.com/metrotimes/imager/u/original/9315911/background-of-valentine_s-day-conversation-hearts-candy-870964280_1258x838.jpeg',
        'https://images-na.ssl-images-amazon.com/images/I/819mKKHWtUL._SY355_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/819mKKHWtUL._SY355_.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GCPwks70MKl3kScgyAhpQpHzvWOyWihEVOVZ61pLne-hLNfKsw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GCPwks70MKl3kScgyAhpQpHzvWOyWihEVOVZ61pLne-hLNfKsw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT0RvIa8SsIscP7ycGbHXZ9HIE724NvCl8odNj3a7yIjjPqd_',
        ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT0RvIa8SsIscP7ycGbHXZ9HIE724NvCl8odNj3a7yIjjPqd_'
    ]

    cards.forEach(card => {
        const image = card.querySelector('.front-face');
        image.setAttribute('src', getRandomCard());
        card.addEventListener('click', flipCard);
    });
    onTimer();
}

function resetGame() {
    if ((firstCard.children[1].src === secondCard.children[1].src) || (ard.childrenfirstC[1].src !== secondCard.children[1].src)) {

        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

           resetBoard();
        }, 1);

        resetTimer();
    }
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

function resetCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
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
cards.forEach(card => card.addEventListener('click', flipCard));

// Timer
// var myTimer = setInterval(onTimer, 1000);
// i = 60;

// function onTimer() {
//   document.getElementById('mycounter').innerHTML = i;
//   i--;
//   if (i < 0) {
//     alert('Times up!');
//   }
//   else {
//     setTimeout(onTimer, 1000);
//   }
// }

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
}