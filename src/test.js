const TRUE = true;
const FALSE = false;
const TEST = 'Text';
let TEST2;

const { checkTrue, checkFalse, toBoolean } = require('./index');

console.log(checkTrue(TRUE)); // True
console.log(checkFalse(FALSE)); // True

console.log(checkTrue(FALSE)); // False
console.log(checkFalse(TRUE)); // False

console.log(toBoolean(TEST)); // True
console.log(toBoolean(TEST2)); // False