// @ts-check

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/*
Create a generateTarget() function. This function will be called at the start of each new round in order to generate the new secret target number.

This function should return a random integer between 0 and 9.
*/
const generateTarget = () => {
    console.log Math.floor(Math.random() * 10)}
    
/* 
Create a compareGuesses() function. 
This function will be called each round to determine which guess is closest to the target number.

This function:
* Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
* Determines which player (human or computer) wins based on which guess is closest to the target. 
* If both players are tied, the human user should win.
* Return true if the human player wins, and false if the computer player wins.
*/

const compareGuesses = (userInput, computer, target) => {
    target = generateTarget
    if (Math.abs(userInput - target) < Maths.abs(computer - target)) {
        return true;
    } else if (Math.abs(computer - target) < Maths.abs(userInput - target)) {
        return false;
    } else ((userInput === target) && (computer === target)); {
        return true;
    };
}


const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1
}