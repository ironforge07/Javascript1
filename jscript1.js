let score = 0;
let comp = 0;

let choices = ['rock', 'paper', 'scissors'];
let computerPlay = choices[Math.floor(Math.random() * choices.length)];
const myChoice = prompt(`Do you choose rock, paper, or scissors?`);
const myIndex = choices.indexOf(myChoice);

const checkWinner = function(i) {
	if (i === choices.indexOf(computerPlay)) console.log('draw!');
	else if (i === 0 && computerPlay === 'scissors') score++;
	else if (i === 2 && computerPlay === 'rock') comp++;
	else if (i < choices.indexOf(computerPlay)) comp++;
	else if (i > choices.indexOf(computerPlay)) score++;
	console.log(`You picked ${myChoice}, and the computer picked ${computerPlay}.`,
							'My score: ' + score,
							'Computer score: ' + comp);
};

checkWinner(myIndex);