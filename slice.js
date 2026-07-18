const numbers = [1, 3, 5, 6, 2, 4, 5];

console.log("Original Array:", numbers);

const copiedNumbers = numbers.slice(2, 6);

console.log("Slice Result:", copiedNumbers);
console.log("After Slice:", numbers);

const removedNumbers = numbers.splice(2, 2, 99, 888, 999, 6666);

console.log("Removed Elements:", removedNumbers);
console.log("After Splice:", numbers);