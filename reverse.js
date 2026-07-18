const digits = [1, 2, 3, 4, 5, 6];

const reversedDigits = [];

for (let i = digits.length - 1; i >= 0; i--) {
    reversedDigits.push(digits[i]);
}

console.log("Original:", digits);
console.log("Reversed:", reversedDigits);