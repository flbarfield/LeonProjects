// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentance = 'aaay lmao?'
if (sentance.endsWith('?')) {
    alert('This is a question!!!')
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multiWord = 'Hey I am a jr. dev trying to make my place within the world.'
console.log(multiWord)
console.log(multiWord.replace('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let roPaSci = function () {
    let result = Math.random()
    if (result < .33) {
        return 'rock'
    } else if (result < .66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
let playerChoice = function (choice) {
    let botChoice = roPaSci()
    if (choice === 'rock' && botChoice === 'scissors' || choice == 'paper' && botChoice === 'rock' || choice === 'scissors' && botChoice === 'paper') {
        console.log('You win!')
    } else if (choice === botChoice){
        console.log('It\'s a draw...')
    } else {
        console.log('You....LOSEEEEE. LOSERRRRRRR!')
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let playTime = function(arrayOfChoices){
    arrayOfChoices.forEach(choice => {
        console.log(playerChoice(choice))
    });
}
