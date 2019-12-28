/*Destructive array assignment*/

//let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// in es5
/*
let js = languages[0];
let php = languages[1];
let python = languages[2];
let ruby = languages[3];
*/

//in es6
/*
let [js, php, python, ruby] = languages;
*/
// or you can write like this
let [js, php, python, ruby] = ['JavaScript', 'PHP', 'Python', 'Ruby'];
console.log(js, php, python, ruby);

let scores = [3,4];
/*
let [low, mid, high, higher] = scores;
console.log(low, mid, high, higher); // higher is undefined
*/
// you can use spread operator
/*
let [low, ...rest] = scores;
console.log(low, rest);
*/
// also you can use default value
let [low, mid, high = 5] = scores;
console.log(low, mid, high);


// you can use it in functions
function computeScore([low, mid]) {
    console.log(low, mid);
}

computeScore([3,4]);

function getScores() {
    return [3,4,5];
}

let score = getScores();
console.log(score);

let [three, four, five] = getScores();
console.log(three, four, five);

