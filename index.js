// Array of football players
const players = ['abul', 'babul', 'cabul', 'dabul', 'kabul'];

// Access the first player
const firstPlayer = players[0];

console.log('First player:', firstPlayer);

// Print all players
console.log('Before update:', players);

// Update the second player
players[1] = 'ebul';

console.log('After update:', players);

// Total number of players
console.log('Total players:', players.length);

// Last player
console.log('Last player:', players[players.length - 1]);


//practice:

const colors = ['Red', 'Green', 'Blue', 'Black'];

console.log("Length =", colors.length);
console.log("Third color =", colors[2]);

colors[3] = "White";

console.log("Updated array =", colors);
console.log("Last color =", colors[colors.length - 1]);