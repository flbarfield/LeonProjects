//Write your pseduo code first! 
//obtain current temp in C, at button press by user
document.getElementById('button').addEventListener('click', conversion)
// run a function after button press to run conversion
function conversion () {
   let temp = document.getElementById('userInput').value
   temp = temp * 9/5 + 32
   document.querySelector('h1').innerHTML = temp
}
//display conversion to user.