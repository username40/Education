/*for of*/

let browsers = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'];

for (let browser in browsers) {
    console.log(browser);
}

for (let index in browsers) {
    console.log(browsers[index]);
}


// You don't need more use [index] when you need get array values
for (let browser of browsers) {
    console.log(browser);// Chrome Firefox Safari Edge Opera
}

console.log(browsers);