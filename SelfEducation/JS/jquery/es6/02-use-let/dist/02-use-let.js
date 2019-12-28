'use strict';

/*Use let*/

// in JS, namely ES5 has 2 scopes - global & in borders of function.
// in ES6 has new scope - block of code {}
// if you want to use this scope you must use let instead var
// let you can use for variables with limited scope
/*
if (true) {
    var version = 'ES5';
}

console.log(version);// no problem with console.log
*/

/*
if (true) {
    let version = 'ES6';
}

console.log(version);// Uncaught ReferenceError: version is not defined
*/
// This situation is happened because let has block scope and outside {}
// javascript don't see this.
// Babel transpilled let version in var _version.
// But in console.log version without _

// hoisting in let.
// let is NOT rise
/*
console.log(version);// Uncaught ReferenceError: version is not defined
let version = 'ES6';
*/
// if you change let to var your result is undefined
// it's look like this
/*
var version;
console.log(version);// undefined
*/

// In this example if you click in any button in console show 5
// But why?
// Because var i it's global variable and all functions see him
// but if you use let i correct everything is ok! )))
var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.innerHTML = i;
    button.onclick = function (e) {
        console.log(i);
    };
}

// let make your code and results more understandable