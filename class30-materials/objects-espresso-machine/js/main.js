//Create an espresso machine class that makes machines with 4 properties and 3 methods

class ExpressoMachine {
    constructor (model, purpose, size, color) {
        this.model = model
        this.purpose = purpose
        this.size = size
        this.color = color
    }
    roboSlogan () {
        console.log('BBEEP BEEP BURRRR')
    }

    turnOff () {
        console.log('POwering...DOoownnnn')
    }

    turnOn () {
        console.log('<generic windows 98 boot up noises>')
    }
}