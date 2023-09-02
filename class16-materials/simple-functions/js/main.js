//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub(n1, n2) {
    alert(n1 - n2)
}

//create a function that divides three numbers and console logs the quotient
function div3 (n1, n2, n3){
    console.log(n1/n2/n3)
}
//create a function that multiplys three numbers and returns the product
function mult3(num1, num2, num3){
    return (num1*num2*num3)
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function mod (n1, n2, n3){
    let num = n1 + n2
    return(num % n3)
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function wowWee (n1, n2, n3, n4) {
    let mult = n1 * n2
    if (mult > 100){
        console.log(n3 + n4)
    } else if (mult < 100){
        console.log(n3 - n4)
    } else if (mult = 100){
        let mult2 = n1 * n2 * n3
        console.log(mult2 % n4)
    }
}