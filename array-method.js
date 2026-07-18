const numbers = [12, 98, 77, 6, 23];
const extraNumbers = [2, 3];

const players = ['abul', 'babul', 'cabul', 'dabul', 'kabul'];

console.log("Has 77?", numbers.includes(77));
console.log("Has 600?", numbers.includes(600));

if (players.includes("babul")) {
    console.log("Babul is playing.");
}

const mergedNumbers = numbers.concat(extraNumbers);
console.log("Merged Array:", mergedNumbers);

const joinedNumbers = mergedNumbers.join(", ");
console.log("Joined String:", joinedNumbers);

console.log("Index of 77:", numbers.indexOf(77));
console.log("Index of 100:", numbers.indexOf(100));

console.log("Is Array?", Array.isArray(numbers));