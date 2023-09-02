// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drank = 'pixieberry tea'
console.log(drank.trim())
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multiWord = 'juice banana peanutbutter apple'
console.log(multiWord.includes('apple'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function roPaSci () {
    num = Math.random()
    if (num < 0.33) {
        return('rock')
    } if (num < 0.66) {
        return('paper')
    } else {
        return('scissors')
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin (playerChoice) {
    let botResult = roPaSci()
    if (playerChoice === 'rock' && botResult ==='scissors' || playerChoice === 'paper' && botResult ==='rock' || playerChoice === 'scissors' && botResult ==='paper' ) {
        console.log('You win!')
    } else if (playerChoice === botResult){
        console.log('It\'s a tie! Try again!')
    } else {
        console.log('You lose!')
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function gameTime (array) {
    array.forEach(choice => {
        checkWin(choice)
    });
}