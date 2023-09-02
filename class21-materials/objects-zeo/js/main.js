//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.brand = 'bababo'
stopwatch.faceShape = 'diamond'
stopwatch.color = 'purple'
stopwatch.material = 'rubber'

stopwatch.timeSet = function (){
    console.log('Time set')
}

stopwatch.startTimer = function (){
    console.log('Time running')
}



stopwatch.ringAlarm = function (){
    console.log('RINGING')
}