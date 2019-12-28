/*Destructive object assignment*/
/*
let person = {
    firstName: 'Slava',
    lastName: 'Romantsov'
};
*/
// in es5
/*
let firstName = person.firstName;
let lastName = person.lastName;
*/


// in es6 like destructive array assignment
// now you set the variables and eject values of properties from object person
// Important: names of variables and properties must be matched
/*
let {firstName, lastName} = person;
console.log(firstName, lastName);
*/

// If you want use other name of variable you write like this
// at first you write name of property, then : and then name of variable
/*
let {firstName: first, lastName: last} = person;
console.log(first, last); // Slava Romantsov
*/

// you don't need more write object at first
// also you can write default value
/*
let {firstName: first, lastName: last, age = 31 + ' years'} = {
    firstName: 'Slava',
    lastName: 'Romantsov'
};
console.log(first, last, age); // Slava Romantsov
*/
let user = {
    firstName: 'Slava',
    lastName: 'Romantsov',
    social: {
        facebook: 'slavaromantsov31',
        twitter: '@leftnail'
    }
}

let {firstName: first, lastName: last,social: {facebook: fb}, age = 31} = user;

console.log(first, last, fb, age);