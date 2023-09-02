document.getElementById('purple').addEventListener('click', purpleParty)
document.getElementById('green').addEventListener('click', greenParty)
document.getElementById('blue').addEventListener('click', blueParty)
document.getElementById('black').addEventListener('click', blackParty)

function purpleParty() {
  document.querySelector('body').style.backgroundColor = 'purple'
  document.querySelector('body').style.color = 'white'
}

function greenParty() {
  document.querySelector('body').style.backgroundColor = 'green'
  document.querySelector('body').style.color = 'white'
}

function blueParty() {
  document.querySelector('body').style.backgroundColor = 'blue'
  document.querySelector('body').style.color = 'white'
}

function blackParty() {
  document.querySelector('body').style.backgroundColor = 'black'
  document.querySelector('body').style.color = 'white'
}