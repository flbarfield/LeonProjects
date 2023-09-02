document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.getElementById('day').value.toUpperCase()
  
  if (day === 'TUESDAY' || day === 'THURSDAY') {
    document.getElementById('placeToSee').innerHTML = 'IT\'S CLASS TIME BOIS'
  }
    else if (day === 'SATURDAY' || day === 'SUNDAY') {
    document.getElementById('placeToSee').innerHTML = 'WEEKEND! YOOOO!'
    }
    else {
      document.getElementById('placeToSee').innerHTML = 'Booooriiiing....'
    }
}