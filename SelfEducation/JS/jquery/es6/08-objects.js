/*Objects*/

let firstName = 'Slava';
let lastName = 'Romantsov';
let email = 'mr.v.e.romantsov@gmail.com';

let person = {
    firstName: firstName,
    lastName: lastName,
    email: email
};


// Now if you write in console person.fullName you see Slava Romantsov

console.log(person);

// in ES6 if name of value matches a name of variable you can write only name
// of variable
// if you want to write a function in object you don't need more write a
// function, you can write like this sayHello()
let secondPerson = {
    firstName,
    lastName,
    email,
    sayHello () {
        console.log(`Hi! My name is ${this.firstName} ${this.lastName}`)
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }

};
// Now if you write in console person.fullName you see Slava Romantsov

/*
Object.defineProperty(secondPerson, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    }
})
*/
console.log(secondPerson);
secondPerson.sayHello();

// if you want use property of object you can write like this:
secondPerson.firstName;
// or
secondPerson['firstName']; // here you an write property of object or variable
// name

let property = 'firstName';

console.log(secondPerson[property]);// Slava

property = 'lastName';
console.log(secondPerson[property]);// Romantsov

// you can dinamically add values in ojbject
function createCar(property, value) {
    var car = {};
    car[property] = value;

    return car;
}

console.log(createCar('vin', 1));

// you can make some manipulations with property
function createOneMoreCar(property, value) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return this[property];
        }
    };
}

console.log(createOneMoreCar('vin', 2));