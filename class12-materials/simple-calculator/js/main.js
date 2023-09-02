let total = 0

document.getElementById('pumpkin').addEventListener('click', add0)
document.getElementById('dominosPizza').addEventListener('click', add3)
document.getElementById('zebra').addEventListener('click', add9)
document.getElementById('cantThinkOfAnything').addEventListener('click', sub2)
document.getElementById('aaayLmao').addEventListener('click', add420)
document.getElementById('placeToPutResult').innerText = total


function add0 () {
  total = 0
  document.getElementById('placeToPutResult').innerText = total
} 

function add3() {
  total += 3
  document.getElementById('placeToPutResult').innerText = total
}

function add9() {
  total += 9
  document.getElementById('placeToPutResult').innerText = total
}

function sub2() {
  total -= 2
  document.getElementById('placeToPutResult').innerText = total
}

function add420() {
  total += 420
  document.getElementById('placeToPutResult').innerText = total
}