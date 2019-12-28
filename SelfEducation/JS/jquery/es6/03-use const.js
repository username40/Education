/*Use const*/

// Besides var & let ES6 has const (constant)
// Values in const NOT changing

// in many languages, also JS, name of constants must be written in
// capital letters.
/*
const PI = 3.14159;
console.log(PI);
*/
// Constant must be announced only one time and value must be assigned to
// immediately.
// Otherwise it's be a error

/*
const PI;
console.log(PI);// SyntaxError: Missing initializer in const declaration
*/

/*
const PI = 3.14;
PI = 3.15;
console.log(PI);// Error: Assignment to constant variable
*/
// Also you can't use const before announced it

console.log(PI);

const PI = 3.14