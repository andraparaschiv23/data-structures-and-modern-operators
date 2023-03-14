'use strict';

//Short circuiting (&& and ||)

// Use ANY data type, return ANY data type, short-circuiting
//if at least one value is true, the OR operator will return true value
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//OR will return the first truthy of all the operands or the last value if all are falsy
console.log('-----OR-----');
console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); //Jonas ; '' is a falsy value
console.log(true || 0); //true
console.log(undefined || null); //null (even if undefined and null are falsy)
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//restaurant.numGuests = 20; //issue when numGuests = 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--------AND--------'); //AND operator will return the first falsy value or the last value if all are truthy
console.log(0 && 'Jonas'); // 0 -> evaluates first element which is false and doesn't continue forward
console.log(7 && 'Jonas'); //Jonas -> evaluates first element which is true, then move to the second one which is true also and return it
console.log('Hello' && 23 && null && 'jonas'); //null

//Practical examples
//check if orderPizza existss and if yes, return
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //exactly as if block do;
