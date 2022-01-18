// ELEMENTS ON PAGE
let score0 = document.querySelector('.score0');
const score1 = document.querySelector('.score1');
const cards0 = document.querySelector('#hitCard0');
const cards1 = document.querySelector('.cards1');
const p1c1 = document.querySelector('#p1-card1');
const p1c2 = document.querySelector('#p1-card2');
const p2c1 = document.querySelector('#p2-card1');
const p2c2 = document.querySelector('#p2-card2');

// BUTTONS
const controls0 = document.querySelector('.controls0');
const controls1 = document.querySelector('.controls1');
const hit0 = document.querySelector('#hit0');
const hold0 = document.querySelector('#hold0');
const hit1 = document.querySelector('#hit1');
const hold1 = document.querySelector('#hold1');
const dealer = document.querySelector('#dealer')

let cards = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
const deal = () => cards[Math.floor(Math.random() * cards.length)];

currentScore0 = 0;
currentScore1 = 0;

dealer.addEventListener('click', function() {
    let playerOneCardOne = deal();
    let playerOneCardTwo = deal();
    let playerTwoCardOne = deal();
    let playerTwoCardTwo = deal();

    let deal1 = playerOneCardOne + playerOneCardTwo;
    let deal2 = playerTwoCardOne + playerTwoCardTwo;

    currentScore0 = deal1;
    score0.textContent = currentScore0;
    p1c1.textContent = playerOneCardOne;
    p1c2.textContent = playerOneCardTwo;

    score1.textContent = deal2;
    p2c1.textContent = playerTwoCardOne;
    p2c2.textContent = playerTwoCardTwo;

    dealer.style = "display: none";
    controls0.style = "display: block;"
    controls1.style = "display: block;"
});

hit0.addEventListener('click', function() {
    let hit = deal();
    cards0.textContent += hit;

})


