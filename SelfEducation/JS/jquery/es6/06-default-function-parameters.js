/*function parameteres*/
// You can send into function more or less parameteres.
// In ES6 have 2 innovations about work with functions:
// - default parameters
// - rest parameters

// Default parameters.
function greet(greeting, name) {
    console.log(`${greeting} ${name}`);
}

greet('hi', 'Slava'); // hi Slava
greet('hi'); // hi undefined
greet(undefined, 'Slava'); // undefined Slava
greet(); // undefined undefined

// This is a very bad algorithm to test parameters
function greeting(greet, name) {
    if (greet !== undefined && name !== undefined) {
        console.log(greet + ' ' + name + '!');
    } else if (greet === undefined && name !== undefined) {
        console.log('hello ' + name);
    } else if (greet !== undefined && name === undefined) {
        console.log(greet + ' friend');
    } else {
        console.log(`hello friend`)
    }
}

greeting(); // hello friend


// This is default parameters it's awesome
function sayHello(hello = 'hello', name = 'friend!!!') {
    console.log(`${hello} ${name}`);
}

sayHello(); // hello friend!!!


// Rest parameters
function sum() {
    console.log(arguments instanceof Array);

    var sum = 0;

    Array.prototype.forEach.call(arguments, function (value) {
        sum += value
    });

    console.log(sum);
}

function sum(...values) {
    console.log(values instanceof Array); // true

    let sum = 0;

    values.forEach(function (value) {
        sum += value;
    });

    console.log(sum); // 24
}

//use spread operator
function sum(...values) {
    console.log(values instanceof Array); // true

    let sum = 0;

    values.forEach(function (value) {
        sum += value;
    });

    console.log(sum); // 24
}

function sum(...values) {
    values.reduce(function (prevValue, currentValue) {
       return prevValue + currentValue;
    });
}
sum(5,7,2,10);


