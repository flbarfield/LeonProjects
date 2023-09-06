//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTVShow {
    constructor (name, length, rating, language) {
        this.name = name;
        this.length = length;
        this.rating = rating;
        this.language = language;
    }
    stop () {
        console.log('comon and FREEZE')
    }
    rewind () {
        console.log('zzzzzZZZZzzzuurrrppp!')
    }
    start () {
        console.log('starting!')
    }

}
