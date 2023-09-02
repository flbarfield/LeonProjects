//Write your pseduo code first! 

document.getElementById('boop').addEventListener('click', convert)


function convert(){
    // store current temp from user, likely from a input field
    let temp = document.getElementById('temperature').value
    //run the set conversion calc
    temp = temp * 9/5 + 32
    //print c temp onto the screen as the conversion.
    document.querySelector('h1').innerHTML = temp
}