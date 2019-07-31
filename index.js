let dice = {
   1: 'images/dice1.png',
   2: 'images/dice2.png',
   3: 'images/dice3.png',
   4: 'images/dice4.png',
   5: 'images/dice5.png',
   6: 'images/dice6.png'
};
let scores = {
   player1: 0,
   player2: 0
};
let diceNum1 = 6;
let diceNum2 = 6;
let winner = document.querySelector('h1');
if (window.performance) {
   console.info('window.performance works fine on this browser');
}

function myRefresh() {
   diceNum1 = Math.floor(Math.random() * 6) + 1;
   diceNum2 = Math.floor(Math.random() * 6) + 1;
   while (diceNum1 === diceNum2) {
      diceNum1 = Math.floor(Math.random() * 6) + 1;
      diceNum2 = Math.floor(Math.random() * 6) + 1;
   }
   document.querySelector('.img1').setAttribute('src', dice[diceNum1]);
   document.querySelector('.img2').setAttribute('src', dice[diceNum2]);
   if (diceNum1 > diceNum2) {
      winner.textContent = '🎉 Player 1 Wins';
      let score = document.querySelector('.scoreP1 .card-body');
      scores.player1 = scores.player1 + 1;
      score.textContent = scores.player1;
   } else {
      winner.textContent = 'Player 2 Wins 🎉';
      let score = document.querySelector('.scoreP2 .card-body');
      scores.player2 = scores.player2 + 1;
      score.textContent = scores.player2;
   }
}
