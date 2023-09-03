//Create a pizza object that has four properties and three methods

let pizza = {
    toppings: 'pepperoni',
    sauce: 'tomato',
    crust: 'STUFFED',
    cutShape: 'square',

    serve: function () {
        console.log('your za is served!')
    },

    deliver: function() {
        console.log('Your pizza has ARRIVED')
    },

    mold: function () {
        console.log('EW, your pizza is all moldy.')
    }
} 