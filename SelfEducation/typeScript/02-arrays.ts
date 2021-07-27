let numArray: number[] = [1,2,3]; // you can tell array what contains inside

let numStrArr = [1,2,3, '123']; // or you can not do this, but in your array can take any data

let typicalStrNumArr: (number | string)[] = [1,2,3, '123']; // also you can tell what types of data must contains in your array

let genericNumStrArr: Array<(number | string)> = [1,2,3, '123']; // also you can use generic 

let tupleNumStrArr: [number, number, number, string] = [1,2,3, '123']; // also ts have a tuple but i"m not sure that is a good idea
// because you can have a situation that you have array with a lot of elements (for ex. 700+) and so what? you will use tuple
// and write types for all elements?


