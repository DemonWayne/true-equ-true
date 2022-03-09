const TRUE = true;
const FALSE = false;
const TEST = 'Text';
let TEST2;

const { isTrue, isFalse, toBoolean } = require('../index');

console.log(isTrue(TRUE)); // True
console.log(isFalse(FALSE)); // True

console.log(isTrue(FALSE)); // False
console.log(isFalse(TRUE)); // False

console.log(toBoolean(TEST)); // True
console.log(toBoolean(TEST2)); // False