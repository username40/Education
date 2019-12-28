/*Symbols*/

// Symbol is a primitive data type such as var, string boolean...
let symbol = Symbol('name');
let symbol2 = Symbol('name');
// let symbol = new Symbol(); // Uncaught TypeError: Symbol is not a constructor
console.log(symbol);
console.log(typeof symbol);
console.log(symbol2);
console.log(typeof symbol2);
// each symbol is unique
console.log(symbol === symbol2); // false

// When you use .for symbol try to find symbol for name.
let symbol3 = Symbol.for('name');
let symbol4 = Symbol.for('name');
console.log(symbol3 === symbol4) // true

// If value in symbol5 is empty returns undefined
let symbol5 = Symbol.for('name');
let name = Symbol.keyFor(symbol5);
console.log(name); // name

let user = {
    username: 'r2d2',
    [Symbol.for('password')]: 'c3po',
    password: 'asdasd'
};

console.log(user.password); // undefined // asdasd - after add in object
// password property
console.log(Object.keys(user)); // ["username"]
console.log(Object.getOwnPropertyNames(user)); // ["username"]

let password = user[Symbol.for('password')];
console.log(password); // undefined
// then i go to let user and add .for for symbol
console.log(password); // c3po

// In ES6 have method who helps watch symbols from object
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(password)]

// What symbols are maded for?
// They made for get away from conflict of property names

