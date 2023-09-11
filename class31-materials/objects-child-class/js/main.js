//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name, sound, legs) {
        this.name = name
        this.sound = sound
        this.legs = legs
    }
    speak() {
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }
}

let simba = new Dog('Simba', 'Shepard')