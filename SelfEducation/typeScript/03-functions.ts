// functions can return something or not return something

// if function return something you should write it after ()
// also if you have args you can validate it write a data type
function returnNum(num: number): number {
    return num
}

console.log(returnNum(500));

// if function nothing to return
// just write :void
// also you can use default value in your arguments like es6
// you can do it after type
function nothingReturn(str: string = 'Default String'): void {
    console.log(str);
}

nothingReturn('Hello TS!')
nothingReturn()

// also someday may be you need create variable and then assign function
// you should say this variable that you will be a function
// i think this is very stupid way to say it
// for me easy to say :function or : ()
// but TS doesn't know about this
// problems that we have
// if someday you need to change a code in your function
// you may be need to change it here
let sumFunction: (a: number, b: number) => number;

function sum(num1: number, num2: number): number {
    return num1 + num2
}


sumFunction = sum

console.log(sumFunction(10, 10));
