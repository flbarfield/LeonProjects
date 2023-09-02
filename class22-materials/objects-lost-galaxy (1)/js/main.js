//Create a mouse object that has four properties and three methods

let table = {
    numOfLegs: 4,
    color: 'brown',
    shape: 'rectangle',

    sit : function () {
        console.log('Ayyy, take a seat')
    }
}

let mouse = {}
mouse.brand = 'Logitech'
mouse.color = 'black'
mouse.model = 'MX Ergo'
mouse.wireless = true

mouse.leftClick = function () {
    console.log('LEFT CLICKKKKK')
}

mouse.rightClick = function() {
    console.log('RIGHT CLIKKKKK')
}

mouse.scroll = function () {
    console.log('JUMP JUMP JUMP')
}


function MakeMouse(mouseMake, mouseModel) {
    this.make = mouseMake
    this.model = mouseModel
}