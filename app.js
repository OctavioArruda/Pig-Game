/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Variables declaration
let scores, roundScore, activePlayer, dice;

// Variables initialization
scores = [0, 0];
roundScore = 0;
activePlayer = 0; // 0 = first player, 1 = second player


// DOM Manipulation
document.querySelector('#current-' + activePlayer).textContent = dice;
document.querySelector('.dice').style.display = 'none';

document.querySelector('score-0').textContent = '0';
document.querySelector('score-1').textContent = '0';
document.querySelector('current-0').textContent = '0';
document.querySelector('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    dice = Math.floor(Math.random() * 6) + 1;
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
});

//document.querySelector('.dice').style.display = 'none';