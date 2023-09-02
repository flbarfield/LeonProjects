// *Variables*
// Declare a variable, assign it a value, and alert the value
let ayy = 0
console.log(ayy)
// Create a variable, divide it by 10, and console log the value
let yo = 5
console.log(yo/10)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function mul3 (n1, n2, n3) {
    let product = n1*n2*n3 
    alert(product)
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addSub (n1, n2, n3, n4) {
    let setOne = n1+n2
    let setTwo = n3-n4
    console.log(setOne, setTwo)
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function winna (n1, n2, n3){
    let result = (100 + n1 - n2)/n3 
    if (result > 25){
        console.log('WE HAVE A WINNAAAAAH')
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function weekdayOrWhat (day) {
    let dayEntered = day
    if (dayEntered === 'saturday' || dayEntered === 'sunday') {
        alert('WEEKEND')
    } else if (dayEntered === 'monday' ||dayEntered === 'tuesday' ||dayEntered === 'wednesday' ||dayEntered === 'thursday' ||dayEntered === 'friday'){
        alert('weekday...')
    } else {
        console.log('Try Again!')
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function greatLoop (n1) {
    for (i = 1; i >= n1; i += 3) {
        console.log(i)
    }
}