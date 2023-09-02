//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

const NewSkater = function (name, species, hairStyle, skateboardColor){
    this.name = name
    this.species = species
    this.hairStyle = hairStyle
    this.skateboardColor = skateboardColor

    this.kickflip = function () {
        console.log('AAAY, KICKFLIPPERO')
    }

    this.slogan = function () {
        console.log('Look at me goooooooo!')
    }

    this.grind = function () {
        console.log('skuuuurrrrrrrrrr')
    }
}

