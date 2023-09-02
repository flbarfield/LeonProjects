//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.getElementById('help').addEventListener('click', sthap)

function sthap () {
    let FItems = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerHTML = ''
    
    for (let i = 1; i <= FItems; i++) {
        document.getElementById('stops').innerHTML += ' STOP'
        FItems = FItems--
    }
}