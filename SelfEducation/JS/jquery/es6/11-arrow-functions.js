/*Arrow functions*/

// arrow functions more small than ordinary function
// they use =>, not have a name a have differences when working with this

//this is ordinary function
function add(x,y) {
    return x + y;
}

console.log(add(2 ,5));



// arrow function don't have a name and you can't call it
// you can do it if write function expression
let sum = (a, b) => a + b;

console.log(sum(2, 6));
console.log(typeof sum);


// if function have only one parameter you don't need more use ()
let square = x => x * x;

console.log(square(4));

// if function don't have a name you must use ()
let giveMeAnswer = () => 42;

console.log(giveMeAnswer());

let logging = () => console.log('logging');

logging();

// if in arrow function more than 1 line you must use {}
// and function must returns something
let multiply = (x, y) => {
    let result = x * y;
    return result;
}

console.log(multiply(7, 8));

// if you work with objects in arrow functions you must cover it in ()
let getPerson = () => ({name: 'Slava'});

console.log(getPerson());

// immediately invoked function expression
// you write a function and call it immediately when write second ()
// use ; in the end of command in the body of function is error, don't use it
// you can use it only in one line
(() => console.log('IIFE'))();

let numbers = [1,2,3,4,5,6,7,8,9,10];

let summury = 0;
numbers.forEach(num => summury += num);

let squared = numbers.map(n => n * n);

console.log(summury);
console.log(squared);

// in es5
/*
let secondPerson = {
  name: 'Slava',
  greet: function() {
      var that = this;
      setTimeout(function() {
          console.log('Hello, my name is ' + that.name);
          console.log(this);
          console.log('this is ', this);
          console.log('that is ', that)
      }, 2000)

  }
};
*/

//in es6
let secondPerson = {
    name: 'Slava',
    greet: function() {
        setTimeout(() =>{
            console.log('Hello, my name is ' + this.name);
            console.log(this);
            console.log('this is ', this);
    }, 2000)

    }
};

secondPerson.greet();

// you can't use arrow functions in constructor of object
// you cant use methods bind(), call(), apply()