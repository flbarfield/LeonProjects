//Create a constructor with 4 properties and 3 methods
function MakePizza (toppings, sauce, crust, cutShape) {
    this.toppings = toppings
    this.sauce = sauce
    this.crust = crust
    this.cutShape = cutShape

    this.burnMouth = function () {
        console.log('FFFFffffFFffFgksajdklgjaksdfjg')
    }

    this.frisbee = function (){
        console.log('ZOOOOOOOOOOOM')
    }

    this.deliver = function () {
        console.log('Your pizza has arrived!')
    }
}

