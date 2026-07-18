const numbers = [12, 45, 145, 25, 78, 89, 94];

console.log("Before Pop:", numbers);

const removedNumber1 = numbers.pop();
const removedNumber2 = numbers.pop();

console.log("After Pop:", numbers);

console.log("Removed Numbers:", removedNumber1, removedNumber2);

console.log("Current Length:", numbers.length);