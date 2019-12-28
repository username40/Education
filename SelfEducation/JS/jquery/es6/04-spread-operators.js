/*Use spread operators*/

// Spread operator looks like ...
// helps unwrap of array elements for broadcast in function arguments
// or in elements in other array

let array1 = [0,1,2];
/*
let array2 = [array1, 3,4,5];

console.log(array2);// [[0, 1, 2], 3, 4, 5]
*/
let array2 = [...array1, 3, 4, 5];

console.log(array2);// [0, 1, 2, 3, 4, 5]

function add(x,y,z) {
    console.log(x+y+z);
}

let numbers = [1,2,3];

add(numbers);// 1,2,3undefinedundefined
add(...numbers);// 6

