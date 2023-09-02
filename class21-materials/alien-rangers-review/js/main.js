//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ['peeWees Play House', 'blues clues', 'degrassi']
shows.forEach(show => {
    console.log(show)
});
//Create and array of numbers

let numArray = [12, 455, 234, 5908512]
//Return a new array of numbers that includes every even number from the previous Arrays

let onlyEvens = arr => arr.filter(n => n%2 === 0)
console.log(onlyEvens(numArray))

// let newArray = []


// for (let i = 1; i < numArray.length - 1; 2++) {
//     newArray += numArray[i] 
// }
// return(newArray)


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function lowAndHigh(array){
    let sorted = array.sort((a, b)=> a-b)
    let secondLow = sorted[1]
    let secondHigh = sorted[sorted.length-2]
    alert(secondLow + secondHigh)
}

lowAndHigh([2,3,1,5,4])