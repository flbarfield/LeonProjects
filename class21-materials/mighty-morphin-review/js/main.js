// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = ''
holiday = 'crimmas'
console.log(holiday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let lastThree = 'stringy'
alert(lastThree.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function negFive (n1, n2, n3, n4, n5){
    let differenceNum = 100 - n1 - n2 - n3 - n4 - n5 

    alert(Math.abs(differenceNum))
}
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowAndHigh (n1, n2, n3) {
    let min = Math.min(n1, n2, n3)
    let max = Math.max(n1, n2, n3)
    console.log(min, max)
}


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headOrTails (){
    let result = Math.random()
    if (result < .5){
        return('heads')
    } else {
        return('tails')
    }
}

// console.log(headOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function repeatFlip (timesRepeated) {
    for (let i = 1; i <= timesRepeated; i++) {
        let result = headOrTails()
        console.log(result)
    }
}