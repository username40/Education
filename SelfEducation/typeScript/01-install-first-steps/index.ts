// zero - npm i -g typescript
// first write in terminal tsc --init
// if you need to compile this file you should write in terminal tsc index.ts

let str: string = 'string';
str = '16';

let num: number = 10;
//num = str bad idea(

let isTrue: boolean = true
let isFalse: boolean = false

isTrue = false // ok no problems
// isTrue = 1 bad idea(

// i don't understand for what we have strict types if we can put in let any value
// #pain
let anyVal: any = '1'

anyVal = 1

// but if you need to put some types (for ex only str or num) yu can do that
let notAnyVal: string | number = '1'

notAnyVal = 1 // no problem

notAnyVal = 33.76 // no problem

//notAnyVal = false bad idea
