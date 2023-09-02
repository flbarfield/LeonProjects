//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeFightCharacter (cName, specialMove, movementSpeed, moodAnimation) {
    this.name = cName
    this.special = specialMove
    this.speed = movementSpeed
    this.mood = moodAnimation

    this.idleAnimation = function () {
        console.log('I aint doing shit!')
    }
    this.runAnimation = function () {
        console.log('NARUTO RUN')
    }
    this.tauntAnimation = function () {
        console.log('YOU\'RE TRASH.')
    }
}

let ryu = new MakeFightCharacter('Ryu', 'HADUKEN', 50, 'stoic')
let naruto = new MakeFightCharacter('Naruto', 'ShadowClone Jutsu', 85, 'energetic')
let scorpion = new MakeFightCharacter('Scorpion', 'GET OVER HERE', 30, 'tough')