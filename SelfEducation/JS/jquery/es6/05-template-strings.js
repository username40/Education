/*Template strings*/

function greet(name) {
    console.log('hello ' + name + '!');

    // if we write like this, code must be more easier to read
    console.log(`hello ${name}!`);

    // if we looks to type of in console we will see string type
    console.log(typeof `hello ${name}!`);

    // babel complied it in this code
    // console.log('hello ' + name + '!');
}

greet('bill');

function createEmail(to, from, subject, message) {
    console.log(`
    To: ${to} 
    From: ${from} 
    Subject: ${subject} 
    Message: ${message}`);

    // babel compilied it like upper example but use \n
    // \n    To: ' + to + ' \n    From: ' + from + ' \n...
}

createEmail('first@mail.ru', 'second@mail.ru', 'One more thing', 'Hey, how' +
    ' are you');

// You can use arithmetic in template strings
function add(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);

    // but if you use parseInt you see mathematic answer
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add(5, 7); // 5 + 7 = 12

// concate strings
add('5', '7'); // 5 + 7 = 57

// You can use template strings everywhere
let name = 'Slava';
let surname = 'Romantsov';
console.log(`Hello ${name} ${surname}`);

