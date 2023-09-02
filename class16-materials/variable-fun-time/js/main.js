//--- Easy
//create a variable and assign it a number
let num1 = 0
//minus 10 from that number
num1 -= 10
//print that number to the console
console.log(num1)
//--- Medium
//create a variable that holds a value from the input
let numCapture = document.getElementById('danceDanceRevolution').value
//add 25 to that number
numCapture += 25
//alert that number
alert(numCapture)
//--- Hard
//create a variable that holds the h1
let h1Var = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1Var.addEventListener('click', sum)

function sum(){
    console.log(num1 + Number(numCapture))
}
